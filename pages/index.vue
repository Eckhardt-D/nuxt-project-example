<template>
  <div>
	<!-- Top Destinations -->

	<div class="top">
		<div class="container" style="margin: auto; width: 960px; height: 800px;">
			<div class="row">
				<div class="col">
					<div class="section_title text-center">
						<h2>{{ name }} Welcomes You</h2>
					</div>
				</div>
			</div>
                        <div class="row">
                                <div class="col">
                                        <div class="text-center">
                                            <span v-html="description"></span>
                                        </div>
                                </div>
                        </div>
		</div>
	</div>

	<!-- Popular -->

	<div class="popular">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="section_title text-center">
						<h2>Activities For The Whole Family</h2>
						<div>take a look at these things to do</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<div class="popular_content d-flex flex-md-row flex-column flex-wrap align-items-md-center align-items-start justify-content-md-between justify-content-start">
						
                                                <div class="popular_item" v-for="activity in activities" v-bind:key="activity">
                                                     <img :src="activity.image" :alt="activity.name">

                                                     <div style="font-size:20px; font-weight:400; color: #000000;"> {{ activity.name }} </div>
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
    activities: function() {
      var activities = [];
      var info = this.$store.getters.wetuInfo;
      _.forEach(info.activities, function(activity) {
          activities.push({ name: activity.name, image: '/images/'+activity.images[0].url_fragment });
      })
      return activities;
    },
    name: function() {
      return this.$store.getters.wetuInfo.name;
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
      title: wetu.name + ' | ' + wetu.position.country + ' | ' + wetu.position.area + ' | Home',
      meta: [
        { hid: 'og:title', name: 'og:title', content: wetu.name + ' | ' + wetu.position.country + ' | ' + wetu.position.area + ' | Home' },
        { hid: 'twitter:title', name: 'twitter:title', content: wetu.name + ' | ' + wetu.position.country + ' | ' + wetu.position.area + ' | Home' },
      ],
    }
  },
}
</script>

<style>
</style>
