<template>
  <aos-vue
    class="cta-area-l-13"
    animation="fade-left"
    :duration="800"
    :once="true"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-12">
          <div class="row justify-content-center">
            <div class="col-xxl-7 col-xl-8 text-center">
              <div class="content">
                <span class="tagline">Time to take action</span>

                <h2>
                  Leave your email to get notification about the launch of this
                  app.
                </h2>

                <FormWaitingList />

                <!-- <div class="apps-btn">
                  <a href="#" class="app-store">
                    <img src="@/assets/image/l3/app-store.png" alt="" />
                  </a>
                  <a href="#" class="app-store">
                    <img src="@/assets/image/l3/google-play.png" alt="" />
                  </a>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aos-vue>
</template>

<script setup>
import FormWaitingList from "@/components/FormWaitingList.vue";
</script>

