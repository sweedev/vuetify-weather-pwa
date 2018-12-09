<template>
    <v-card color="red lighten-2" dark></v-card>
</template>

<script>
export default {
  methods: {
    getAddressData (addressData, placeResultData, id) {
      if (placeResultData) {
        this.address = placeResultData.formatted_address
      }
    }
  }
}
</script>

<style>

</style>
