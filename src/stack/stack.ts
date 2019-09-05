import AbstractStack from "./abstract"

class Stack<T> extends AbstractStack<T> {
  items: Array<T>
  top: T

  constructor() {
    super()
    this.items = []
  }

  push(item: T) {
    this.items.push(item)
  }

  pop() {
    return this.items.pop()
  }

  print() {
    const messages = ["TOP", ...this.items, "BOTTOM"]
    console.log(messages.join(" -> "))
  }
}

export default Stack
