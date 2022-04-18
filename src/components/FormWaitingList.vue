<template>
  <div class="form">
    <template v-if="!store.hasBeenSent">
      <h2 class="form__title">Sign up for a waiting list</h2>

      <form
        class="form__form"
        name="signup-to-waiting-list"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="submit"
      >
        <input type="hidden" name="form-name" value="signup-to-waiting-list" />
        <div
          class="form__inputWrapper inputWrapper"
          :class="{ 'inputWrapper--error': v$.email.$errors.length }"
        >
          <label class="inputWrapper__label" for="email">Email</label>

          <input
            class="inputWrapper__input"
            id="email"
            type="text"
            name="email"
            placeholder="your e-mail"
            v-model="store.email"
            :disabled="store.isFormPending"
          />

          <div
            class="inputWrapper__errors"
            v-for="error of v$.email.$errors"
            :key="error.$uid"
          >
            <div class="inputWrapper__errorMsg">{{ error.$message }}</div>
          </div>
          <div v-if="store.hasServerError" class="inputWrapper__errors">
            <div class="inputWrapper__errorMsg">Server error</div>
          </div>
        </div>

        <button
          class="form__submitBtn"
          type="submit"
          :disabled="store.isFormPending"
        >
          {{ !store.isFormPending ? "Submit" : "Submitting..." }}
        </button>
      </form>
    </template>

    <template v-else>
      <p class="form__successMsg">
        Thank you for taking an interest in my app! I will notify you as soon as
        the app is available.
      </p>
    </template>
  </div>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { useStore } from "@/stores/main";
import axios from "axios";
const store = useStore();

const rules = {
  email: { required, email }, // Matches state.contact.email
};

const v$ = useVuelidate(rules, store);

const encode = (data) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
};

const submit = async () => {
  store.isFormPending = true;
  const result = await v$.value.$validate();

  if (!result) {
    store.isFormPending = false;
    return;
  }

  const axiosConfig = {
    header: { "Content-Type": "application/x-www-form-urlencoded" },
  };

  try {
    await axios.post(
      "/",
      encode({
        "form-name": "signup-to-waiting-list",
        email: store.email,
      }),
      axiosConfig
    );

    store.hasBeenSent = true;
  } catch (error) {
    console.log("-\n--\n error \n >", error, "\n--\n-");
    store.hasServerError = true;
  }

  store.isFormPending = false;
};
</script>

<style lang="scss">
.form {
  // max-width: 500px;
  padding: 10px;
  box-shadow: 1px 1px 3px rgba(#393939, 0.3);
  border-radius: 8px;
  background: #f5f5f6;
  text-align: left !important;

  &__title {
    font-size: 31px !important;
    font-weight: 500 !important;
    line-height: 37.6833px !important;
    text-align: left !important;
    margin-bottom: 8px !important;
    margin-top: 0px !important;
    letter-spacing: normal !important;
    font-family: "Mazzard H";
  }

  &__inputWrapper {
    margin-bottom: 8px;
  }

  &__submitBtn {
    width: 100%;
    background-color: #0b65b3;
    color: #efefef;
    padding: 0.6em 3.6em;
    border-radius: 6px;
    font-weight: bold;
    border: none;
    &:hover,
    &:focus {
      background-color: #0f87f0;
    }
    &:disabled {
      background-color: #084981;
    }
    @media (min-width: 992px) {
      width: initial;
    }
  }

  &__successMsg {
    font-weight: bold;
    font-size: 21px;
    color: #088158;
  }
}

.inputWrapper {
  display: flex;
  flex-direction: column;

  &__label {
    opacity: 0;
    font-size: 0;
    max-height: 0;
  }

  &__input {
    padding: 0.3em 0.6em;
    font-size: 18px;
    border-radius: 6px;
    border: 1px solid #9a9a9a;
    outline: none;
    &:focus {
      border-color: #0f87f0;
      box-shadow: inset 0 0 0 1px #0f87f0;
    }

    .inputWrapper--error > & {
      border-color: #c61010;
      box-shadow: inset 0 0 0 2px #c61010;
    }
  }

  &__errorMsg {
    color: #c61010;
  }
}
</style>