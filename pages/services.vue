<template>
  <div>
    <div class="bg-image page-title">
      <div class="container-fluid">
        <a href="#">
          <h1>OUR SERVICES</h1>
          <img v-if="selectedService === 'FP DU TOIT'" style="margin-top: -15px; margin-left: 40px;" height="50px" src="media/3-column-info/1.png" alt="">
          <img v-if="selectedService === 'PRO PARCEL'" style="margin-top: -15px; margin-left: 40px;" height="50px" src="media/3-column-info/3.png" alt="">
          <img v-if="selectedService === 'JET.X COURIERS'" style="margin-top: -15px; margin-left: 40px;" height="50px" src="media/3-column-info/2.png" alt="">
          <img v-if="selectedService === 'WESBANK TRANSPORT'" style="margin-top: -15px; margin-left: 40px;" height="50px" src="media/3-column-info/4.png" alt="">
        </a>
        <div class="pull-right">
          <a href="/"><i class="fa fa-home fa-lg"></i></a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="/services">Our
            services</a> 
        </div>
      </div>
    </div>

    <div class="inner-offset darken-block">
      <div class="container-fluid">
        <ul class="nav nav-tabs wow zoomIn" data-wow-delay="0.3s" id="filter">
          <li @click="$store.dispatch('changeService', '')" class="active"><a href="#" data-filter=".allservices">All services</a></li>
          <li @click="$store.dispatch('changeService', 'FP DU TOIT')"><a href="#" data-filter=".fpdutoit">FP DU TOIT</a></li>
          <li @click="$store.dispatch('changeService', 'PRO PARCEL')"><a href="#" data-filter=".proparcel">PRO PARCEL</a></li>
          <li @click="$store.dispatch('changeService', 'JET.X COURIERS')"><a href="#" data-filter=".jetxcouriers">JET.X COURIERS</a></li>
          <li @click="$store.dispatch('changeService', 'WESBANK TRANSPORT')"><a href="#" data-filter=".wesbank">WESBANK TRANSPORT</a></li>
        </ul>
      </div>
    </div>
    <div class="container-fluid inner-offset wow zoomIn" data-wow-delay="0.3s">
      <div class="tab-content row services">
        <div class="tab-pane active isotope-filter text-center">
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices jetxcouriers">
            <!-- <img class="full-width" src="media/3-column-info/4.jpg" alt="Img"> -->
            <h4>CROSS-BORDER</h4>
            <router-link class="btn btn-success special-services" to="/jetx-detail">READ MORE</router-link>
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices jetxcouriers">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>AIR EXPRESS</h4>
            <router-link class="btn btn-success special-services" to="/jetx-detail">READ MORE</router-link>
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices jetxcouriers">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>INTERNATIONAL AIR EXPRESS</h4>
            <router-link class="btn btn-success special-services" to="/jetx-detail">READ MORE</router-link>
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices jetxcouriers">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>OVERNIGHT ROAD</h4>
            <router-link class="btn btn-success special-services" to="/jetx-detail">READ MORE</router-link>
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices jetxcouriers">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>SECOND DAY ROAD</h4>
            <router-link class="btn btn-success special-services" to="/jetx-detail">READ MORE</router-link>
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices jetxcouriers">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>DOMESTIC COURIER</h4>
            <router-link class="btn btn-success special-services" to="/jetx-detail">READ MORE</router-link>
          </div>

          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices proparcel">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>PRIORITY</h4>
            <router-link class="btn btn-success special-services" to="/pro-parcel-detail">READ MORE</router-link>
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices proparcel">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>DOOR-TO-DOOR</h4>
            <router-link class="btn btn-success special-services" to="/pro-parcel-detail">READ MORE</router-link>
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices proparcel">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>TERMINAL-TO-DOOR</h4>
            <router-link class="btn btn-success special-services" to="/pro-parcel-detail">READ MORE</router-link>
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices proparcel">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>DEPOT-TO-DEPOT</h4>
            <router-link class="btn btn-success special-services" to="/pro-parcel-detail">READ MORE</router-link>
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices proparcel">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>REFRIGERATED PART-LOADS</h4>
            <router-link class="btn btn-success special-services" to="/pro-parcel-detail">READ MORE</router-link>
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices proparcel">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>PALLETISED PART-LOADS</h4>
            <router-link class="btn btn-success special-services" to="/pro-parcel-detail">READ MORE</router-link>
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices proparcel">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>ECONOMY</h4>
            <router-link class="btn btn-success special-services" to="/pro-parcel-detail">READ MORE</router-link>
          </div>

          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices wesbank">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>CONTAINER TRANSPORT</h4>
            <!-- <router-link class="btn btn-success special-services" to="/wesbank-detail">READ MORE</router-link> -->
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices wesbank">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>MATERIAL HANDLING</h4>
            <!-- <router-link class="btn btn-success special-services" to="/wesbank-detail">READ MORE</router-link> -->
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices wesbank">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>CHEMICAL LOGISTICS</h4>
            <!-- <router-link class="btn btn-success special-services" to="/wesbank-detail">READ MORE</router-link> -->
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices wesbank">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>NATIONAL & SADC TRANSPORT</h4>
            <!-- <router-link class="btn btn-success special-services" to="/wesbank-detail">READ MORE</router-link> -->
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices wesbank">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>WAREHOUSING</h4>
            <!-- <router-link class="btn btn-success special-services" to="/wesbank-detail">READ MORE</router-link> -->
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices wesbank">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>CARGO HANDLING & CRANE HIRE</h4>
            <!-- <router-link class="btn btn-success special-services" to="/wesbank-detail">READ MORE</router-link> -->
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices wesbank">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>OPERATOR TRAINING</h4>
            <!-- <router-link class="btn btn-success special-services" to="/wesbank-detail">READ MORE</router-link> -->
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices wesbank">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>ABNORMAL LOADS</h4>
            <!-- <router-link class="btn btn-success special-services" to="/wesbank-detail">READ MORE</router-link> -->
          </div>

          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices fpdutoit">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>LINE HAUL CROSS BORDER</h4>
            <!-- <router-link class="btn btn-success special-services" to="/services">READ MORE</router-link> -->
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices fpdutoit">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>INTER-CITY LINE HAUL RSA</h4>
            <!-- <router-link class="btn btn-success special-services" to="/services">READ MORE</router-link> -->
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices fpdutoit">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>CENTRAL AFRICA TRANSPORT DIVISION</h4>
            <!-- <router-link class="btn btn-success special-services" to="/services">READ MORE</router-link> -->
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices fpdutoit">
            <!-- <img class="full-width" src="media/3-column-info/6.jpg" alt="Img"> -->
            <h4>REFRIGERATED TRANSPORT</h4>
            <!-- <router-link class="btn btn-success special-services" to="/services">READ MORE</router-link> -->
          </div>

        </div>
      </div>
    </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    mounted() {
      Core.isotopeFilter()
      
      $('.nav-tabs li > a').each((tab, item) => {
        if(item.innerText === this.selectedService) {
          item.click()
        }
      })
    },
    computed: {
      ...mapGetters([
        'selectedService'
      ])
    }
  }

</script>

<style>

</style>
