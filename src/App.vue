<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TheHeader from "./components/TheHeader.vue";
import TheHero from "./components/TheHero.vue";
import ContentSection from "./components/ContentSection.vue";
import TheTestimonial from "./components/TheTestimonial.vue";
import TheCtaSection from "./components/TheCtaSection.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <TheHeader />
  <TheHero />

  <ContentSection>
    <div
      class="offset-lg-1 col-lg-5 col-md-8 col-sm-10 order-lg-1 order-1"
      data-aos="fade-right"
      data-aos-duration="800"
      data-aos-once="true"
    >
      <div class="content section-heading-7">
        <h2>Build Beautiful Landing Pages</h2>
        <p>
          Create custom landing pages with Shades that convert more visitors
          than any website, no coding required.
        </p>
      </div>
    </div>

    <div
      class="offset-lg-1 col-lg-5 col-md-8 col-sm-10 position-relative order-lg-1 order-0"
      data-aos="fade-left"
      data-aos-duration="800"
      data-aos-once="true"
    >
      <div class="app-image-position-l-13">
        <img
          src="src/assets/image/l3/content-image-1.png"
          alt=""
          class="w-100"
        />
      </div>
    </div>
  </ContentSection>

  <ContentSection>
    <div
      class="col-lg-6 col-md-8 col-sm-10"
      data-aos="fade-right"
      data-aos-duration="800"
      data-aos-once="true"
    >
      <div class="app-image-position-l-13">
        <img
          src="src/assets/image/l3/content-image-2.png"
          alt=""
          class="w-100"
        />
      </div>
    </div>
    <div
      class="offset-lg-1 col-lg-5 col-md-8 col-sm-10 position-relative"
      data-aos="fade-left"
      data-aos-duration="800"
      data-aos-once="true"
    >
      <div class="content section-heading-7">
        <h2>Build Beautiful Landing Pages</h2>
        <p>
          Create custom landing pages with Shades that convert more visitors
          than any website, no coding required.
        </p>
      </div>
    </div>
  </ContentSection>

  <ContentSection>
    <div
      class="offset-lg-1 col-lg-5 col-md-8 col-sm-10 order-lg-1 order-1"
      data-aos="fade-right"
      data-aos-duration="800"
      data-aos-once="true"
    >
      <div class="content section-heading-7">
        <h2>Build Beautiful Landing Pages</h2>
        <p>
          Create custom landing pages with Shades that convert more visitors
          than any website, no coding required.
        </p>
      </div>
    </div>

    <div
      class="offset-lg-1 col-lg-5 col-md-8 col-sm-10 position-relative order-lg-1 order-0"
      data-aos="fade-left"
      data-aos-duration="800"
      data-aos-once="true"
    >
      <div class="app-image-position-l-13">
        <img
          src="src/assets/image/l3/content-image-3.png"
          alt=""
          class="w-100"
        />
      </div>
    </div>
  </ContentSection>

  <TheTestimonial />
  <TheCtaSection />
  <TheFooter />
</template>

<style>
@import "./assets/css/bootstrap.css";
@import "./assets/fonts/icon-font/css/style.css";
@import "./assets/fonts/typography-font/typo.css";
@import "./assets/fonts/fontawesome-5/css/all.css";

@import url("https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700;800&display=swap");
/* @import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500;700;900&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800;900&display=swap'); */
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800;900&display=swap");
/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap'); */

@import "./plugins/aos/aos.min.css";
@import "./assets/css/main.css";
</style>
