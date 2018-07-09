<template>
<div class="super_container">
	
	<!-- Header -->

	<header class="header">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="header_container d-flex flex-row align-items-center justify-content-start">

						<!-- Logo -->
						<div class="logo_container">
							<div class="logo">
								<div>destino</div>
								<div>travel agency</div>
								<div class="logo_image"><img src="/images/logo.png" alt=""></div>
							</div>
						</div>

						<!-- Main Navigation -->
						<nav class="main_nav ml-auto">
							<ul class="main_nav_list">
								<li class="main_nav_item active"><a href="/">Home</a></li>
								<li class="main_nav_item"><a href="/reviews">Reviews</a></li>
								<li class="main_nav_item"><a href="/rooms">Rooms</a></li>
								<li class="main_nav_item"><a href="/activities">Activities</a></li>
								<li class="main_nav_item"><a href="/directions">Directions</a></li>
								<li class="main_nav_item"><a :href="url.booking">Book Now</a></li>
							</ul>
						</nav>

						<!-- Search -->
						<div class="search">
							<form action="#" class="search_form">
								<input type="search" name="search_input" class="search_input ctrl_class" required="required" placeholder="Keyword">
								<button type="submit" class="search_button ml-auto ctrl_class"><img src="/images/search.png" alt=""></button>
							</form>
						</div>

						<!-- Hamburger -->
						<div class="hamburger ml-auto"><i class="fa fa-bars" aria-hidden="true"></i></div>

					</div>
				</div>
			</div>
		</div>
	</header>
	<!-- Menu -->

	<div class="menu_container menu_mm">

		<!-- Menu Close Button -->
		<div class="menu_close_container">
			<div class="menu_close"></div>
		</div>

		<!-- Menu Items -->
		<div class="menu_inner menu_mm">
			<div class="menu menu_mm">
				<div class="menu_search_form_container">
					<form action="#" id="menu_search_form">
						<input type="search" class="menu_search_input menu_mm">
						<button id="menu_search_submit" class="menu_search_submit" type="submit"><img src="/images/search_2.png" alt=""></button>
					</form>
				</div>
				<ul class="menu_list menu_mm">
					<li class="menu_item menu_mm"><a href="#">Home</a></li>
					<li class="menu_item menu_mm"><a href="/reviews">Reviews</a></li>
					<li class="menu_item menu_mm"><a href="/rooms">Rooms</a></li>
					<li class="menu_item menu_mm"><a href="/activities">Activities</a></li>
					<li class="menu_item menu_mm"><a href="/directions">Directions</a></li>
					<li class="menu_item menu_mm"><a :href="url.booking">Book Now</a></li>
				</ul>

				<!-- Menu Social -->
				
				<div class="menu_social_container menu_mm">
					<ul class="menu_social menu_mm">
						<li class="menu_social_item menu_mm"><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
						<li class="menu_social_item menu_mm"><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
						<li class="menu_social_item menu_mm"><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
						<li class="menu_social_item menu_mm"><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
						<li class="menu_social_item menu_mm"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
					</ul>
				</div>

				<div class="menu_copyright menu_mm">Colorlib All rights reserved</div>
			</div>

		</div>

	</div>
	
	<!-- Home -->

	<div class="home">
                <div v-swiper:mySwiper="swiperOption">
                  <div class="swiper-wrapper">
                     <div class="swiper-slide" v-for="banner in banners" v-bind:key="banner">
                       <img :src="banner">
                     </div>
                  </div>
                  <div class="swiper-pagination swiper-pagination-bullets"></div>
                </div>
		<div class="home_content" style="z-index:999;">
			<div class="home_content_inner">
				<div class="home_text_large">welcome</div>
				<div class="home_text_small">{{ name }}</div>
			</div>
		</div>
	</div>

	<!-- Find Form -->

	<div class="find" style="z-index:999;">
		<div class="container" style="background: #131a2f; -webkit-border-radius: 20px; -moz-border-radius: 20px; border-radius: 20px;">
			<div class="row">
				<div class="col-12">
					<div class="find_title text-center">Book Now</div>
				</div>
				<div class="col-12">
					<div class="find_form_container text-center">
						<form action="#" id="find_form">
