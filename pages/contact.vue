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

    <iframe class="we-onmap wow fadeInUp" data-wow-delay="0.3s" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.7953048871755!2d17.06410601565493!3d-22.511861929559004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c0b1abe8b910015%3A0x6c62226089967685!2sFP+Du+Toit+Transport!5e0!3m2!1sen!2sna!4v1538074769644"></iframe>
    <div class="container-fluid block-content">
      <div class="row main-grid">
        <div class="col-sm-4">
          <h4>Head Office</h4>
          <p>Everyday is a new day for us and we work really hard to
            satisfy our customers everywhere.</p>
          <div class="adress-details wow fadeInLeft" data-wow-delay="0.3s">
            <div>
              <span><i class="fa fa-location-arrow"></i></span>
              <div><strong>FP du Toit</strong><br>5 Nordland St, Lafrenz Industria, Windhoek </div>
            </div>
            <div>
              <span><i class="fa fa-phone"></i></span>
              <div>+264 (0) 61 372 900</div>
            </div>
            <!-- <div>
              <span><i class="fa fa-envelope"></i></span>
              <div>quote@domain.com</div>
            </div> -->
            <div>
              <span><i class="fa fa-clock-o"></i></span>
              <div>Mon - Fri 8.00 - 17.00</div>
            </div>
          </div>
          <br><br>
          <hr><br>
          <h4>Depot</h4>
          <div class="adress-details wow fadeInLeft" data-wow-delay="0.3s">
            <div>
              <span><i class="fa fa-location-arrow"></i></span>
              <div><strong>FP du Toit</strong><br>36-40 Nickle St, Prosperita, Windhoek </div>
            </div>
            <div>
              <span><i class="fa fa-phone"></i></span>
              <div>+264 (0) 61 2945000</div>
            </div>
            <!-- <div>
              <span><i class="fa fa-envelope"></i></span>
              <div>quote@domain.com</div>
            </div> -->
            <div>
              <span><i class="fa fa-clock-o"></i></span>
              <div>Mon - Sat 8.00 - 19.00</div>
            </div>
          </div>
        </div>
        <div class="col-sm-8 wow fadeInRight" data-wow-delay="0.3s">
          <h4>SEND us a message</h4>
          <!-- <p>At your service</p> -->
          <div id="success"></div>
          <form novalidate id="contactForm" class="reply-form form-inline">
            <div class="row form-elem">
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
</template>

<script>
  export default {

  }

</script>

<style>

</style>
