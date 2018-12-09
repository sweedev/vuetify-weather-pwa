<template>
  <v-layout row>
    <v-flex >
      <v-card>
        <v-toolbar color="cyan" dark>
          <v-toolbar-title>My Position</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>gps_fixed</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list two-line>
          <v-list-tile
              avatar
              @click="$router.go('/about')"
            >
              <v-list-tile-avatar>
                <img :src="weatherData.weatherIcon">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="weatherData.location"></v-list-tile-title>
                <!--<v-list-tile-sub-title v-html="weatherData.name + ', ' + weatherData.sys.country"></v-list-tile-sub-title>-->
              </v-list-tile-content>
              <v-list-tile-action-text><v-icon>info</v-icon></v-list-tile-action-text>
            </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import WeatherForecast from '../services/weatherforecast'

export default {
  name: 'cmp-myPlace',
  data: () => ({
    weatherData: new WeatherForecast()
  })
}
</script>

<style>

</style>
