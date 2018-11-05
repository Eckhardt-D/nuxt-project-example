<template>
    <div>
      <header id="this-is-top">
          <div class="container-fluid">
              <div class="topmenu row">
                  <nav class="col-sm-offset-3 col-md-offset-4 col-lg-offset-4 col-sm-6 col-md-5 col-lg-5">
                  </nav>
                  <nav class="text-right col-sm-3 col-md-3 col-lg-3">
                  </nav>
              </div>
              <div class="row header">
                  <div class="col-sm-3 col-md-3 col-lg-3">
                      <router-link to="/" id="logo"></router-link>
                  </div>
                  <div class="col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-sm-8 col-md-8 col-lg-8">
                      <div class="text-right header-padding">
                          <div class="h-block"><span>CALL US</span>+264-61-372 9000<br>+264-61-294 5000</div>
                          <!-- <div class="h-block"><span>EMAIL US</span>info@domain.com</div> -->
                          <!-- <div class="h-block"><span>WORKING HOURS</span>Mon - Fri  8.00 - 17.00</div> -->
                          <a href="#filter" @click="$store.dispatch('changeContactForm', [null, true])" class="btn btn-success special-home">GET A QUOTE</a>
                      </div>
                  </div>
              </div>
              <div id="main-menu-bg"></div>
              <a id="menu-open" href="#"><i class="fa fa-bars"></i></a>
              <nav class="main-menu navbar-main-slide">
                <ul class="nav navbar-nav navbar-main">
                  <li><router-link to="/services">SERVICES</router-link></li>
                  <li><router-link to="/about">ABOUT US</router-link></li>
                  <li><router-link to="/blog">NEWS</router-link></li>
                  <li class="dropdown">
                        <a style="cursor: pointer;" data-toggle="dropdown" class="dropdown-toggle border-hover-color1">e-Services <i class="fa fa-angle-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a target="_blank" href="http://tracking.parcelperfect.com/2500.2704.3249/">Parcel Tracking</a></li>
                            <li><a target="_blank" href="http://ponline.fpdt.na/pponline/login.php">Customer Login</a></li>
                            <li><router-link to="/downloads">DOWNLOADS</router-link></li>
                        </ul>
					        </li>
                  <li><a href="#" @click="$store.dispatch('changeContactForm', [true, true])" to="/contact">CONTACT</a></li>
                  <li><router-link to="/vacancies">VACANCIES</router-link></li>
                </ul>
              </nav>
              <a id="menu-close" href="#"><i class="fa fa-times"></i></a>
          </div>
      </header>
  </div>
</template>

<script>
export default {
  name: 'TheNav'
}
</script>

<style>

</style>
