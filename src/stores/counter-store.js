const {
  makeObservable,
  observable,
  action,
  computed,
  makeAutoObservable,
} = require('mobx')

class CounterStore {
  count = 0

  get total() {
    return this.count * 2
  }

  constructor() {
    // makeObservable(this, {
    //   count: observable,
    //   increment: action,
    //   decrement: action,
    //   total: computed,
    // })

    makeAutoObservable(this)
  }

  increment = (value) => {
    this.count += value
  }

  decrement = (value) => {
    this.count -= value
  }
}

export default new CounterStore()
