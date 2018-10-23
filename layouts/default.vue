<template>
<div>
  <no-ssr>
    <vue-facebook-page data-href="https://www.facebook.com/fpdutoittransport/" link-title="FP Du Toit Transport" />
  </no-ssr>
  <div data-scrolling-animations="true" class="super_container">
    <div class="sp-body">
      <the-nav/>
      <nuxt/>
      <the-footer/>
    </div>
  </div>
</div>
</template>
<script>
import TheNav from '@/components/TheNav'
import TheFooter from '@/components/TheFooter'

export default {
  mounted() {
    $(function(){$('.lazy').Lazy()});
  },
  components: {
    TheNav,
    TheFooter
  }
}
</script>

<style>
  .art-article {
    padding-left: 70px;
  }
</style>
