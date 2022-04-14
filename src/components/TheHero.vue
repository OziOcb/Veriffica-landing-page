<template>
  <div class="hero-area-l-13 position-relative overflow-hidden">
    <div class="container">
      <div class="row position-relative justify-content-center">
        <div
          class="col-xl-6 col-lg-6 col-sm-9"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <div class="banner-image-l-13">
            <img
              src="src/assets/image/l3/hero-image.png"
              alt=""
              class="w-100"
            />
          </div>
        </div>

        <div
          class="
            ozi-contentWrapper
            offset-xl-1
            col-xl-5 col-lg-6 col-md-8 col-sm-9
          "
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <FormWaitingList class="ozi-form" />

          <div class="content ozi-hero__content">
            <h1>Be sure!</h1>

            <p>
              Check all the most important elements of the vehicle before making
              a decision to buy it.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-shape-13"></div>
  </div>
</template>

<script setup>
import FormWaitingList from "../components/FormWaitingList.vue";
</script>

<style lang="scss" scoped>
.ozi-contentWrapper {
  display: flex;
  flex-direction: column;
}

.ozi-form {
  margin-top: 40px;
  @media (min-width: 992px) {
    margin-top: 0;
    order: 1;
  }
}

.ozi-hero__content * {
  @media (min-width: 992px) {
    color: #fbfbfb !important;
  }
}
</style>
