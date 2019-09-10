import Node from "../node"
import Abstract from "./abstract"

class StackLL<T> extends Abstract<T> {
  constructor(size?: number) {
    super()
    this.top = null
    this.size = size
  }

  isEmpty() {
    return this.top === null
  }

  get length() {
    let current = this.top
    let len = 0

    while (current) {
      len++
      current = current.next
    }

    return len
  }

  push(node: Node<T>) {
    const { length, size } = this
    if (size && length === size) {
      throw new Error("Overflow")
    }

    if (this.isEmpty()) {
      // First element
      this.top = node
      return
    }

    node.next = this.top
    this.top = node
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Underflow")
    }

    const node = this.top
    this.top = this.top.next
    return node
  }
}

export default StackLL
