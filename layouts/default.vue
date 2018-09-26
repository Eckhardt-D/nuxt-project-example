<template>
<div>
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
  components: {
    TheNav,
    TheFooter
  }
}
</script>

<style>

</style>
