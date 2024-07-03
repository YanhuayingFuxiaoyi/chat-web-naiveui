import { defineStore } from 'pinia'

const useAppStore = defineStore('app', {
  state: () => {
    return {
      count: 0,
      name: 'Pinia',
      message: 'Hello Pinia!',
      messages: []
    }
  },
  actions: {
    increment() {
      this.count++
    },
    addMessage(message) {
      this.messages.push(message)
    },
  },
})

export default useAppStore