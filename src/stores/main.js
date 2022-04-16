import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    email: "",
    hasBeenSent: false,
    isFormPending: false
  })
})
