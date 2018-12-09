class WeatherForecast {
    
    constructor() {
        this.cloudiness = 0
        this.windSpeed = 0
        this.humidity = 0

        this.temperatureValue = 0
        this.temperatureHigh = 0
        this.temperatureLow = 0

        this.location = ''
        this.description = 'Please connect to Internet to fetch the latest forecaast'
        this.weathericon = require('../assets/icons/cloud_.svg')

        this.update()
    }

    update () {
        if (navigator.onLine) {
            navigator.geolocation.getCurrentPosition(position => this.updateForecast(position))
        }
    }

    async updateForecast (position) {
        let data = null

        try {
            data = await this.getForecast(position.coords)
        } catch (e) {
            console.log(e)
        }

        this.populate(data)
    }

    async getForecast (coords) {
        let appKey = 'a3e7bdc246b811691b06aab13ccb0dbb'
        let endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${appKey}&units=metric`
    
        let response = await fetch(endpoint)

        return await response.json()
    }

    populate(data) {
        this.cloudiness = data.clouds.all
        this.windSpeed = data.wind.speed
        this.humidity = data.main.humidity
        this.temperatureValue = Math.round(data.main.temp)
        this.temperatureHigh = Math.round(data.main.temp_max)
        this.temperatureLow = Math.round(data.main.temp_min)
        this.location = data.name + ', ' + data.sys.country
        this.description = data.weather[0].description
        this.weatherIcon = this.getWeatherIcon(data.weather[0].id)
    }

    getWeatherIcon(id) {
        if(this.isThunderstorm(id)) {
            return require('../assets/icons/thunderstorm_.svg')
        }

        if(this.isDrizzle(id) || this.isRain(id)) {
            return require('../assets/icons/rain_.svg')
        }

        if(this.isSnow(id)) {
            return require('../assets/icons/snow_.svg')
        }

        return require('../assets/icons/cloud_.svg')
    }

    isThunderstorm(id) {
        return id > 199 && id < 233
    }

    isDrizzle(id) {
        return id >299 && id < 322
    }

    isRain(id) {
        return id > 499 && id < 532
    }

    isSnow(id) {
        return id > 599 && id < 623
    }
}

export default WeatherForecast
