import AbstractStack from "./abstract"

class Stack<T> extends AbstractStack<T> {
  constructor(size?: number) {
    super()
    this.items = []
    this.top = -1
    this.size = size
  }

  isEmpty() {
    return !this.items.length
  }

  push(item: T) {
    this.top = this.top + 1

    if (this.size && this.top == this.size) {
      throw new Error("Overflow")
    }

    this.items[this.top] = item
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Underflow")
    }

    const item = this.items[this.top]

    delete this.items[this.top]
    this.top = this.top - 1

    return item
  }

  print() {
    const messages: any[] = ["TOP"]
    for (let i = this.top; i > -1; i--) {
      messages.push(this.items[i])
    }
    messages.push("BOTTOM")
    console.log(messages.join(" -> "))
  }
}

export default Stack
