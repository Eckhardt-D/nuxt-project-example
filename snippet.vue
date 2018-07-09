<script>
export default {
  head () {
    return {
      script: [
        { src: 'styles/bootstrap4/popper.js', body: true },
        { src: 'styles/bootstrap4/bootstrap.min.js', body: true },
        { src: 'plugins/OwlCarousel2-2.2.1/owl.carousel.js', body: true },
        { src: 'plugins/easing/easing.js', body: true },
        { src: 'plugins/parallax-js-master/parallax.min.js', body: true },
        { src: 'plugins/magnific-popup/jquery.magnific-popup.min.js', body: true },
        { src: 'js/custom.js', body: true }
      ],
      link: [
        { rel: 'stylesheet', href: 'styles/bootstrap4/bootstrap.min.css' },
        { rel: 'stylesheet', href: 'plugins/font-awesome-4.7.0/css/font-awesome.min.css' },
        { rel: 'stylesheet', href: 'plugins/OwlCarousel2-2.2.1/owl.carousel.css' },
        { rel: 'stylesheet', href: 'plugins/OwlCarousel2-2.2.1/owl.theme.default.css' },
        { rel: 'stylesheet', href: 'plugins/OwlCarousel2-2.2.1/animate.css' },
        { rel: 'stylesheet', href: 'plugins/magnific-popup/magnific-popup.css' },
        { rel: 'stylesheet', href: 'styles/main_styles.css' },
        { rel: 'stylesheet', href: 'styles/responsive.css' },
      ]
    } 
  }
}
</script>

<style>
</style>
