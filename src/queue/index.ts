import AbstractQueue from "./abstract"

class Queue<T> extends AbstractQueue<T> {
  constructor() {
    super()
    this.items = []
    this.head = 0
    this.tail = 0
  }

  isEmpty() {
    return this.head === this.tail
  }

  enqueue(item: T) {
    this.items[this.tail] = item
    this.tail = this.tail + 1
  }

  dequeue() {
    if (this.isEmpty()) {
      throw "Underflow: Queue is empty"
    }

    const deleted = this.items[this.head]
    delete this.items[this.head]
    this.head = this.head + 1

    return deleted
  }

  print() {
    const { head, tail, items } = this
    for (let i = head; i < tail; i++) {
      console.log(items[i])
    }
  }
}

export default Queue
