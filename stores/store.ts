import { defineStore } from 'pinia'

// import { inject } from 'vue'
// import { useRoute } from 'vue-router'

export const useCounterStore = defineStore('counter', {
  // data
  state: () => { return { count: 0, name: 'Eduardo' } },
  // computed
  getters: {
    doubleCount: (state) => { return state.count * 2 },
  },
  // methods
  // поддержка асинхронных методов
  actions: {
    async increment() {
      this.count++
    },
  },
})
