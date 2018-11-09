<template>
    <div class="container-fluid inner-offset wow zoomIn" data-wow-delay="0.3s">
      <div class="tab-content row services">
        <div style="min-height: 1000px" class="tab-pane active isotope-filter">
          <div v-if="office.class === selectedPlace" v-for="(office, index) in contactDetails" :class="office.class" class="container-fluid block-content isotope-item" :key="index">
            <div class="row main-grid">
              <div class="col-sm-4">
                <h4 v-if="office.mainTitle">{{office.mainTitle}} <span v-if="office.mainTitle === 'Windhoek'">Head</span> Office</h4>
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
                  <!-- <div>
                    <span><i class="fa fa-clock-o"></i></span>
                    <div>Mon - Fri 8.00 - 17.00</div>
                  </div> -->
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
                  <!-- <div>
                    <span><i class="fa fa-clock-o"></i></span>
                    <div>Mon - Sat 8.00 - 19.00</div>
                  </div> -->
                </div>
              </div>
              <div class="col-sm-8 wow fadeInRight" data-wow-delay="0.3s">
                <h4>SEND us a message</h4>
                <div id="success"></div>
                <form @submit.prevent novalidate id="contactForm" class="reply-form form-inline">
                  <div class="default-inp form-elem">
                    <select class="form_input" v-model="formData.department" type="text" name="department" id="department">
                      <option value="" disabled selected hidden>Please choose a department...</option>
                      <option value="FP du Toit">FP du Toit</option>
                      <option value="Pro Parcel">Pro Parcel</option>
                      <option value="JET.X Couriers">JET.X Couriers</option>
                      <option value="Wesbank Transport">Wesbank Transport</option>
                    </select>
                  </div>
                  <div class="row form-elem mb-0">
                    <div class="col-sm-6 form-elem">
                      <div class="default-inp form-elem">
                        <i class="fa fa-user"></i>
                        <input class="form_input" v-model="formData.firstname" type="text" name="user-name" id="user-name" placeholder="Full Name" required="required">
                      </div>
                      <div class="default-inp form-elem">
                        <i class="fa fa-envelope"></i>
                        <input class="form_input" type="email" v-model="formData.email" name="user-email" id="user-email" placeholder="Email Address" required="required">
                      </div>
                    </div>
                    <div style="margin-bottom: 15px;" class="col-sm-6 form-elem">
                      <div class="default-inp form-elem">
                        <i class="fa fa-user"></i>
                        <input class="form_input" v-model="formData.lastname" type="text" name="user-lastname" id="user-lastname" placeholder="Last Name">
                      </div>
                        
                      <div class="default-inp form-elem">
                        <i class="fa fa-phone"></i>
                        <input class="form_input" v-model="formData.phone" type="text" name="user-phone" id="user-phone" placeholder="Phone No.">
                      </div>
                      <p class="input-elem-hint">Please format your number as E.164 eg. <samp>+264812345678</samp></p>
                    </div>
                    <div v-if="!isContactForm" class="col-sm-6 form-elem">
                      <div class="default-inp form-elem">
                        <i class="fa fa-arrows-h"></i>
                        <input class="form_input" v-model="formData.width" type="text" name="package-width" id="user-lastname" placeholder="Package width (cm)">
                      </div>
                      <div class="default-inp form-elem">
                        <i class="fa fa-long-arrow-up"></i>
                        <input class="form_input" v-model="formData.height" type="text" name="package-height" id="user-phone" placeholder="Package height (cm)">
                      </div>
                    </div>
                    <div v-if="!isContactForm" class="col-sm-6 form-elem">
                      <div class="default-inp form-elem">
                        <i class="fa  fa-long-arrow-right"></i>
                        <input class="form_input" v-model="formData.length" type="text" name="package-length" id="user-lastname" placeholder="Package length (cm)">
                      </div>
                      <div class="default-inp form-elem">
                        <i class="fa fa-balance-scale"></i>
                        <input class="form_input" v-model="volumetric" disabled type="text" name="volumetric_calc" id="user-phone" placeholder="Volumetric Factor">
                      </div>
                    </div>
                  </div>
                  <div class="default-inp form-elem">
                    <input class="form_input" v-model="formData.subject" type="text" name="user-subject" id="user-subject" placeholder="Subject">
                  </div>
                  <div class="form-elem default-inp">
                    <textarea class="form_input" v-model="formData.message" id="user-message" placeholder="Message"></textarea>
                  </div>
                  <div class="form-elem">
                    <button class="btn btn-success special-home" @click="sendSanitizedForm()" type="submit">send message</button>
                    <div id="recaptcha" class="g-recaptcha"></div>
                  </div>
                </form>
                 <h2 v-if="formError.isError" style="color: red; z-index: 1000">Oops!<span>{{formError.message}}</span></h2>
                 <h2 v-if="!mailStatus && mailStatus !== null" style="color: red; z-index: 1000">Oops!<span> An error occurred, please try later.</span></h2>
                 <h2 v-if="mailStatus" style="color: green; z-index: 1000">Thank You!<span> We'll get back to you shortly.</span></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

  export default {
    data: () => ({
      formData: {
        department: "",
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        length: "",
        width: "",
        height: "",
        subject: "",
        message: ""
      },
      formError: {
        isError: false,
        message: ""
      },
      contactDetails: [{
          mainTitle: 'Windhoek',
          depotTitle: 'Windhoek',
          mainAddress: '5 Nordland St, Lafrenz Industria, Windhoek',
          depotAddress: '36-40 Nickle St, Prosperita, Windhoek',
          mainPhone: '+26461372900',
          depotPhone: '+264612945000',
          class: 'windhoek'
        },
        {
          mainTitle: 'Walvis Bay',
          mainAddress: '11A, Hanna Mupetami Road, Walvis Bay',
          mainPhone: '+26464216044',
          class: 'walvisbay'
        },
        {
          mainTitle: 'Karibib',
          mainAddress: 'R688 Ext 1, Karibib',
          mainPhone: '+264811225014',
          class: 'karibib'
        },
        {
          mainTitle: 'Mariental',
          mainAddress: 'Hendrik Witbooi Avenue, Mariental',
          mainPhone: '+264817571699',
          class: 'mariental'
        },
        {
          mainTitle: 'Keetmanshoop',
          mainAddress: '116 6th Lane, Keetmanshoop',
          mainPhone: '+26463225324',
          class: 'keetmans',
        },
        {
          mainTitle: 'Johannesburg',
          mainAddress: '301 Deodar St, Pomona, Johannesburg',
          mainPhone: '+27115789900',
          class: 'joburg',
        },
        {
          mainTitle: 'Cape Town',
          mainAddress: 'C/O Cilmore and Krakeel Streets, Stikland, Bellville, Cape Town',
          mainPhone: '+27219464500',
          class: 'capetown',
        },
        {
          mainTitle: 'Oshakati',
          mainAddress: '2397 Oshopala St, Oshakati',
          mainPhone: '+264832945190',
          class: 'oshakati',
        },
        {
          mainTitle: 'Tsumeb',
          mainAddress: '4 Hage Geingob Drive, Tsumeb',
          mainPhone: '+26467221100',
          class: 'tsumeb',
        },
        {
          mainTitle: 'Durban',
          mainPhone: '+26467221100',
          class: 'durban',
        }
      ]
    }),
    props: ['selectedPlace'],
    computed: {
      volumetric() {
        if ((this.formData.height * this.formData.width * this.formData.length) / 5000 !== 0) return (this.formData.height * this.formData.width * this.formData.length) / 5000;
      },
      ...mapGetters([
        'mailStatus',
        'isContactForm'
      ])
    },
    mounted() {
      setTimeout(() => {
        $('[data-filter=".windhoek"]').click()
      }, 1000)
    },
    initReCaptcha: function() {
        var self = this;
        setTimeout(function() {
            if(typeof grecaptcha === 'undefined') {
                self.initReCaptcha();
            }
            else {
                grecaptcha.render('recaptcha', {
                    sitekey: '6LfJhHkUAAAAAPicdVIkdIbkx_JO92H50LFDRR6y',
                    size: 'invisible',
                    badge: 'inline',
                    callback: self.submitForm
                });
            }
        }, 100);
    },
    methods: {
      sendSanitizedForm() {
        this.formError.isError = false

        if(this.isEmpty())
        {
          this.formError.isError = true
          this.formError.message = ` Please fill in all the fields.`
          return
        } else if(this.formData.email && !this.formData.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
        {
          this.formError.isError = true
          this.formError.message = ` Please enter a valid email address.`
          return
        } else if(!this.formData.phone.match(/^\+[1-9]\d{1,14}$/))
        {
          this.formError.isError = true
          this.formError.message = ` Please enter a valid cellphone number.`
          return
        } else {
          
          grecaptcha.execute();
        }
      },
      isEmpty() {
        const formObjectKeys = Object.keys(this.formData)
        let check = false

        formObjectKeys.forEach(key => {
          let input = this.formData[key]

          if(this.isContactForm && key !== 'volumetric' && key !== 'height' && key !=='width' && key !== 'length') {
            if(input === '') {
              check = true
            }
          } else if(!this.isContactForm){
            if(input === '') {
              check = true
            }
          }
        })
        return check
      },
      submitForm() {
        dataLayer.push({'event': 'formSubmit'});
        
        let cleanData = this.formData
        cleanData.volumetric = this.volumetric

        if(this.isContactForm) {
          this.$store.dispatch('sendSanitizedContact', cleanData);
          sltracker.track('contact_enquiry', formData);
        } else {
          this.$store.dispatch('sendSanitizedMessage', cleanData);
          sltracker.track('quote_enquiry', formData);
        }
    
        setTimeout(() => {
          this.$store.commit('CHANGE_MAIL_STATUS', null)
          this.$router.go('/')
        }, 5500)
      }
    },
    watch: {
      formData: {
        handler: function() {
          this.formError.isError = false
        },
        deep: true
      },
      selectedPlace: function() {
        $('.isotope-filter')[0].style.height = 'auto'
      }
    }
  }

</script>

<style scoped>
  .services div {
    margin-bottom: initial;
  }

  #department {
    width:100%;
    border: none;
    height: 50px;
    padding: 0 24px;
    cursor: pointer;
  }
  .input-elem-hint {
    font-size: 0.75em;
    margin-bottom: 0;
  }

  .input-elem-hint > samp {
    background: #f4f4f4;
    color: grey;
    padding: 2px;
    border-radius: 3px;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
  }
</style>
