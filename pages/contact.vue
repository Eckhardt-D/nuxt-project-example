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
    <no-ssr>
      <component :is="googlemap" />
    </no-ssr>
    
    <!-- Windhoek -->
    <div class="container-fluid block-content">
      <div class="row main-grid">
        <div class="col-sm-4">
          <h4>Windhoek Head Office</h4>
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
          <h4>Windhoek Depot</h4>
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
    <hr>
    <!-- Keetmanshoop -->
    <div class="container-fluid block-content">
      <div class="row main-grid">
        <div class="col-sm-4">
          <h4>Keetmanshoop Head Office</h4>
          <!-- <p>Everyday is a new day for us and we work really hard to
            satisfy our customers everywhere.</p> -->
          <div class="adress-details wow fadeInLeft" data-wow-delay="0.3s">
            <div>
              <span><i class="fa fa-location-arrow"></i></span>
              <div><strong>FP du Toit</strong><br>116 6th Lane, Keetmanshoop </div>
            </div>
            <div>
              <span><i class="fa fa-phone"></i></span>
              <div>+264 (0) 63 225324</div>
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
          <!-- <h4>Depot</h4>
          <div class="adress-details wow fadeInLeft" data-wow-delay="0.3s">
            <div>
              <span><i class="fa fa-location-arrow"></i></span>
              <div><strong>FP du Toit</strong><br>36-40 Nickle St, Prosperita, Windhoek </div>
            </div>
            <div>
              <span><i class="fa fa-phone"></i></span>
              <div>+264 (0) 61 2945000</div>
            </div>
            <div>
              <span><i class="fa fa-clock-o"></i></span>
              <div>Mon - Sat 8.00 - 19.00</div>
            </div>
          </div> -->
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
    <hr>
    <!-- Joburg -->
    <div class="container-fluid block-content">
      <div class="row main-grid">
        <div class="col-sm-4">
          <h4>Johannesburg Head Office</h4>
          <!-- <p>Everyday is a new day for us and we work really hard to
            satisfy our customers everywhere.</p> -->
          <div class="adress-details wow fadeInLeft" data-wow-delay="0.3s">
            <div>
              <span><i class="fa fa-location-arrow"></i></span>
              <div><strong>FP du Toit</strong><br>301 Deodar St, Pomona, Johannesburg </div>
            </div>
            <div>
              <span><i class="fa fa-phone"></i></span>
              <div>+27 (0) 11 578 9900</div>
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
          <!-- <h4>Depot</h4>
          <div class="adress-details wow fadeInLeft" data-wow-delay="0.3s">
            <div>
              <span><i class="fa fa-location-arrow"></i></span>
              <div><strong>FP du Toit</strong><br>36-40 Nickle St, Prosperita, Windhoek </div>
            </div>
            <div>
              <span><i class="fa fa-phone"></i></span>
              <div>+264 (0) 61 2945000</div>
            </div>
            <div>
              <span><i class="fa fa-clock-o"></i></span>
              <div>Mon - Sat 8.00 - 19.00</div>
            </div>
          </div> -->
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

    <hr>
    <!-- Cape Town -->
    <div class="container-fluid block-content">
      <div class="row main-grid">
        <div class="col-sm-4">
          <h4>Cape Town Head Office</h4>
          <!-- <p>Everyday is a new day for us and we work really hard to
            satisfy our customers everywhere.</p> -->
          <div class="adress-details wow fadeInLeft" data-wow-delay="0.3s">
            <div>
              <span><i class="fa fa-location-arrow"></i></span>
              <div><strong>FP du Toit</strong><br>C/O Cilmore and Krakeel Streets, Stikland, Bellville, Cape Town </div>
            </div>
            <div>
              <span><i class="fa fa-phone"></i></span>
              <div>+27 (0) 21 946 4500</div>
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
          <!-- <h4>Depot</h4>
          <div class="adress-details wow fadeInLeft" data-wow-delay="0.3s">
            <div>
              <span><i class="fa fa-location-arrow"></i></span>
              <div><strong>FP du Toit</strong><br>36-40 Nickle St, Prosperita, Windhoek </div>
            </div>
            <div>
              <span><i class="fa fa-phone"></i></span>
              <div>+264 (0) 61 2945000</div>
            </div>
            <div>
              <span><i class="fa fa-clock-o"></i></span>
              <div>Mon - Sat 8.00 - 19.00</div>
            </div>
          </div> -->
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

    <hr>
    <!-- Walvis Bay -->
    <div class="container-fluid block-content">
      <div class="row main-grid">
        <div class="col-sm-4">
          <h4>Walvis Bay Head Office</h4>
          <!-- <p>Everyday is a new day for us and we work really hard to
            satisfy our customers everywhere.</p> -->
          <div class="adress-details wow fadeInLeft" data-wow-delay="0.3s">
            <div>
              <span><i class="fa fa-location-arrow"></i></span>
              <div><strong>FP du Toit</strong><br>215 4th Street East, Walvis Bay </div>
            </div>
            <div>
              <span><i class="fa fa-phone"></i></span>
              <div>+264 (0) 64 200848</div>
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
          <!-- <h4>Depot</h4>
          <div class="adress-details wow fadeInLeft" data-wow-delay="0.3s">
            <div>
              <span><i class="fa fa-location-arrow"></i></span>
              <div><strong>FP du Toit</strong><br>36-40 Nickle St, Prosperita, Windhoek </div>
            </div>
            <div>
              <span><i class="fa fa-phone"></i></span>
              <div>+264 (0) 61 2945000</div>
            </div>
            <div>
              <span><i class="fa fa-clock-o"></i></span>
              <div>Mon - Sat 8.00 - 19.00</div>
            </div>
          </div> -->
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

    <hr>
    <!-- Oshakati -->
    <div class="container-fluid block-content">
      <div class="row main-grid">
        <div class="col-sm-4">
          <h4>Oshakati Head Office</h4>
          <!-- <p>Everyday is a new day for us and we work really hard to
            satisfy our customers everywhere.</p> -->
          <div class="adress-details wow fadeInLeft" data-wow-delay="0.3s">
            <div>
              <span><i class="fa fa-location-arrow"></i></span>
              <div><strong>FP du Toit</strong><br>2397 Oshopala St, Oshakati </div>
            </div>
            <div>
              <span><i class="fa fa-phone"></i></span>
              <div>+264 (0) 83 294 5190</div>
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
          <!-- <h4>Depot</h4>
          <div class="adress-details wow fadeInLeft" data-wow-delay="0.3s">
            <div>
              <span><i class="fa fa-location-arrow"></i></span>
              <div><strong>FP du Toit</strong><br>36-40 Nickle St, Prosperita, Windhoek </div>
            </div>
            <div>
              <span><i class="fa fa-phone"></i></span>
              <div>+264 (0) 61 2945000</div>
            </div>
            <div>
              <span><i class="fa fa-clock-o"></i></span>
              <div>Mon - Sat 8.00 - 19.00</div>
            </div>
          </div> -->
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

    <hr>
    <!-- Tsumeb -->
    <div class="container-fluid block-content">
      <div class="row main-grid">
        <div class="col-sm-4">
          <h4>Tsumeb Head Office</h4>
          <!-- <p>Everyday is a new day for us and we work really hard to
            satisfy our customers everywhere.</p> -->
          <div class="adress-details wow fadeInLeft" data-wow-delay="0.3s">
            <div>
              <span><i class="fa fa-location-arrow"></i></span>
              <div><strong>FP du Toit</strong><br>4 Hage Geingob Drive, Tsumeb </div>
            </div>
            <div>
              <span><i class="fa fa-phone"></i></span>
              <div>+264 (0) 67 221100</div>
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
          <!-- <h4>Depot</h4>
          <div class="adress-details wow fadeInLeft" data-wow-delay="0.3s">
            <div>
              <span><i class="fa fa-location-arrow"></i></span>
              <div><strong>FP du Toit</strong><br>36-40 Nickle St, Prosperita, Windhoek </div>
            </div>
            <div>
              <span><i class="fa fa-phone"></i></span>
              <div>+264 (0) 61 2945000</div>
            </div>
            <div>
              <span><i class="fa fa-clock-o"></i></span>
              <div>Mon - Sat 8.00 - 19.00</div>
            </div>
          </div> -->
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

    <hr>
    <!-- Durban -->
    <div class="container-fluid block-content">
      <div class="row main-grid">
        <div class="col-sm-4">
          <h4>Durban Head Office</h4>
          <!-- <p>Everyday is a new day for us and we work really hard to
            satisfy our customers everywhere.</p> -->
          <div class="adress-details wow fadeInLeft" data-wow-delay="0.3s">
            <!-- <div>
              <span><i class="fa fa-location-arrow"></i></span>
              <div><strong>FP du Toit</strong><br>4 Hage Geingob Drive, Tsumeb </div>
            </div> -->
            <div>
              <span><i class="fa fa-phone"></i></span>
              <div>+264 (0) 67 221100</div>
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
          <!-- <h4>Depot</h4>
          <div class="adress-details wow fadeInLeft" data-wow-delay="0.3s">
            <div>
              <span><i class="fa fa-location-arrow"></i></span>
              <div><strong>FP du Toit</strong><br>36-40 Nickle St, Prosperita, Windhoek </div>
            </div>
            <div>
              <span><i class="fa fa-phone"></i></span>
              <div>+264 (0) 61 2945000</div>
            </div>
            <div>
              <span><i class="fa fa-clock-o"></i></span>
              <div>Mon - Sat 8.00 - 19.00</div>
            </div>
          </div> -->
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

  const TheMap = () => ({component: import('@/components/TheMap.vue')})

  export default {
    created() {
      this.googlemap = () => TheMap()
    }
  }

</script>

<style>

</style>
