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
                          <div class="h-block"><span>CALL US</span>1.800.987.6543</div>
                          <div class="h-block"><span>EMAIL US</span>info@domain.com</div>
                          <div class="h-block"><span>WORKING HOURS</span>Mon - Sat  8.00 - 19.00</div>
                          <a class="btn btn-success" href="#">GET A FREE QUOTE</a>
                      </div>
                  </div>
              </div>
              <div id="main-menu-bg"></div>  
              <a id="menu-open" href="#"><i class="fa fa-bars"></i></a> 
              <nav class="main-menu navbar-main-slide">
                <ul class="nav navbar-nav navbar-main">
                  <li><router-link to="/">HOME</router-link></li>
                  <li><router-link to="/services">SERVICES</router-link></li>
                  <li><router-link to="/about">ABOUT US</router-link></li>
                  <li><router-link to="/contact">CONTACT</router-link></li>
                  <li><a class="btn_header_search" href="#"><i class="fa fa-search"></i></a></li>
                </ul>
                <div class="search-form-modal transition">
                  <form class="navbar-form header_search_form">
                    <i class="fa fa-times search-form_close"></i>
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Search">
                    </div>
                    <button type="submit" class="btn btn_search customBgColor">Search</button>
                  </form>
                </div>
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
