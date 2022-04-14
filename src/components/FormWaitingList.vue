<template>
  <div class="form">
    <h2 class="form__title">Sign up for a waiting list</h2>

    <form class="form__form" method="post">
      <div class="form__inputWrapper inputWrapper">
        <label class="inputWrapper__label" for="email">Email</label>

        <input
          class="inputWrapper__input"
          id="email"
          type="email"
          name="Email"
          placeholder="your e-mail"
        />
      </div>

      <button class="form__submitBtn" type="submit">Submit</button>
    </form>
  </div>
</template>

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
    @media (min-width: 992px) {
      width: initial;
    }
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
  }
}
</style>