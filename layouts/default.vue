<template>
<div>
  <no-ssr>
    <vue-facebook-page data-href="https://www.facebook.com/xxxxxxxxxxx/" link-title="FP Du Toit Transport" />
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
    $(function(){
      $('.lazy').Lazy()

      // Scripts container
      let container = $('.super_container');
      
      /* GTM */
      const GTM = document.createElement('script');
      GTM.setAttribute('async', '');
      GTM.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','xxxxxx');`;

      /* Analytics */
      const GA = document.createElement('script');
      GA.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=xxxxxxxxx');
      GA.setAttribute('async', 'true');

      const gaDataLayer = document.createElement('script');
      gaDataLayer.innerHTML = `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'xxxxxxxxx');`;

      /* recaptcha */
      const recaptcha = document.createElement('script');
      recaptcha.setAttribute('src', 'https://www.google.com/recaptcha/api.js?render=explicit');
      recaptcha.setAttribute('async', 'true');
      recaptcha.setAttribute('defer', 'true');
      
      /*marketing automation*/
      const sendloop = document.createElement('script');
      sendloop.innerHTML = `window.sltracker_settings = { 'sl_user_id': "rDf-78/aa4c57c2" }; !function(key) {var methods = ["identify", "track"];function dummySltracker() {var self = this;function proxy(command) {self[command] = function() {return self._queue.push([command].concat(Array.prototype.slice.call(arguments, 0))), self;};}for (self._queue = [], i = 0; i < methods.length; i++) {proxy(methods[i]);}}window.__sndlp = window[key] = window[key] || new dummySltracker;window.__sndlp.methods = methods;}("sltracker"); (function () {var w = window;var d = document;function l() {var s = d.createElement('script');s.type = 'text/javascript';s.async = 1;s.src = ('https:' == document.location.protocol ? 'https://' : 'https://') + '//api.sendloop.com/t/sltracker.js';var x = d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);}if (w.attachEvent) {w.attachEvent('onload', l);} else {w.addEventListener('load', l, false);}})();`
      sendloop.setAttribute('async', 'true');

      // If Javascript
      container.append(GTM);
      container.append(GA);
      container.append(gaDataLayer);
      container.append(recaptcha);
      container.append(sendloop);

      // If no JavaScript
      const noJS = document.createElement('noscript');
      const noJSFrame = document.createElement('iframe');
      noJSFrame.setAttribute('src', 'https://www.googletagmanager.com/ns.html?id=xxxxxx');
      noJSFrame.setAttribute('height', '0');
      noJSFrame.setAttribute('width', '0');
      noJSFrame.style.display = 'none';
      noJS.append(noJSFrame);
      container.append(noJS);
    })

    
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
