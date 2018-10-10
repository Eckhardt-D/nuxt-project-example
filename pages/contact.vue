<template>
  <div>
    <div class="bg-image page-title">
      <div class="container-fluid">
        <a href="#">
          <h1>contact us</h1>
        </a>
        <div class="pull-right">
          <router-link to="/"><i class="fa fa-home fa-lg"></i></router-link> &nbsp;&nbsp;|&nbsp;&nbsp; <router-link to="/contact">Contact Us</router-link>
        </div>
      </div>
    </div>
    <no-ssr>
      <component :is="googlemap" />
    </no-ssr>
    <div class="inner-offset darken-block">
      <div class="container-fluid">
        <ul class="nav nav-tabs wow zoomIn" data-wow-delay="0.3s" id="filter">
          <li id="activeItem" class="active"><a href="#" data-filter=".windhoek">Windhoek</a></li>
          <li><a href="#" data-filter=".keetmans">Keetmanshoop</a></li>
          <li><a href="#" data-filter=".joburg">Johannesburg</a></li>
          <li><a href="#" data-filter=".capetown">Cape Town</a></li>
          <li><a href="#" data-filter=".oshakati">Oshakati</a></li>
          <li><a href="#" data-filter=".tsumeb">Tsumeb</a></li>
          <li><a href="#" data-filter=".durban">Durban</a></li>
        </ul>
      </div>
    </div>
    <TheContactForm/>
  </div>
</template>

<script>

  const TheMap = () => ({component: import('@/components/TheMap.vue')})
  import TheContactForm from '~/components/TheContactForm'

  export default {
    created() {
      this.googlemap = () => TheMap()
      
    },
    mounted() {
      Core.isotopeFilter()
    },
    components: {
      TheContactForm
    }
  }

</script>

<style>

</style>
