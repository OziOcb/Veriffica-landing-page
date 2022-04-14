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
          class="offset-xl-1 col-xl-5 col-lg-6 col-md-8 col-sm-9"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <div class="content ozi-hero__content">
            <h1>Be sure!</h1>

            <p>
              Check all the most important elements of the vehicle before making
              a decision to buy it.
            </p>

            <!-- <div class="apps-btn">
              <a href="#" class="app-store"
                ><img src="src/assets/image/l3/app-store.png" alt=""
              /></a>
              <a href="#" class="app-store"
                ><img src="src/assets/image/l3/google-play.png" alt=""
              /></a>
            </div> -->
            <!-- <div>
              <h2>Sign up for a waiting list</h2>

              <form>
                <div class="formField__control">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email"
                  />

                  <label for="email" class="formField__label">email</label>
                  <div class="formField__bar"></div>
                </div>
              </form>
            </div> -->

            <div class="ozi-formBox">
              <h2>Sign up for a waiting list</h2>

              <!-- TODO: ENDED HERE! -->
              <!-- TODO: ENDED HERE! Podlacz vuelidate i netlify form-->
              <!-- TODO: ENDED HERE! -->
              <form method="post">
                <div class="ozi-formGroup">
                  <label for="email">Email</label>
                  <input
                    class="ozi-formControl"
                    id="email"
                    type="email"
                    name="Email"
                    placeholder="your e-mail"
                  />
                </div>

                <input class="btn btn-primary" type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-shape-13"></div>
  </div>
</template>

<style lang="scss" scoped>
.ozi {
  &-hero__content * {
    @media (min-width: 992px) {
      color: #fbfbfb !important;
    }
  }

  &-formBox {
    max-width: 500px;
    margin: auto;
    padding: 10px;
    box-shadow: 1px 1px 3px rgba(#393939, 0.3);
    border-radius: 8px;
    background: #ffffff;

    h2,
    p,
    label,
    input {
      color: #000 !important;
    }

    label {
      opacity: 0;
      height: 0;
      display: none;
    }

    h2 {
      font-size: 27px;
    }

    input {
      width: 100%;
      padding-left: 6px;
      &::placeholder {
        color: #444 !important;
      }
    }
  }
}
</style>
