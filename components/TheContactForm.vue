<template>
  <!-- Windhoek -->
    <div class="container-fluid inner-offset wow zoomIn" data-wow-delay="0.3s">
      <div class="tab-content row services">
        <div class="tab-pane active isotope-filter">
          <div v-for="(office, index) in contactDetails" :class="office.class" class="container-fluid block-content isotope-item" :key="index">
            <div class="row main-grid">
              <div class="col-sm-4">
                <h4>{{office.mainTitle}} Head Office</h4>
                <p>Everyday is a new day for us and we work really hard to
                  satisfy our customers everywhere.</p>
                <div class="adress-details wow fadeInLeft" data-wow-delay="0.3s">
                  <div v-if="office.mainAddress">
                    <span><i class="fa fa-location-arrow"></i></span>
                    <div><strong>FP du Toit</strong><br>{{office.mainAddress}} </div>
                  </div>
                  <div>
                    <span><i class="fa fa-phone"></i></span>
                    <div>{{office.mainPhone}}</div>
                  </div>
                  <div>
                    <span><i class="fa fa-clock-o"></i></span>
                    <div>Mon - Fri 8.00 - 17.00</div>
                  </div>
                </div>
                <br><br>
                <hr><br>
                <h4 v-if="index === 0">{{office.depotTitle}} Depot</h4>
                <div v-if="index === 0" class="adress-details wow fadeInLeft" data-wow-delay="0.3s">
                  <div>
                    <span><i class="fa fa-location-arrow"></i></span>
                    <div><strong>FP du Toit</strong><br>{{office.depotAddress}} </div>
                  </div>
                  <div>
                    <span><i class="fa fa-phone"></i></span>
                    <div>{{office.depotPhone}}</div>
                  </div>
                  <div>
                    <span><i class="fa fa-clock-o"></i></span>
                    <div>Mon - Sat 8.00 - 19.00</div>
                  </div>
                </div>
              </div>
              <div class="col-sm-8 wow fadeInRight" data-wow-delay="0.3s">
                <h4>SEND us a message</h4>
                <div id="success"></div>
                <form novalidate id="contactForm" class="reply-form form-inline">
                  <div class="row form-elem mb-0">
                    <div class="col-sm-6 form-elem">
                      <div class="default-inp form-elem">
                        <i class="fa fa-user"></i>
                        <input type="text" name="user-name" id="user-name" placeholder="Full Name" required="required">
                      </div>
                      <div class="default-inp form-elem">
                        <i class="fa fa-envelope"></i>
                        <input type="text" name="user-email" id="user-email" placeholder="Email Address" required="required">
                      </div>
                    </div>
                    <div class="col-sm-6 form-elem">
                      <div class="default-inp form-elem">
                        <i class="fa fa-user"></i>
                        <input type="text" name="user-lastname" id="user-lastname" placeholder="Last Name">
                      </div>
                      <div class="default-inp form-elem">
                        <i class="fa fa-phone"></i>
                        <input type="text" name="user-phone" id="user-phone" placeholder="Phone No.">
                      </div>
                    </div>
                  </div>
                  <div class="default-inp form-elem">
                    <input type="text" name="user-subject" id="user-subject" placeholder="Subject">
                  </div>
                  <div class="form-elem default-inp">
                    <textarea id="user-message" placeholder="Message"></textarea>
                  </div>
                  <div class="form-elem">
                    <button type="submit" class="btn btn-success btn-default">send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data: () => ({
      contactDetails: [{
          mainTitle: 'Windhoek',
          depotTitle: 'Windhoek',
          mainAddress: '5 Nordland St, Lafrenz Industria, Windhoek',
          depotAddress: '36-40 Nickle St, Prosperita, Windhoek',
          mainPhone: '+264 (0) 61 372 900',
          depotPhone: '+264 (0) 61 2945000',
          class: 'windhoek'
        },
        {
          mainTitle: 'Keetmanshoop',
          mainAddress: '116 6th Lane, Keetmanshoop',
          mainPhone: '+264 (0) 63 225324',
          class: 'keetmans',
        },
        {
          mainTitle: 'Johannesburg',
          mainAddress: '301 Deodar St, Pomona, Johannesburg',
          mainPhone: '+27 (0) 11 578 9900',
          class: 'joburg',
        },
        {
          mainTitle: 'Cape Town',
          mainAddress: 'C/O Cilmore and Krakeel Streets, Stikland, Bellville, Cape Town',
          mainPhone: '+27 (0) 21 946 4500',
          class: 'capetown',
        },
        {
          mainTitle: 'Walvis Bay',
          mainAddress: '215 4th Street East, Walvis Bay',
          mainPhone: '+264 (0) 64 200848',
          class: 'wbay',
        },
        {
          mainTitle: 'Oshakati',
          mainAddress: '2397 Oshopala St, Oshakati',
          mainPhone: '+264 (0) 83 294 5190',
          class: 'oshakati',
        },
        {
          mainTitle: 'Tsumeb',
          mainAddress: '4 Hage Geingob Drive, Tsumeb',
          mainPhone: '+264 (0) 67 221100',
          class: 'tsumeb',
        },
        {
          mainTitle: 'Durban',
          mainPhone: '+264 (0) 67 221100',
          class: 'durban',
        }
      ]
    }),
    mounted() {
      setTimeout(() => {
        $('[data-filter=".windhoek"]').click()
      }, 1000)
    }
  }

</script>

<style scoped>
  .services div {
    margin-bottom: initial;
  }
</style>