<div class="datepicker-trigger text-center">
      <button class="button find_button" style="width: 600px; margin-bottom: 50px;" id="datepicker-trigger">{{ datePicker }}</button>
      <AirbnbStyleDatepicker
        :trigger-element-id="'datepicker-trigger'"
        :mode="'range'"
        :fullscreen-mobile="true"
        :date-one="dateOne"
        :date-two="dateTwo"
        @date-one-selected="val => { dateOne = val }"
        @date-two-selected="val => { dateTwo = val }"
        @apply="booking"
      />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

        <nuxt/>

	<!-- Special -->

	<div class="special">
		<div class="container">
			<div class="row m-0">
                            <div class="col-md-6 px-4 py-3">
                              <form class="vue-form" @submit.prevent="submit">
                                <h3 class="pl-3 font-weight-bold">Send Us A Message</h3>
                                <div>
                                   <label class="label" for="name">Your Name</label>
                                   <input type="text" name="name" id="name" required="" v-model="contactName">
                                </div>
                                <div>
                                   <label class="label" for="email">Your Email Address</label>
                                   <input type="email" name="email" id="email" required=""
                                     :class="{ contactEmail , error: !contactEmail.valid }"
                                     v-model="contactEmail.value">
                                </div>
                                <div>
                                   <label class="label" for="number">Your Contact Number</label>
                                   <input type="text" name="number" id="number" required="" v-model="contactNumber">
                                </div>
                                <div>
                                   <label class="label" for="company">Group Or Company</label>
                                   <input type="text" name="company" id="company" required="" v-model="contactCompany">
                                </div>
                                <div>
                                   <label class="label" for="concern">How May We Help You?</label>
                                   <textarea type="text" name="concern" id="concern" required="" v-model="contactConcern"></textarea>
                                </div>
                                <div>
                                   <input type="submit" value="Send">
                                </div>
                             </form>
                            </div>
                            <div class="col-md-6 px-4 py-3">
                              <div class="col-12 col-sm-7">
                                 <h3 class="mb-3 font-weight-bold">Contact Information</h3>
                                 <div class="row m-0">
                                    <div class="col-1 p-0">
                                       <font-awesome-icon icon="map-marker" />
                                    </div>
                                    <div class="col-11">
                                       <h5> {{  name }}</h5>
                                       <p class="mb-2" style="line-height:1.8rem"> {{ address }} </p>
                                    </div>
                                   <div class="col-1 p-0">
                                       <font-awesome-icon icon="map" />
                                    </div>
                                    <div class="col-11">
                                       <h5>GPS Coordinates</h5>
                                       <p class="mb-2" style="line-height:1.8rem"> Lat: {{ gps.lat }} <br/> Lon: {{ gps.lon}} </p>
                                    </div>
                                   <div class="col-1 p-0">
                                       <font-awesome-icon icon="phone" />
                                    </div>
                                    <div class="col-11">
                                       <h5>Reservations</h5>
                                       <p class="mb-2" style="line-height:1.8rem"> Tel: {{ telephone.general }} <br/> Camp Management: {{ telephone.front_desk}} </p>
                                    </div>
                                 </div>
                              </div>
                            </div>
			</div>
		</div>
		<div class="special_content">
			<div class="special_slider_container">
			</div>
		</div>
	</div>

	<!-- Newsletter -->

	<div class="newsletter">
		<!-- Image by https://unsplash.com/@garciasaldana_ -->
		<div class="newsletter_background" style="background-image:url(/images/newsletter.jpg)"></div>
		<div class="container">
			<div class="row">
				<div class="col-lg-10 offset-lg-1">
					<div class="newsletter_content">
<GmapMap
  :center="center"
  :zoom="6"
  style="width: 100%; height: 600px"
>
  <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        {{infoContent}}
      </gmap-info-window>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
    @mouseover="infoContent = m.text"
    @mouseout="infoContent = null"
  />

