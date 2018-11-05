<template>
  <footer>
    <div class="color-part2"></div>
    <div class="color-part"></div>
    <div class="container-fluid">
      <div class="row block-content">
        <div class="col-sm-4 wow zoomIn" data-wow-delay="0.3s">
          <a href="#" class="logo-footer"></a>
          <p>FP du Toit Transport Group: Home-Grown Quality and Services.</p>
          <div class="footer-icons">
            <a href="https://www.facebook.com/fpdutoittransport/"><i class="fa fa-facebook-square fa-2x"></i></a>
            <!-- <a href="#"><i class="fa fa-google-plus-square fa-2x"></i></a>
            <a href="#"><i class="fa fa-twitter-square fa-2x"></i></a>
            <a href="#"><i class="fa fa-pinterest-square fa-2x"></i></a>
            <a href="#"><i class="fa fa-vimeo-square fa-2x"></i></a> -->
          </div>
          <router-link to="/contact" class="btn btn-lg btn-danger">GET A FREE QUOTE</router-link>
        </div>
        <div class="col-sm-2 wow zoomIn" data-wow-delay="0.3s">
          <h4>WE OFFER</h4>
          <nav>
            <router-link to="/services">Sea Freight</router-link>
            <router-link to="/services">Road Transportation</router-link>
            <router-link to="/services">Air Freight</router-link>
            <router-link to="/services">Railway Logistics</router-link>
            <router-link to="/services">Packaging & Storage</router-link>
            <router-link to="/services">Warehousing</router-link>
          </nav>
        </div>
        <div class="col-sm-2 wow zoomIn" data-wow-delay="0.3s">
          <h4>MAIN LINKS</h4>
          <nav>
            <router-link to="/home">Home</router-link>
            <router-link to="/services">Our Services</router-link>
            <router-link to="/about">About Us</router-link>
            <a style="cursor: pointer;" @click="$store.dispatch('changeContactForm', [true, true])">Contact</a>
          </nav>
        </div>
        <div class="col-sm-4 wow zoomIn" data-wow-delay="0.3s">
          <h4>CONTACT INFO</h4>
          Head Office
          <div class="contact-info">
            <span><i class="fa fa-location-arrow"></i><strong>FP Du Toit Transport</strong><br>5 Nordland St, Lafrenz Industria, Windhoek </span>
            <span><i class="fa fa-phone"></i>+264-61-372 9000</span>
            <span><i class="fa fa-phone"></i>+264-61-294 5000</span>
            <!-- <span><i class="fa fa-envelope"></i>info@domain.com | quote@domain.com</span> -->
            <!-- <span><i class="fa fa-clock-o"></i>Mon - Fri 8.00 - 17.00</span> -->
          </div>
        </div>
      </div>
      <div class="copy text-right"><a id="to-top" href="#this-is-top"><i class="fa fa-chevron-up"></i></a></div>
    </div>
    <div id="meta-seo"></div>
  </footer>
</template>

<script>
  export default {
    name: 'TheFooter',
    mounted() {
      $(function() {
        const metaHolder = document.getElementById('meta-seo');
        const data = [`{
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "FP du Toit",
          "alternateName": "JET.X Couriers",
          "url": "https://www.fpdt.na",
          "logo": "",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+264-61-3729000",
            "contactType": "customer service",
            "areaServed": "NA",
            "availableLanguage": ["English","Afrikaans","German"]
          },
          "sameAs": "https://www.facebook.com/fpdutoittransport"
        }`,
        `{
          "@context": "http://schema.org",
          "@type": "ProfessionalService",
          "name": "FP du Toit Transport",
          "image": "https://fpdt.na/styles/assets/switcher/css/logos/logo5.png",
          "@id": "",
          "url": "https://www.fpdt.na",
          "telephone": "+264-61-3729000",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "5 Nordland Street",
            "addressLocality": "Windhoek",
            "postalCode": "11002",
            "addressCountry": "NA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -22.51154,
            "longitude": 17.066295
          },
          "openingHoursSpecification": [{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:00",
            "closes": "17:00"
          },{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "08:00",
            "closes": "13:00"
          }],
          "sameAs": "https://www.facebook.com/fpdutoittransport"
        }`,
        `{
          "@context": "http://schema.org/", 
          "@type": "BreadcrumbList", 
          "itemListElement": [
            { 
              "@type": "ListItem", 
              "position": "1", 
              "item": { 
                "@id": "https://www.fpdt.na", 
                "name": "FP du Toit Home",
                "image": "https://fpdt.na/styles/assets/switcher/css/logos/logo5.png" 
              } 
            },
            { 
              "@type": "ListItem", 
              "position": "2", 
              "item": { 
                "@id": "", 
                "name": "" 
              } 
            }
          ]
        }`]

        data.forEach(item => {
          const scriptTag  = document.createElement('script')
          scriptTag.setAttribute('type','application/ld+json')
          scriptTag.innerHTML = item
          scriptTag.innerHTML.replace('<br>', '');
          metaHolder.appendChild(scriptTag)
        })
      })
    }
  }
  


</script>

<style>

</style>



