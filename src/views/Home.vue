<template>
  <div>
    <cmp-myPlace></cmp-myPlace>
    <cmp-favoritePlaces></cmp-favoritePlaces>
  </div>
</template>

<script>
import MyPlace from '../components/MyPlace'
import FavoritePlaces from '../components/FavoritePlaces'

export default {
  name: 'home',
  components: {
    'cmp-myPlace': MyPlace,
    'cmp-favoritePlaces': FavoritePlaces
  }
}
</script>
