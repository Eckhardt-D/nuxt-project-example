<template>
  <div>
    <div class="bg-image page-title">
      <div class="container-fluid">
        <a href="#">
          <h1>contact us</h1>
        </a>
        <div class="pull-right">
          <router-link to="/"><i class="fa fa-home fa-lg"></i></router-link>
        </div>
      </div>
    </div>
    <no-ssr>
      <component :is="googlemap" />
    </no-ssr>
    <div class="inner-offset darken-block">
      <div class="container-fluid">
        <ul class="nav nav-tabs wow zoomIn" data-wow-delay="0.3s" id="filter">
          <li @click="setSelectedPlace"><a href="#" data-filter=".capetown">Cape Town</a></li>
          <li @click="setSelectedPlace"><a href="#" data-filter=".durban">Durban</a></li>
          <li @click="setSelectedPlace"><a href="#" data-filter=".joburg">Johannesburg</a></li>
          <li @click="setSelectedPlace"><a href="#" data-filter=".karibib">Karibib</a></li>
          <li @click="setSelectedPlace"><a data-filter=".keetmans" href="#" >Keetmanshoop</a></li>
          <br>
          <li @click="setSelectedPlace"><a href="#" data-filter=".mariental">Mariental</a></li>
          <li @click="setSelectedPlace"><a href="#" data-filter=".oshakati">Oshakati</a></li>
          <li @click="setSelectedPlace"><a href="#" data-filter=".tsumeb">Tsumeb</a></li>
          <li @click="setSelectedPlace"><a href="#" data-filter=".walvisbay">Walvis Bay</a></li>
          <li @click="setSelectedPlace" id="activeItem" class="active"><a href="#" data-filter=".windhoek">Windhoek</a></li>
        </ul>
      </div>
    </div>
    <TheContactForm :selectedPlace="selectedPlace"/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  const TheMap = () => ({component: import('@/components/TheMap.vue')})
  import TheContactForm from '~/components/TheContactForm'

  export default {
    data: function() {
      return {
        selectedPlace: 'windhoek'
      }
    },
    computed: {
      ...mapGetters([
        'isContactForm'
      ])
    },
    created() {
      this.googlemap = () => TheMap()
    },
    mounted() {
      Core.isotopeFilter()
    },
    destroyed() {
      this.$store.dispatch('changeContactForm', [null, false])
    },
    components: {
      TheContactForm
    },
    methods: {
      setSelectedPlace(e) {
        this.selectedPlace = e.target.attributes['data-filter'].value.replace('.', '')
        $(e.target).click()
      }
    },
    head() {
      if(this.isContactForm) {
        return {
          title: 'FP du Toit | Pro Parcel | Jet.X Couriers | Wesbank Transport | Contact and Locations',
          meta: [
            { name: 'description', content: 'FP du Toit, Pro Parcel, Jet.X Couriers and Wesbank Transport offices, depots, maps and directions for Windhoek, Walvis Bay, Tsumeb, Oshakati, Mariental, Keetmanshoop and Karibib in Namibia as well as Johannesburg, Durban and Cape Town in South Africa.'}
          ]
        }
        } else {
        return {
          title: 'Get a Quote for FP du Toit | Pro Parcel | Jet.X Couriers | Wesbank Transport Services',
          meta: [
            { name: 'description', content: 'Get a Quote for FP du Toit | Pro Parcel | Jet.X Couriers | Wesbank Transport Services.'}
          ]
        } 
      }
    }
  }

</script>

<style>

</style>
