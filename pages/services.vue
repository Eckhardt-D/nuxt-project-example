<template>
  <div>
    <div class="bg-image page-title">
      <div class="container-fluid">
        <a href="#">
          <h1>OUR SERVICES</h1>
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
          <li class="active"><a href="#" data-filter=".allservices">All services</a></li>
          <li><a href="#" data-filter=".seafreight">SEA FREIGHT</a></li>
          <li><a href="#" data-filter=".transportation">Road transportation</a></li>
          <li><a href="#" data-filter=".airfreight">AIR FREIGHT</a></li>
          <li><a href="#" data-filter=".railway">Railway logistics</a></li>
          <li><a href="#" data-filter=".warehousing">warehousing</a></li>
          <li><a href="#" data-filter=".packaging">packaging & storage</a></li>
        </ul>
      </div>
    </div>
    <div class="container-fluid inner-offset wow zoomIn" data-wow-delay="0.3s">
      <div class="tab-content row services">
        <div class="tab-pane active isotope-filter">
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices seafreight railway">
            <img class="full-width" src="media/3-column-info/4.jpg" alt="Img">
            <h4>SAFE & SECURE DELIVERY</h4>
            <p>Integer congue, elit non semper laoreet sed lectus orci posuh nisl tempor lacus felis ac mauris.
              Pellentesque in urna.</p>
            <a class="btn btn-success btn-sm" href="/services">READ MORE</a>
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices transportation">
            <img class="full-width" src="media/3-column-info/6.jpg" alt="Img">
            <h4>SAFE & SECURE DELIVERY</h4>
            <p>Integer congue, elit non semper laoreet sed lectus orci posuh nisl tempor lacus felis ac mauris.
              Pellentesque in urna. </p>
            <a class="btn btn-success btn-sm" href="/services">READ MORE</a>
          </div>

          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices packaging warehousing">
            <img class="full-width" src="media/3-column-info/4.jpg" alt="Img">
            <h4>SAFE & SECURE DELIVERY</h4>
            <p>Integer congue, elit non semper laoreet sed lectus orci posuh nisl tempor lacus felis ac mauris.
              Pellentesque in urna.</p>
            <a class="btn btn-success btn-sm" href="/services">READ MORE</a>
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices warehousing railway">
            <img class="full-width" src="media/3-column-info/8.jpg" alt="Img">
            <h4>SAFE & SECURE DELIVERY</h4>
            <p>Integer congue, elit non semper laoreet sed lectus orci posuh nisl tempor lacus felis ac mauris.
              Pellentesque in urna. </p>
            <a class="btn btn-success btn-sm" href="/services">READ MORE</a>
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices seafreight airfreight railway">
            <img class="full-width" src="media/3-column-info/9.jpg" alt="Img">
            <h4>SAFE & SECURE DELIVERY</h4>
            <p>Integer congue, elit non semper laoreet sed lectus orci posuh nisl tempor lacus felis ac mauris.
              Pellentesque in urna. </p>
            <a class="btn btn-success btn-sm" href="/services">READ MORE</a>
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices transportation">
            <img class="full-width" src="media/3-column-info/3.jpg" alt="Img">
            <h4>SAFE & SECURE DELIVERY</h4>
            <p>Integer congue, elit non semper laoreet sed lectus orci posuh nisl tempor lacus felis ac mauris.
              Pellentesque in urna. </p>
            <a class="btn btn-success btn-sm" href="/services">READ MORE</a>
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices airfreight packaging warehousing">
            <img class="full-width" src="media/3-column-info/1.jpg" alt="Img">
            <h4>SAFE & SECURE DELIVERY</h4>
            <p>Integer congue, elit non semper laoreet sed lectus orci posuh nisl tempor lacus felis ac mauris.
              Pellentesque in urna. </p>
            <a class="btn btn-success btn-sm" href="/services">READ MORE</a>
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices seafreight airfreight transportation">
            <img class="full-width" src="media/3-column-info/8.jpg" alt="Img">
            <h4>SAFE & SECURE DELIVERY</h4>
            <p>Integer congue, elit non semper laoreet sed lectus orci posuh nisl tempor lacus felis ac mauris.
              Pellentesque in urna. </p>
            <a class="btn btn-success btn-sm" href="/services">READ MORE</a>
          </div>
          <div class="service-item col-xs-12 col-sm-4 isotope-item allservices seafreight transportation packaging warehousing railway">
            <img class="full-width" src="media/3-column-info/2.jpg" alt="Img">
            <h4>SAFE & SECURE DELIVERY</h4>
            <p>Integer congue, elit non semper laoreet sed lectus orci posuh nisl tempor lacus felis ac mauris.
              Pellentesque in urna. </p>
            <a class="btn btn-success btn-sm" href="/services">READ MORE</a>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
  export default {
    mounted() {
      Core.isotopeFilter();
    }
  }

</script>

<style>

</style>
