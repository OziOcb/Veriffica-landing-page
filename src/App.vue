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
        <h2>Ensure a Wise Vehicle Purchase with Our Comprehensive Tool.</h2>

        <p>
          Before deciding on your next vehicle, make sure you're equipped with
          the right information. Our user-friendly application provides a
          step-by-step guide on how to conduct a thorough inspection of the
          car's essential elements. Simply answer "Yes," "No," or "I don't know"
          as you go through the checklist. Our system will generate a percentage
          score, indicating the car's overall condition. A higher score means a
          potentially better car. Don't miss out on this invaluable tool for
          informed decision-making. Optimize your vehicle purchase process with
          our inspection checklist today!
        </p>
      </div>
    </aos-vue>

    <aos-vue
      class="offset-lg-1 col-lg-5 col-md-8 col-sm-10 position-relative order-lg-1 order-0"
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
        <h2>Experience the Demo in Action!</h2>
        <p>
          Curious to see how it works? Watch our short demo on YouTube to get a
          firsthand look at our innovative solution in action. Click the link
          below to watch the demo now!
          <br />
          <a
            href="https://youtu.be/259IPjqXzw8"
            rel="noreferrer noopener"
            target="_blank"
            >YouTube</a
          >
        </p>
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
        <h2>Enhance Your Experience with Dark Theme</h2>
        <p>
          Give your eyes a break with our soothing Dark Theme. Not only does it
          reduce eye strain, but it's also beneficial for your device's battery
          life. With Dark Theme, you can enjoy a sleek and stylish interface
          while taking care of your eyes and conserving battery power. Try it
          now and elevate your user experience to a whole new level!
        </p>
      </div>
    </aos-vue>

    <aos-vue
      class="offset-lg-1 col-lg-5 col-md-8 col-sm-10 position-relative order-lg-1 order-0"
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
