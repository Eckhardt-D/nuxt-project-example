<template>
 <div>
  <!-- Main Slider -->
  <div id="owl-main-slider" class="owl-carousel enable-owl-carousel" data-single-item="true" data-pagination="false"
    data-auto-play="true" data-main-slider="true" data-stop-on-hover="true">
    <div class="item">
      <img src="media/main-slider/1.jpg" alt="slider">
      <div class="container-fluid">
        <div class="slider-content col-md-6 col-lg-6">
          <div style="display:table;">
            <div style="display:table-cell; width:100px; vertical-align:top;">
              <a class="prev"><i class="fa fa-angle-left"></i></a>
              <a class="next"><i class="fa fa-angle-right"></i></a>
            </div>
            <div style="display:table-cell;">
              <h1>CELEBRATING 50 YEARS OF SERVICE</h1>
            </div>
          </div>
          <p>What started out in 1968 as a small Northern Cape family business, 
            FP du Toit Transport Group has grown into one of Southern Africa’s 
            major transport and freight companies.<br><router-link class="btn btn-success special-home-two" to="/about">LEARN MORE</router-link></p>
        </div>
      </div>
    </div>
    <div class="item">
      <img src="media/main-slider/2.jpg" alt="slider">
      <div class="container-fluid">
        <div class="slider-content col-md-6 col-lg-6">
          <div style="display:table;">
            <div style="display:table-cell; width:100px; vertical-align:top;">
              <a class="prev"><i class="fa fa-angle-left"></i></a>
              <a class="next"><i class="fa fa-angle-right"></i></a>
            </div>
            <div style="display:table-cell;">
              <h1 class="text-uppercase">Quality, reliability, service and relationships</h1>
            </div>
          </div>
          <p>These are the passions behind the huge success and exceptional track 
            record of this home-grown logistics giant.<br><router-link class="btn btn-success special-home-two" to="/about">LEARN MORE</router-link></p>
        </div>
      </div>
    </div>
  </div>
  <!-- The Service Blocks -->
  <div class="container-fluid">
      <div class="row column-info block-content">
        <div class="col-sm-3 col-md-3 col-lg-3 wow fadeInLeft" data-wow-delay="3.3s">
          <img src="media/3-column-info/1.png" alt="slider">
          <h3>FP du Toit</h3>
          <p style="min-height: 135px;">A transport group that is made up of a number of business units, with their own
            focus markets and transport service offerings.
          </p>
          <router-link class="btn btn-success special-home" to="/services">READ MORE</router-link>
        </div>
        <div class="col-sm-3 col-md-3 col-lg-3 wow fadeInRight" data-wow-delay="3.3s">
          <img src="media/3-column-info/4.png" alt="Img">
          <h3>Pro Parcel Distribution</h3>
          <p style="min-height: 135px;">Pro Parcel Distribution was established as a sub-division of the FP du Toit Transport company in 1997. 
            Pro Parcel is the division that handles part-loads, heavy boxes and pallets that are not time sensitive, but price sensitive.</p>
          <router-link class="btn btn-success special-home" to="/services">READ MORE</router-link>
        </div>
        <div class="col-sm-3 col-md-3 col-lg-3 wow fadeInRight" data-wow-delay="3.3s">
          <img src="media/3-column-info/3.png" alt="Img">
          <h3>JET.X Couriers</h3>
          <p style="min-height: 135px;">JET.X Couriers was acquired by FP du Toit Transport in 2005. The company known then as JET.X Couriers t/a Saturn 
            Services began with only a Windhoek depot, expanding in 2012 drastically to the largest privately owned courier network in Namibia.</p>
          <router-link class="btn btn-success special-home" to="/services">READ MORE</router-link>
        </div>
        <div class="col-sm-3 col-md-3 col-lg-3 wow fadeInUp" data-wow-delay="3.3s">
          <img src="media/3-column-info/2.png" alt="Img">
          <h3>Wesbank Transport</h3>
          <p style="min-height: 135px;">Wesbank Transport provides comprehensive transportation solutions to clients accross southern Africa, 
            including customized consolidation, distribution, logistics and storage services.</p>
          <router-link class="btn btn-success special-home" to="/services">READ MORE</router-link>
        </div>
      </div>
    </div>

    <hr>
    <div class="big-hr color-1 wow zoomInUp" data-wow-delay="0.3s">
      <div class="text-left" style="margin-right:40px;">
        <h2>The Team at FP du Toit Transport Group is always Driven to Deliver!</h2>
        <p>In an increasingly globalized world, time is of the essence.</p>
      </div>
      <div><router-link class="btn btn-success special-home-two" to="/contact">REQUEST A QUOTE</router-link></div>
    </div>

    <div class="container-fluid block-content">
      <div class="text-center hgroup wow zoomInUp" data-wow-delay="0.3s">
        <h1>OUR SERVICES</h1>
        <img width="30%" src="media/images/3.jpg" alt="">
        <h2>We have wide network of offices in all major locations to help you with <br> the services we offer</h2>
      </div>
      <div class="row our-services">
        <div class="col-sm-6 col-md-4 col-lg-4 wow zoomInLeft" data-wow-delay="0.3s">
          <router-link to="/services">
            <span><i class="glyph-icon flaticon-boats4"></i></span>
            <h4>CLIENT SHIPMENTS</h4>
            <!-- <p>Integer congue elit non semper laore lectus orci posuer nisl tempor lacus mauris led ipsum.</p> -->
          </router-link>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4 wow zoomInUp" data-wow-delay="0.3s">
          <router-link to="/services">
            <span><i class="glyph-icon flaticon-flying"></i></span>
            <h4>AIR EXPRESS</h4>
            <!-- <p>Integer congue elit non semper laore lectus orci posuer nisl tempor lacus mauris led ipsum.</p> -->
          </router-link>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4 wow zoomInRight" data-wow-delay="0.3s">
          <router-link to="/services">
            <span><i class="glyph-icon flaticon-garage1"></i></span>
            <h4>CROSS-BORDER</h4>
            <!-- <p>Integer congue elit non semper laore lectus orci posuer nisl tempor lacus mauris led ipsum.</p> -->
          </router-link>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4 wow zoomInLeft" data-wow-delay="0.3s">
          <router-link to="/services">
            <span><i class="glyph-icon flaticon-package7"></i></span>
            <h4>MATERIAL HANDLING</h4>
            <!-- <p>Integer congue elit non semper laore lectus orci posuer nisl tempor lacus mauris led ipsum.</p> -->
          </router-link>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4 wow zoomInUp" data-wow-delay="0.3s">
          <router-link to="/services">
            <span><i class="glyph-icon flaticon-railway1"></i></span>
            <h4>CRANE HIRE</h4>
            <!-- <p>Integer congue elit non semper laore lectus orci posuer nisl tempor lacus mauris led ipsum.</p> -->
          </router-link>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4 wow zoomInRight" data-wow-delay="0.3s">
          <router-link to="/services">
            <span><i class="glyph-icon flaticon-traffic-signal"></i></span>
            <h4>OPERATOR TRAINING</h4>
            <!-- <p>Integer congue elit non semper laore lectus orci posuer nisl tempor lacus mauris led ipsum.</p> -->
          </router-link>
        </div>
      </div>
    </div>
    <!-- Fleet Gallery -->
    <div class="fleet-gallery block-content bg-image inner-offset">
    <div class="container-fluid inner-offset">
      <div class="text-center hgroup wow zoomInUp" data-wow-delay="0.3s">
        <h1>THE FLEETS GALLERY</h1>
        <h2>our reliable fleet</h2>
      </div>
      <div id="fleet-gallery" class="owl-carousel enable-owl-carousel" data-pagination="false" data-navigation="true"
        data-min450="2" data-min600="2" data-min768="4">
        <div class="wow rotateIn" data-wow-delay="0.3s"><img src="media/fleet-gallery/1.jpg" alt="Img"></div>
        <div class="wow rotateIn" data-wow-delay="0.3s"><img src="media/fleet-gallery/2.jpg" alt="Img"></div>
        <div class="wow rotateIn" data-wow-delay="0.3s"><img src="media/fleet-gallery/3.jpg" alt="Img"></div>
        <div class="wow rotateIn" data-wow-delay="0.3s"><img src="media/fleet-gallery/4.png" alt="Img"></div>
        <div class="wow rotateIn" data-wow-delay="0.3s"><img src="media/fleet-gallery/1.jpg" alt="Img"></div>
        <div class="wow rotateIn" data-wow-delay="0.3s"><img src="media/fleet-gallery/2.jpg" alt="Img"></div>
      </div>
    </div>
  </div>
  <!-- Client Block -->
   <div class="container-fluid block-content">
    <div class="row">
      <div class="col-md-6 col-lg-6 wow fadeInLeft" data-wow-delay="0.3s">
        <div class="hgroup">
          <h1>OUR VISION</h1>
          <!-- <h2>Lorem ipsum dolor sit amet consectetur</h2> -->
        </div>
        <div id="testimonials" class="owl-carousel enable-owl-carousel" data-single-item="true" data-pagination="false"
          data-navigation="true" data-auto-play="true">
          <div>
            <div class="testimonial-content">
              <span><i class="fa fa-quote-left"></i></span>
              <p>A world class service provider of specialised logistics and transport solutions to selected customers,
                focused on rendering exceptional client service, generating fair returns for its shareholders and 
                providing rewarding careers to its employees.
              </p>
            </div>
            <div class="text-right testimonial-author">
              <h4>FP Du Toit</h4>
              <small>Vision Statement</small>
            </div>
          </div>
          <div>
            <div class="testimonial-content">
              <span><i class="fa fa-quote-left"></i></span>
              <p>We will achieve this by conducting our business in accordancewith our values, by remaining
                focused on our customer's needs, by striving for quality in all we do, by being exceptionally
                productive in what we do, by working safely and by developing our staff to the maximum of their potential.
              </p>
            </div>
            <div class="text-right testimonial-author">
              <h4>FP Du Toit</h4>
              <small>Vision Statement</small>
            </div>
          </div>
          <div>
            <div class="testimonial-content">
              <span><i class="fa fa-quote-left"></i></span>
              <p>To achieve the above vision we need to be a market-driven company with a sharp customer focus in all areas. 
                Ultimately, our staff determines the quality of service we render to our customers.
              </p>
            </div>
            <div class="text-right testimonial-author">
              <h4>FP Du Toit</h4>
              <small>Vision Statement</small>
            </div>
          </div>
        </div>

      </div>
      <div class="col-md-6 col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
        <div class="hgroup">
          <h1>WHY CHOOSE US</h1>
          <!-- <h2>Lorem ipsum dolor sit amet consectetur</h2> -->
        </div>
        <ul class="why-us">
          <li>
            More than 1000 members
            <p>working out of 13 locations across Namibia, South Africa and 7 additional SADC countries.</p>
            <span>+</span>
          </li>
          <li>
            In-house customs clearing
            <p>services work closely with the permanent Namibian customs officials on site at our Prosperita Depot in Windhoek.</p>
            <span>+</span>
          </li>
          <li>
            Staff training and safety is vital
            <p>to the success of such a diverse operation.  Through many years of experience and on the job training, 
              FP du Toit Transport Group developed training material and courses that can be offered to other businesses as well.</p>
            <span>+</span>
          </li>
          <li>
            50 years of experience
            <p>What started out in 1968 as a small Northern Cape family business, 
              FP du Toit Transport Group has grown into one of Southern Africa’s major transport and freight companies.</p>
            <span>+</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Counter Animation -->
  <div class="container-fluid block-content percent-blocks" data-waypoint-scroll="true">
    <div class="row stats">
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
  <!-- Partners -->
    <div class="container-fluid partners block-content">
    <div class="hgroup title-space wow fadeInLeft" data-wow-delay="0.3s">
      <h1>OUR Group</h1>
      <!-- <h2></h2> -->
    </div>
    <div id="partners" class="owl-carousel enable-owl-carousel" data-pagination="false" data-navigation="true"
      data-min450="2" data-min600="2" data-min768="4">
      <div class="wow rotateIn" data-wow-delay="0.3s"><a href="#"><img src="media/3-column-info/1.png" alt="Img"></a></div>
      <div class="wow rotateIn" data-wow-delay="0.3s"><a href="#"><img src="media/3-column-info/4.png" alt="Img"></a></div>
      <div class="wow rotateIn" data-wow-delay="0.3s"><a href="#"><img src="media/3-column-info/3.png" alt="Img"></a></div>
      <div class="wow rotateIn" data-wow-delay="0.3s"><a href="#"><img height="50px" src="media/3-column-info/2.png" alt="Img"></a></div>
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
