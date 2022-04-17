<template>
  <div
    class="testimonial-area-l-13 position-relative overflow-hidden z-index-1"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-11">
          <div class="row">
            <div class="col-md-12">
              <div class="section-heading-7 text-center">
                <h2>Customers are loving Shades</h2>
              </div>
            </div>
          </div>
          <div
            class="row testimonial-area-l-13-items justify-content-center"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <div class="col-xl-4 col-md-6 col-sm-8" v-for="n in 6" :key="n">
              <div class="testimonial-card bg-white">
                <p>
                  “You made it so simple. My new site is so much faster and
                  easier to work with than my old site. I just choose the page,
                  make the change and click save.
                </p>
                <div class="d-flex customer-identity">
                  <div class="customer-img">
                    <img src="@/assets/image/l3/client-img-2.png" alt="" />
                  </div>
                  <div class="content-body">
                    <h5>Cameron Anderson</h5>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-shape-3"></div>
  </div>
</template>
