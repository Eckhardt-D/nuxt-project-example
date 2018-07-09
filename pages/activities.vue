<template>

	<!-- Popular -->

	<div class="popular">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="section_title text-center">
						<h2>{{ name }} Experiences</h2>
						<div>Activities are offered to all guests taking in to account weather conditions and the availability of guides and vehicles</div>
					</div>
				</div>
			</div>
			<div class="row" v-for="activity in activities" v-bind:key="activity">
                             <div class="col">
					<div class="popular_content d-flex flex-md-row flex-column flex-wrap align-items-md-center align-items-start justify-content-md-between justify-content-start">
                                                <div>
                                                     <div class="row mb-3 m-0 d-flex">
                                                       <a href="#" :alt="activity.name" :title="activity.name" class="more-info white-text col-md-3 waves-effect waves-light p-0 z-depth-2 d-flex" :style="activity.style"></a>
                                                       <div class="col-md-7 pl-4">
                                                         <h3>{{activity.name}}</h3>
                                                         <p class="m-0 text-justify">{{activity.description}}</p>
                                                       </div>
                                                       <div class="col-md-2 text-center pr-0 my-auto">
                                                       </div>
                                                     </div>

                                                </div>
                                           </div>
					</div>
			</div>
		</div>
	</div>
</template>
i
<script>
import { mapGetters, mapMutations, mapActions} from 'vuex';
import _ from 'lodash';

export default {
  data () {
      return {
      }
  },
  computed: {
    activities: function() {
      var activities = [];
      var info = this.$store.getters.wetuInfo;
      _.forEach(info.activities, function(activity) {
          activities.push({ 
            name: activity.name,
            description: activity.description, 
            image: '/images/'+activity.images[0].url_fragment,
            style: 'background-image:url('+'/images/'+activity.images[0].url_fragment+');min-height:200px;background-repeat:no-repeat;background-size:cover;background-position:50% 50%'
          });
      })
      return activities;
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
  },
  components: {
  },
  head() {
    var wetu = this.$store.getters.wetuInfo
    return {
      title: wetu.name + ' | ' + wetu.position.country + ' | ' + wetu.position.area + ' | Activities',
      meta: [
        { hid: 'og:title', name: 'og:title', content: wetu.name + ' | ' + wetu.position.country + ' | ' + wetu.position.area + ' | Activities' },
        { hid: 'twitter:title', name: 'twitter:title', content: wetu.name + ' | ' + wetu.position.country + ' | ' + wetu.position.area + ' | Activities' },
      ],
    }
  },
}
</script>


<style>
</style>