</GmapMap>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Footer -->

	<footer class="footer">
		<div class="container">
			<div class="row">

				<!-- Footer Column -->
				<div class="col-lg-4 footer_col">
					<div class="footer_about">
						<!-- Logo -->
						<div class="logo_container">
							<div class="logo">
								<div>destino</div>
								<div>travel agency</div>
								<div class="logo_image"><img src="/images/logo.png" alt=""></div>
							</div>
						</div>
						<div class="footer_about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar sed mauris eget tincidunt. Sed lectus nulla, tempor vel eleifend quis, tempus rut rum metus. Pellentesque ultricies enim eu quam fermentum hendrerit.</div>
						<div class="copyright"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></div>
					</div>
				</div>

				<!-- Footer Column -->
				<div class="col-lg-4 footer_col">
					<div class="footer_latest">
						<div class="footer_title">Latest News</div>
						<div class="footer_latest_content">

							<!-- Footer Latest Post -->
							<div class="footer_latest_item">
								<div class="footer_latest_image"><img src="/images/latest_1.jpg" alt="https://unsplash.com/@peecho"></div>
								<div class="footer_latest_item_content">
									<div class="footer_latest_item_title"><a href="news.html">Brazil Summer</a></div>
									<div class="footer_latest_item_date">Jan 09, 2018</div>
								</div>
							</div>

							<!-- Footer Latest Post -->
							<div class="footer_latest_item">
								<div class="footer_latest_image"><img src="/images/latest_2.jpg" alt="https://unsplash.com/@sanfrancisco"></div>
								<div class="footer_latest_item_content">
									<div class="footer_latest_item_title"><a href="news.html">A perfect vacation</a></div>
									<div class="footer_latest_item_date">Jan 09, 2018</div>
								</div>
							</div>

						</div>
					</div>
				</div>

				<!-- Footer Column -->
				<div class="col-lg-4 footer_col">
					<div class="tags footer_tags">
						<div class="footer_title">Tags</div>
						<ul class="tags_content d-flex flex-row flex-wrap align-items-start justify-content-start">
							<li class="tag"><a href="#">travel</a></li>
							<li class="tag"><a href="#">summer</a></li>
							<li class="tag"><a href="#">cruise</a></li>
							<li class="tag"><a href="#">beach</a></li>
							<li class="tag"><a href="#">offer</a></li>
							<li class="tag"><a href="#">vacation</a></li>
							<li class="tag"><a href="#">trip</a></li>
							<li class="tag"><a href="#">city break</a></li>
							<li class="tag"><a href="#">adventure</a></li>
						</ul>
					</div>
				</div>

			</div>
		</div>
	</footer>
</div>
</template>
<script>
import { mapGetters, mapMutations, mapActions} from 'vuex';
import _ from 'lodash';

