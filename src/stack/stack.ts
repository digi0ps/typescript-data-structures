import AbstractStack from "./abstract"

class Stack<T> extends AbstractStack<T> {
  items: Array<T>
  top: number

  constructor() {
    super()
    this.items = []
    this.top = -1
  }

  isEmpty() {
    return !this.items.length
  }

  push(item: T) {
    this.top = this.top + 1
    this.items[this.top] = item
  }

  pop() {
    const item = this.items[this.top]

    delete this.items[this.top]
    this.top = this.top - 1

    return item
  }

  print() {
    const messages = ["TOP", ...this.items, "BOTTOM"]
    console.log(messages.join(" -> "))
  }
}

export default Stack
