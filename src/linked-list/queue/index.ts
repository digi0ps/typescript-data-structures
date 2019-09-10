import Node from "../node"
import Abstract from "./abstract"

class Queue<T> extends Abstract<T> {
  constructor(size?: number) {
    super()
    this.head = null
    this.tail = null
    this.size = size
  }

  get length() {
    let current = this.head
    let len = 0

    while (current) {
      len++
      current = current.next
    }

    return len
  }

  isEmpty() {
    return !this.length
  }

  enqueue(node: Node<T>) {
    const { length, size } = this
    if (size && length === size) {
      throw new Error("Overflow")
    }

    if (this.isEmpty()) {
      // First element
      this.head = node
      this.tail = node
      return
    }

    this.tail.next = node
    this.tail = node
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Underflow")
    }

    const node = this.head
    this.head = this.head.next

    if (node === this.tail) {
      this.tail = null
    }

    return node
  }
}

export default Queue