export default {
  data () {
      return {
        dateFormat: 'D MMM',
        dateOne: '',
        dateTwo: '',
        infoContent: '',
        infoWindowPos: null,
        infoWinOpen: false,
        currentMidx: null,
        //optional: offset infowindow so it visually sits nicely on top of our marker
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        },
        contactName: '',
        contactEmail: '',
        contactNumber: '',
        contactCompany: '',
        contactConcern: '',
        swiperOption: {
          loop: true,
          effect: 'fade',
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay: {
           delay: 3500,
           disableOnInteraction: false,
          },
          setWrapperSize: false,
          autoHeight: false,
          slidesPerView: '1',
          centeredSlides: true,
          spaceBetween: 0,
        }
      }
  },
  computed: {
    banners: function() {
      var images = [];
      var info = this.$store.getters.wetuInfo;
        _.forEach(info.content.images, function(image) {
           images.push('/images/'+image.url_fragment);
        });
      return images;
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
    url: function() {
      return {booking: "https://www.nightsbridge.co.za/bridge/book?bbid="+this.bbid};
    },
    address: function() {
      return this.$store.getters.wetuInfo.content.contact_information.address;
    },
    gps: function() {
      return {lat: this.$store.getters.wetuInfo.position.driving_latitude, lon: this.$store.getters.wetuInfo.position.driving_longitude}
    },
    telephone: function() {
      return {general: this.$store.getters.wetuInfo.content.contact_information.telephone, front_desk: this.$store.getters.wetuInfo.content.contact_information.front_desk_telephone}
    },
    datePicker: function() {
      if (this.dateOne != '' && this.dateTwo != '') {
         return this.dateOne+' to '+this.dateTwo;
      } else {
         return "Select dates"
      }
    },
    center: function() {
      var info = this.$store.getters.wetuInfo;
      return { lat: info.position.latitude, lng: info.position.longitude }
    },
    markers: function() {
      var info = this.$store.getters.wetuInfo;
      return [{ position: { lat: info.position.latitude, lng: info.position.longitude }, text: info.name}]

    }
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
      title: wetu.name + ' | ' + wetu.position.country + ' | ' + wetu.position.area,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: wetu.content.general_description },
        { hid: 'og:type', name: 'og:type', content: 'article' },
        { hid: 'og:title', name: 'og:title', content: wetu.name + ' | ' + wetu.position.country + ' | ' + wetu.position.area },
        { hid: 'og:description', name: 'og:description', content: wetu.content.general_description },
        { hid: 'og:image', name: 'og:image', content: wetu.content.images[0].url },
        { hid: 'og:site_name', name: 'og:site_name', content: wetu.name },
        { hid: 'article:publisher', name: 'article:publisher', content: wetu.content.contact_information.facebook },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:title', name: 'twitter:title', content: wetu.name + ' | ' + wetu.position.country + ' | ' + wetu.position.area },
        { hid: 'twitter:description', name: 'twitter:description', content: wetu.content.general_description },
        { hid: 'twitter:image:src', name: 'twitter:image:src', content: wetu.content.images[0].url },
        { hid: 'twitter:site', name: 'twitter:site', content: wetu.content.contact_information.twitter },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
  .my-swiper {
    height: 300px;
    width: 100%;
    .swiper-slide {
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }
</style>

<style>
.vue-form {
  font-size: 16px;
  width: 500px;
  padding: 15px 30px;
  border-radius: 4px;
  margin: 50px auto;
  width: 500px;
  background-color: #fff;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
}
.vue-form fieldset {
  margin: 24px 0 0 0;
}
.vue-form legend {
  padding-bottom: 10px;
  border-bottom: 1px solid #ecf0f1;
}
.vue-form div {
  position: relative;
  margin: 20px 0;
}
.vue-form h4,
.vue-form .label {
  color: #94aab0;
  margin-bottom: 10px;
}
.vue-form .label {
  display: block;
}
.vue-form input,
.vue-form textarea,
.vue-form select,
.vue-form label {
  color: #2b3e51;
}
.vue-form input[type="text"],
.vue-form input[type="email"],
.vue-form textarea,
.vue-form select,
.vue-form legend {
  display: block;
  width: 100%;
  appearance: none;
}
.vue-form input[type="text"],
.vue-form input[type="email"],
.vue-form textarea,
.vue-form select {
  padding: 12px;
  border: 1px solid #cfd9db;
  background-color: #ffffff;
  border-radius: 0.25em;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
}
.vue-form input[type="text"]:focus,
.vue-form input[type="email"]:focus,
.vue-form textarea:focus,
.vue-form select:focus {
  outline: none;
  border-color: #2c3e50;
  box-shadow: 0 0 5px rgba(44, 151, 222, 0.2);
}
.vue-form .select {
  position: relative;
}
.vue-form .select::after {
  content: "";
  position: absolute;
  z-index: 1;
  right: 16px;
  top: 50%;
  margin-top: -8px;
  display: block;
  width: 16px;
  height: 16px;
  background: url("data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3C%21DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0D%0A%09%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2016%2016%22%20enable-background%3D%22new%200%200%2016%2016%22%20xml%3Aspace%3D%22preserve%22%3E%0D%0A%3Cg%3E%0D%0A%09%3Cpolygon%20fill%3D%22%232c3e50%22%20points%3D%220.9%2C5.5%203.1%2C3.4%208%2C8.3%2012.9%2C3.4%2015.1%2C5.5%208%2C12.6%20%09%22%2F%3E%0D%0A%3C%2Fg%3E%0D%0A%3C%2Fsvg%3E")
    no-repeat center center;
  pointer-events: none;
}
.vue-form select {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: pointer;
}
.vue-form select::-ms-expand {
  display: none;
}
.vue-form .vue-form-list {
  margin-top: 16px;
}
.vue-form .vue-form-list::after {
  clear: both;
  content: "";
  display: table;
}
.vue-form .vue-form-list li {
  display: inline-block;
  position: relative;
  user-select: none;
  margin: 0 26px 16px 0;
  float: left;
}
.vue-form input[type="radio"],
.vue-form input[type="checkbox"] {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  padding: 0;
  opacity: 0;
  z-index: 2;
}
.vue-form input[type="radio"] + label,
.vue-form input[type="checkbox"] + label {
  padding-left: 24px;
}
.vue-form input[type="radio"] + label::before,
.vue-form input[type="radio"] + label::after,
.vue-form input[type="checkbox"] + label::before,
.vue-form input[type="checkbox"] + label::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -8px;
  width: 16px;
  height: 16px;
}
.vue-form input[type="radio"] + label::before,
.vue-form input[type="checkbox"] + label::before {
  border: 1px solid #cfd9db;
  background: #ffffff;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
}
.vue-form input[type="radio"] + label::before,
.vue-form input[type="radio"] + label::after {
  border-radius: 50%;
}
.vue-form input[type="checkbox"] + label::before,
.vue-form input[type="checkbox"] + label::after {
  border-radius: 0.25em;
}
.vue-form input[type="radio"] + label::after,
.vue-form input[type="checkbox"] + label::after {
  background-color: #2c3e50;
  background-position: center center;
  background-repeat: no-repeat;
  box-shadow: 0 0 5px rgba(44, 151, 222, 0.4);
  display: none;
}
.vue-form input[type="radio"] + label::after {
  background-image: url("data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3C%21DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0D%0A%09%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2016%2016%22%20enable-background%3D%22new%200%200%2016%2016%22%20xml%3Aspace%3D%22preserve%22%3E%0D%0A%3Ccircle%20fill%3D%22%23FFFFFF%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%223%22%2F%3E%0D%0A%3C%2Fsvg%3E");
}
.vue-form input[type="checkbox"] + label::after {
  background-image: url("data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2018.1.1%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0D%0A%3C%21DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0D%0A%09%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2016%2016%22%20enable-background%3D%22new%200%200%2016%2016%22%20xml%3Aspace%3D%22preserve%22%3E%0D%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-miterlimit%3D%2210%22%20points%3D%225%2C8%207%2C10%2011%2C6%20%22%2F%3E%0D%0A%3C%2Fsvg%3E");
}
.vue-form input[type="radio"]:focus + label::before,
.vue-form input[type="checkbox"]:focus + label::before {
  box-shadow: 0 0 5px rgba(44, 151, 222, 0.6);
}
.vue-form input[type="radio"]:checked + label::after,
.vue-form input[type="checkbox"]:checked + label::after {
  display: block;
}
.vue-form input[type="radio"]:checked + label::before,
.vue-form input[type="radio"]:checked + label::after,
.vue-form input[type="checkbox"]:checked + label::before,
.vue-form input[type="checkbox"]:checked + label::after {
  animation: cd-bounce 0.3s;
}
.vue-form textarea {
  min-height: 120px;
  resize: vertical;
  overflow: auto;
}
.vue-form input[type="submit"] {
  border: none;
  background: #2c3e50;
  border-radius: 0.25em;
  padding: 12px 20px;
  color: #ffffff;
  font-weight: bold;
  float: right;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  appearance: none;
}
.no-touch .vue-form input[type="submit"]:hover {
  background: #42a2e1;
}
.vue-form input[type="submit"]:focus {
  outline: none;
  background: #2b3e51;
}
.vue-form input[type="submit"]:active {
  transform: scale(0.9);
}
.vue-form .error-message {
  height: 35px;
  margin: 0px;
}
.vue-form .error-message p {
  background: #e94b35;
  color: #ffffff;
  font-size: 1.4rem;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-radius: 0.25em;
  padding: 16px;
}
.vue-form .error {
  border-color: #e94b35 !important;
}
.vue-form .counter {
  background-color: #ecf0f1;
  position: absolute;
  right: 0px;
  top: 0px;
  font-size: 10px;
  padding: 4px;
}
</style>
