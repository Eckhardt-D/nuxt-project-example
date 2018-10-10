<template>
  <div>
    <div class="bg-image page-title">
      <div class="container-fluid">
        <router-link to="/about">
          <h1>ABOUT US</h1>
        </router-link>
        <div class="pull-right">
          <router-link to="/"><i class="fa fa-home fa-lg"></i></router-link> &nbsp;&nbsp;|&nbsp;&nbsp; <router-link to="/about">About
            Us</router-link>
        </div>
      </div>
    </div>

    <div class="container-fluid inner-offset">
      <div class="hgroup text-center wow zoomIn" data-wow-delay="0.3s">
        <h2>FOR ALL YOUR TRANSPORT NEEDS</h2>
        <h1>FP DU TOIT - THE RIGHT CHOICE</h1>
      </div>
      <ul class="nav nav-tabs wow fadeIn" data-wow-delay="0.3s" id="myTab">
        <li class="active"><a href="#tab1" data-toggle="tab">WHY CHOOSE US</a></li>
        <li><a href="#tab2" data-toggle="tab">OUR MISSION</a></li>
        <li><a href="#tab3" data-toggle="tab">OUR STRATEGY</a></li>
        <li><a href="#tab4" data-toggle="tab">MANAGEMENT</a></li>
      </ul>

      <div class="tab-content inner-offset wow fadeIn" data-wow-delay="0.3s">
        <div class="tab-pane active" id="tab1">
          <div class="row">
            <div class="col-sm-5">
              <img class="full-width" src="media/fleet-gallery/3.jpg" alt="Img">
            </div>
            <div class="col-sm-7">
              <p><strong style="font-size:16px;">What started out in 1968 as a small Northern Cape family business, FP
                  du Toit Transport Group has grown into one of Southern Africa’s major transport and freight
                  companies.</strong></p>
              <p>Almost 50 years later, family is still a central characteristic at the FP du Toit Transport Group.
                FP du Toit Transport Group’s extended family now comprises more than 1000 members, working out of 13
                locations across Namibia, South Africa and 7 additional SADC countries. A fleet of 560 power units
                forms the operational backbone of the transport services offered.</p>
              <u>In an increasingly globalized world, time is of the essence and being ‘out of stock’ is unacceptable.
              </u>
            </div>
          </div>
        </div>
        <div class="tab-pane" id="tab2">
          <div class="row">
            <div class="col-sm-5">
              <img class="full-width" src="media/images/2.png" alt="Img">
            </div>
            <div class="col-sm-7 text-block">
              <p><strong>OUR VISION</strong></p>
              <p>A world class service provider of specialised logistics and transport solutions to selected customers,
                focused on rendering exceptional client service, generating fair returns for its shareholders and
                providing rewarding careers to its employees.
              </p>
              <u>We will achieve this by conducting our business in accordancewith our values.</u>
            </div>
          </div>
        </div>
        <div class="tab-pane" id="tab3">
          <div class="row">
            <div class="col-sm-5 text-right">
              <img class="full-height text-right" src="media/images/3.jpg" alt="Img">
            </div>
            <div class="col-sm-7 text-block">
              <p><strong>FP du Toit Transport Group continuously invests in modern technologies and management tools to
                  handle stock safely and rapidly.</strong></p>
              <p> From barcoding, to tracking and satellite monitoring – your products and packages are handled with
                the necessary care.
                One of the unique features that the company offers clients, is in-house customs clearing. In order to
                expedite import/export activities and to eliminate wasteful delays, in-house customs clearing services
                work closely with the permanent Namibian customs officials on site at our Prosperita Depot in Windhoek.
                FP du Toit Transport Group is constantly re-assessing its methods and researching ways to become more
                efficient. An example would be: Import documents are flown from South Africa to
                Windhoek in order to arrive prior to the transporting vehicle, to expedite the framing on the Namibian
                Customs software, Asycuda.</p>
              <u>Aliquam malesuada mauris urk metus lorem ipsum dolor sit amet consectetur adipisicing</u>
            </div>
          </div>
        </div>

        <div class="tab-pane" id="tab4">
          <div class="row">
            <div class="col-sm-5 text-right">
              <img class="full-height text-right" src="media/images/3.jpg" alt="Img">
            </div>
            <div class="col-sm-7 text-block">
              <p>Willie du Toit: Managing Director</p>
              <p><strong><u>Executive Team:</u></strong><br /> Stephan Terblanche: Chief Executive Officer<br /> Dirkie
                Uys: Chief Operating Officer<br /> Leodolf Swanepoel: Chief Financial Officer<br /> Heinrich Schmidt:
                Chief Transport Officer<br /> Lucille Feris: Chief Human Resources Officer</p>
              <p><strong><u>Senior Management Team:</u></strong><br /> Verdun van der Watt: Manager - Wesbank Transport<br />
                Charles Lowe: Manager - Pro Parcel Distribution<br /> Nian Berg: Manager - JET.X Couriers<br /> Brand
                Botha: Manager - RSA
              </p>
              <p><strong><u>Sales Team:</u></strong>
              <br />Nezar Uys: New Business Development Manager<br /> Martie Beukes: Sales Executive Johannesburg<br />
                Esta Liebenberg: Sales Executive Cape Town<br /> Wayne Antonius: Sales Executive Windhoek
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row stats percent-blocks" data-waypoint-scroll="true">
        <div class="col-sm-6 col-md-3 col-lg-3">
          <div class="chart" data-percent="50">
            <span><i class="fa fa-calendar"></i></span>
            <span class="percent"></span>Years
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3">
          <div class="chart" data-percent="13">
            <span><i class="fa fa-home"></i></span>
            <span class="percent"></span>Depots
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3">
          <div class="chart" data-percent="7">
            <span><i class="fa fa-road"></i></span>
            <span class="percent"></span>Countries
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3">
          <div class="chart" data-percent="560">
            <span><i class="fa fa-truck"></i></span>
            <span class="percent"></span>Fleet size
          </div>
        </div>
      </div>
    </div>

    <div class="bg-image parallax" style="background-image:url(media/bg/4.jpg);">
      <div class="container-fluid text-center wow fadeInUp" data-wow-delay="0.3s">
        <h1>WE ARE DEDICATED TO PROVIDE THE BEST SERVICE <br> AT THE LOWEST POSSIBLE COST</h1>
        <router-link class="btn btn-success" to="/services">READ MORE</router-link>
      </div>
    </div>

    <!-- <div class="container-fluid block-content inner-offset">
				<div class="hgroup text-center wow fadeInUp" data-wow-delay="0.3s">
					<h1>MEET OUR TEAM</h1>
					<h2>dedicated & professionals</h2>
				</div>
				<div class="row main-grid team hover-eff">
					<div class="col-sm-4 wow fadeInLeft" data-wow-delay="0.3s">
						<div class="userpic" style="background-image:url(media/our-team/1.jpg);">
							<span>Integer congue elit non semper laore du lectus orc posuer nisl tempor lacus fel sed elite nisal mauris led
								Lorem ipsum dolor sit amet consectetur</span>
						</div>
						<div class="user-info">
							<small>Managing Director</small>
							<h4>JOHN DEO</h4>
						</div>
						<a href="#" class="btn btn-sm btn-success">SEND EMAIL</a>
						<div class="soc-icons">
							<a style="color:#005394;" href="#"><i class="fa fa-facebook-square fa-lg"></i></a>
							<a style="color:#ff054f;" href="#"><i class="fa fa-google-plus-square fa-lg"></i></a>
							<a style="color:#47aeff;" href="#"><i class="fa fa-twitter-square fa-lg"></i></a>
							<a style="color:#b50000;" href="#"><i class="fa fa-pinterest-square fa-lg"></i></a>
						</div>
					</div>
					<div class="col-sm-4 wow fadeInUp" data-wow-delay="0.3s">
						<div class="userpic" style="background-image:url(media/our-team/2.jpg);">
							<span>Integer congue elit non semper laore du lectus orc posuer nisl tempor lacus fel sed elite nisal mauris led
								Lorem ipsum dolor sit amet consectetur</span>
						</div>
						<div class="user-info">
							<small>Managing Director</small>
							<h4>JOHN DEO</h4>
						</div>
						<a href="#" class="btn btn-sm btn-success">SEND EMAIL</a>
						<div class="soc-icons">
							<a style="color:#005394;" href="#"><i class="fa fa-facebook-square fa-lg"></i></a>
							<a style="color:#ff054f;" href="#"><i class="fa fa-google-plus-square fa-lg"></i></a>
							<a style="color:#47aeff;" href="#"><i class="fa fa-twitter-square fa-lg"></i></a>
							<a style="color:#b50000;" href="#"><i class="fa fa-pinterest-square fa-lg"></i></a>
						</div>
					</div>
					<div class="col-sm-4 wow fadeInRight" data-wow-delay="0.3s">
						<div class="userpic" style="background-image:url(media/our-team/3.jpg);">
							<span>Integer congue elit non semper laore du lectus orc posuer nisl tempor lacus fel sed elite nisal mauris led
								Lorem ipsum dolor sit amet consectetur</span>
						</div>
						<div class="user-info">
							<small>Managing Director</small>
							<h4>JOHN DEO</h4>
						</div>
						<a href="#" class="btn btn-sm btn-success">SEND EMAIL</a>
						<div class="soc-icons">
							<a style="color:#005394;" href="#"><i class="fa fa-facebook-square fa-lg"></i></a>
							<a style="color:#ff054f;" href="#"><i class="fa fa-google-plus-square fa-lg"></i></a>
							<a style="color:#47aeff;" href="#"><i class="fa fa-twitter-square fa-lg"></i></a>
							<a style="color:#b50000;" href="#"><i class="fa fa-pinterest-square fa-lg"></i></a>
						</div>
					</div>
				</div>
			</div>        -->

    <!-- <div class="darken-block inner-offset">
				<div class="container-fluid">
					<div class="hgroup">
						<h1>TRUSTED CLIENTS</h1>
						<h2>Lorem ipsum dolor sit amet consectetur</h2>
					</div>
					<div id="testimonials2" class="owl-carousel enable-owl-carousel" data-pagination="false" data-navigation="true" data-auto-play="true" data-min450="1" data-min600="2" data-min768="2">
						<div>
							<div class="testimonial-content">
								<span><i class="fa fa-quote-left"></i></span>
								<p>Integer congue elit non semper laoreet sed lectus orci posuer nisl tempor se felis ac mauris. Pelentesque inyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam malesuada maurs etug met Curabitur laoreet convallis nisal pellentesque bibendum.</p>
							</div>
							<div class="text-right testimonial-author">
								<h4>JOHN DEO</h4>
								<small>Managing Director</small>
							</div>
						</div>
						<div>
							<div class="testimonial-content">
								<span><i class="fa fa-quote-left"></i></span>
								<p>Integer congue elit non semper laoreet sed lectus orci posuer nisl tempor se felis ac mauris. Pelentesque inyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam malesuada maurs etug met Curabitur laoreet convallis nisal pellentesque bibendum.</p>
							</div>
							<div class="text-right testimonial-author">
								<h4>JOHN DEO</h4>
								<small>Managing Director</small>
							</div>
						</div>
						<div>
							<div class="testimonial-content">
								<span><i class="fa fa-quote-left"></i></span>
								<p>Integer congue elit non semper laoreet sed lectus orci posuer nisl tempor se felis ac mauris. Pelentesque inyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam malesuada maurs etug met Curabitur laoreet convallis nisal pellentesque bibendum.</p>
							</div>
							<div class="text-right testimonial-author">
								<h4>JOHN DEO</h4>
								<small>Managing Director</small>
							</div>
						</div>
					</div>
				</div>
			</div> -->

    <!-- Partners -->
    <div class="container-fluid partners block-content">
      <div class="hgroup title-space wow fadeInLeft" data-wow-delay="0.3s">
        <h1>OUR Group</h1>
        <!-- <h2></h2> -->
      </div>
      <div id="partners" class="owl-carousel enable-owl-carousel" data-pagination="false" data-navigation="true"
        data-min450="2" data-min600="2" data-min768="4">
        <div class="wow rotateIn" data-wow-delay="0.3s"><a href="#"><img src="media/3-column-info/1.png" alt="Img"></a></div>
        <div class="wow rotateIn" data-wow-delay="0.3s"><a href="#"><img height="50px" src="media/3-column-info/2.png"
              alt="Img"></a></div>
        <div class="wow rotateIn" data-wow-delay="0.3s"><a href="#"><img src="media/3-column-info/3.png" alt="Img"></a></div>
        <div class="wow rotateIn" data-wow-delay="0.3s"><a href="#"><img src="media/3-column-info/4.png" alt="Img"></a></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      Core.initOwlCarousel();
    }
  }

</script>

<style>

</style>
