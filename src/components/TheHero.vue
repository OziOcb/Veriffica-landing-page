<template>
  <div class="hero-area-l-13 position-relative overflow-hidden">
    <div class="container">
      <div class="row position-relative justify-content-center">
        <aos-vue
          class="col-xl-6 col-lg-6 col-sm-9"
          animation="fade-right"
          :duration="800"
          :once="true"
        >
          <div class="banner-image-l-13">
            <img src="@/assets/image/l3/hero-image.png" alt="" class="w-100" />
          </div>
        </aos-vue>

        <aos-vue
          class="ozi-contentWrapper offset-xl-1 col-xl-5 col-lg-6 col-md-8 col-sm-9"
          animation="fade-left"
          :duration="800"
          :once="true"
        >
          <div class="ozi-appsBtn apps-btn">
            <a
              href="https://apps.apple.com/gb/app/veriffica-car-check/id1589604742"
              class="app-store"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img src="@/assets/image/l3/apple-app-store--black.svg" alt="" />
            </a>

            <!-- <a href="#" class="app-store">
              <img src="@/assets/image/l3/google-play.png" alt="" />
            </a> -->
          </div>

          <FormWaitingList class="ozi-form" />

          <div class="content ozi-hero__content">
            <h1>Be sure!</h1>

            <h2>
              Make a Wise Decision with Verrifica - Your Ultimate Guide to
              Buying a Used Car!
            </h2>
            <p>
              Are you new to <strong>buying used cars</strong> and want to
              ensure you make a <strong>wise</strong> decision? Look no further!
              Verrifica is here to help. Our
              <strong>comprehensive checklist</strong> allows you to
              <strong
                >assess all the crucial elements of a vehicle before making a
                purchase.</strong
              >
            </p>
          </div>
        </aos-vue>
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

  @media (min-width: 992px) {
    margin-top: -60px;
  }
}

.ozi-form,
.ozi-appsBtn {
  margin-top: 40px;

  @media (min-width: 992px) {
    margin-top: 0;
    order: 1;
  }
}

.ozi-appsBtn {
  display: flex;
  justify-content: center;
  margin-top: 40px !important;

  @media (min-width: 992px) {
    margin-top: 0px !important;
    margin-bottom: 20px !important;
    justify-content: flex-start;
  }
}

.app-store {
  width: 100%;
  max-width: 230px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
}

.ozi-hero__content {
  p {
    font-size: 18px !important;
  }

  * {
    @media (min-width: 992px) {
      color: #fbfbfb !important;
    }
  }
}
</style>
