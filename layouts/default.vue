<template>
<div>
  <div id="fb-root"></div>
  <div @click="showFb" id="facebook-clicker"></div>
  <no-ssr>
    <div style="display: none;" id="hidden-fb">
      <div class="fb-page" data-href="https://www.facebook.com/fpdutoittransport/" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/fpdutoittransport/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/fpdutoittransport/">FP du Toit Transport Group</a></blockquote></div>
    </div>
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
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1&appId=384408045361532&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },
  components: {
    TheNav,
    TheFooter
  },
  methods: {
    showFb() {
      let clicker = $('#facebook-clicker')
      console.log(clicker[0].style.left)
      if(clicker[0].style.left === '') {
        $('#hidden-fb').toggle()
        clicker.animate({left: "+=340"}, 600, () => console.log('done'))
        $('#hidden-fb').animate({left: "500px"}, 1000, () => console.log('done'))
      } else {
        clicker[0].style.left = ''
        $('#hidden-fb')[0].style.left = '-400px'
         $('#hidden-fb').toggle()
      }
    }
  }
}
</script>

<style>
.fb-page {
  z-index: 1000;
  position: fixed!important;
  top: 0;
  left: 0;
}

#facebook-clicker {
  cursor: pointer;
  z-index: 1000;
  width: 272px;
  height: 60px;
  position: fixed;
  top: -8px;
  left: -120px;
  background-image: url('~/media/images/facebook.png');
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotate(-90deg);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 5%;
}
</style>
