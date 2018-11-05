<template>
  <gmap-map
    :center="center"
    :zoom="4"
    class="we-onmap wow fadeInUp"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
export default {
    data () {
      return {
        center: {lat:-22.512308, lng:15.065591},
        markers: [
          {position: {lat: -26.5742675, lng: 18.1305362}}, 
          {position: {lat:-26.1109254, lng: 28.2683271}},
          {position: {lat: -33.898231, lng: 18.667859}},
          {position: {lat:-22.946667, lng: 14.507806}},
          {position: {lat:-22.512308, lng:17.065591}},
          {position: {lat:-19.241917, lng:17.709444}},
          {position: {lat:-17.765556, lng:15.697222}},
          {position: {lat:-21.9349441, lng:15.8492803}},
          {position: {lat:-24.6121358, lng:17.9290437}},
          {position: {lat:-29.8483608, lng:30.9222511}}
        ]
      }
    }
  }
</script>

<style>

</style>
