<template>
  <div>
    <div class="bg-image page-title">
      <div class="container-fluid">
        <router-link to="/jetx-detail">
          <h1>JET.X COURIERS</h1>
        </router-link>
        <div class="pull-right">
          <router-link to="/"><i class="fa fa-home fa-lg"></i></router-link> &nbsp;&nbsp;|&nbsp;&nbsp; <router-link to="/services">Our
            services</router-link>&nbsp;&nbsp;
        </div>
      </div>
    </div>

    <div class="container-fluid block-content">
      <div class="row">
        <div class="col-sm-12 main-content text-center">
          <h1 class="text-center italic wow zoomIn" data-wow-delay="0.3s">Part of the FP du Toit Transport Group</h1>
          <img width=300px src="/media/3-column-info/2.png" class="wow zoomIn" data-wow-delay="0.3s" alt="Img">
          <div class="row">
            <div class="col-xs-12 col-sm-6 wow zoomIn" data-wow-delay="0.3s">
              <img src="/media/images/cross-border.jpg" height="250px" alt="Img">
              <h4>Cross Border</h4>
              <p>Courier freight is received in Windhoek from CapeTown and Johannesburg Monday to Saturday using
                multiple departures.
                The cross border route from Johannesburg is serviced with a minimum of 3 vehicles; but regularly 5
                vehicles are operated daily.
                This includes a 36 ton SpeedLink Taut-liner with 2 driver; driving non-stop to Windhoek; a 12 ton
                vehicle with the flexibility to attach a trailer;
                a 8 ton vehicle and 1 or even 2 small express vehicles who can leave from 19:00 to arrive the next day,
                late morning.
                With the added advantage of having Namibian customs officers on our premises; we save time by not
                waiting in queues at border crossings.
                In order to achieve better efficiencies, custom documents are flown to Windhoek from Cape Town and
                Johannesburg to arrive before the vehicle.
                The processing of the importation of the goods can be started before the vehicle’s arrival.</p>
            </div>
            <div class="col-xs-12 col-sm-6 wow zoomIn" data-wow-delay="0.3s">
              <img src="/media/blog/3.jpg" height="250px" alt="Img">
              <h4>Domestic</h4>
              <p>JET.X Couriers offer daily (Monday to Friday) deliveries to all Namibian destinations and dedicated
                pharmaceutical deliveries on Saturdays.
                Because our courier and parcel distribution networks have similar footprints, we have the flexibility
                to utilise the large vehicles of our Pro Parcel service.
                Therefor we never run out of capacity. We pride ourselves in keeping our customers’ needs close to the
                heart of our business.
                From Windhoek to other Namibian destinations we deliver overnight / the next day. Inter-town courier
                services require in most cases takes two days,
                since the consignments are first consolidated at the main Windhoek hub; before being dispatched the
                evening to the final destination.</p>
            </div>
          </div>
          <p class="text-center">
            <router-link to="/contact" class="btn btn-danger btn-default wow zoomIn" data-wow-delay="0.3s">request a
              quote</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Jet.X Couriers | Cross Border | Air Express | Overnight Road | Domestic Courier',
        meta: [
          { name: 'description', content: 'Jet.X  provides Cross Border, Air Express, Overnight Road and Domestic Courier Services in Namibia and South Africa. As part of the FP du Toit Group we provide professional forwarding and Logistics Services with 50 years of experience. Contact us now with any Questions.'}
        ]
      }
    }
  }

</script>

<style>

</style>
