<template>

	<!-- Popular -->

	<div class="popular">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="section_title text-center">
						<h2>Accommodation</h2>
						<div>take a look at our accommodation</div>
					</div>
				</div>
			</div>
			<div class="row" v-for="room in rooms" v-bind:key="room">
                             <div class="col">
					<div class="popular_content d-flex flex-md-row flex-column flex-wrap align-items-md-center align-items-start justify-content-md-between justify-content-start">
                                                <div>
                                                     <div class="row mb-3 m-0 d-flex">
                                                       <a href="#" :alt="room.name" :title="room.name" class="more-info white-text col-md-3 waves-effect waves-light p-0 z-depth-2 d-flex" :style="room.style"><p class="container text-center p-3 mx-auto mb-0 mt-auto" style="width:100%; color:#ffffff; background:#000000;"><b>All Details</b></p></a>
                                                       <div class="col-md-7 pl-4">
                                                         <h3>{{room.name}}</h3>
                                                         <p class="m-0 text-justify">{{room.description}}</p>
                                                       </div>
                                                       <div class="col-md-2 text-center pr-0 my-auto">
                                                          <p class="m-0">from</p>
                                                          <h2></h2>
                                                          <h2 class="mb-0">N$ {{room.rate}}</h2>
                                                          <p class="mb-1">per night</p>
                                                          <a :href="url.booking" target="_blank" class="btn white-text my-auto z-depth-0 p-4 pt-1 pb-1 waves-effect waves-light">Book Now</a> 
                                                       </div>
                                                     </div>

                                                </div>
                                           </div>
					</div>
			</div>
		</div>
	</div>

</template>
<script>
import { mapGetters, mapMutations, mapActions} from 'vuex';
import _ from 'lodash';

export default {
  data () {
      return {
      }
  },
  computed: {
    rooms: function() {
      var rooms = [];
      var info = this.$store.getters.wetuInfo;
      _.forEach(info.rooms, function(room) {
          rooms.push({ 
            name: room.name, 
            image: '/images/'+room.images[0].url_fragment,
            currency: room.per_person_sharing_rates[0].currency,
            rate: room.per_person_sharing_rates[0].rate,
            description: room.description,
            style: 'background-image:url('+'/images/'+room.images[0].url_fragment+');min-height:200px;background-repeat:no-repeat;background-size:cover;background-position:50% 50%' 
          });
      })
      return rooms;
    },
    name: function() {
      return this.$store.getters.wetuInfo.name;
    },
    url: function() {
      return {booking: "https://www.nightsbridge.co.za/bridge/book?bbid="+this.bbid};
    },
    description: function() {
      return this.$store.getters.wetuInfo.content.extended_description;
    },
    bbid: function() {
      return process.env.BBID;
    },
  },
  methods: {
     booking: function() {
       if (this.dateOne != '' && this.dateTwo != '') {
          window.location.href="https://www.nightsbridge.co.za/bridge/book?bbid="+this.bbid+"&startdate="+this.dateOne+"&enddate="+this.dateTwo
       }
     }
  },
  components: {
  },
  head() {
    var wetu = this.$store.getters.wetuInfo
    return {
      title: wetu.name + ' | ' + wetu.position.country + ' | ' + wetu.position.area + ' | Rooms',
      meta: [
        { hid: 'og:title', name: 'og:title', content: wetu.name + ' | ' + wetu.position.country + ' | ' + wetu.position.area + ' | Rooms' },
        { hid: 'twitter:title', name: 'twitter:title', content: wetu.name + ' | ' + wetu.position.country + ' | ' + wetu.position.area + ' | Rooms' },
      ],
    }
  },
}
</script>

<style>
</style>
