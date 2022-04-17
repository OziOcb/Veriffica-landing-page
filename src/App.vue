<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TheHeader from "@/components/TheHeader.vue";
import TheHero from "@/components/TheHero.vue";
import ContentSection from "@/components/ContentSection.vue";
import TheTestimonial from "@/components/TheTestimonial.vue";
import TheCtaSection from "@/components/TheCtaSection.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <client-only>
    <TheHeader />
  </client-only>
  <TheHero />

  <ContentSection>
    <aos-vue
      class="offset-lg-1 col-lg-5 col-md-8 col-sm-10 order-lg-1 order-1"
      animation="fade-right"
      :duration="800"
      :once="true"
    >
      <div class="content section-heading-7">
        <h2>
          Veriffica is designed to help people without experience in buying a
          good used car.
        </h2>

        <p>
          It's a good starting point to
          <strong>asses the technical condition of the car</strong>
          and save us from spending money in a service station.
        </p>
      </div>
    </aos-vue>

    <aos-vue
      class="
        offset-lg-1
        col-lg-5 col-md-8 col-sm-10
        position-relative
        order-lg-1 order-0
      "
      animation="fade-left"
      :duration="800"
      :once="true"
    >
      <div class="app-image-position-l-13">
        <img src="@/assets/image/l3/content-image-1.png" alt="" class="w-100" />
      </div>
    </aos-vue>
  </ContentSection>

  <ContentSection>
    <aos-vue
      class="col-lg-6 col-md-8 col-sm-10"
      animation="fade-right"
      :duration="800"
      :once="true"
    >
      <div class="app-image-position-l-13--minus-margin">
        <img src="@/assets/image/l3/content-image-2.png" alt="" class="w-100" />
      </div>
    </aos-vue>
    <aos-vue
      class="offset-lg-1 col-lg-5 col-md-8 col-sm-10 position-relative"
      animation="fade-left"
      :duration="800"
      :once="true"
    >
      <div class="content section-heading-7">
        <h2>Well Explained</h2>
        <p>You don't have to be an expert to use this app!</p>
      </div>
    </aos-vue>
  </ContentSection>

  <ContentSection class="ozi-lastContentSection">
    <aos-vue
      class="offset-lg-1 col-lg-5 col-md-8 col-sm-10 order-lg-1 order-1"
      animation="fade-right"
      :duration="800"
      :once="true"
    >
      <div class="content section-heading-7">
        <h2>Dark Theme</h2>
        <p>Soothing for your eyes <br />Good for you battery</p>
      </div>
    </aos-vue>

    <aos-vue
      class="
        offset-lg-1
        col-lg-5 col-md-8 col-sm-10
        position-relative
        order-lg-1 order-0
      "
      animation="fade-left"
      :duration="800"
      :once="true"
    >
      <div class="app-image-position-l-13--minus-margin">
        <img src="@/assets/image/l3/content-image-3.png" alt="" class="w-100" />
      </div>
    </aos-vue>
  </ContentSection>

  <!-- <TheTestimonial /> -->
  <TheCtaSection />
  <TheFooter />
</template>

<style lang="scss">
@import "@/assets/css/bootstrap.css";
@import "@/assets/fonts/icon-font/css/style.css";
@import "@/assets/fonts/typography-font/typo.css";
@import "@/assets/fonts/fontawesome-5/css/all.css";

@import url("https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700;800&display=swap");
/* @import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500;700;900&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800;900&display=swap'); */
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800;900&display=swap");
/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap'); */

@import "@/plugins/aos/aos.min.css";
@import "@/assets/css/main.css";

.ozi {
  &-lastContentSection {
    margin-bottom: 180px;
  }
}
</style>
