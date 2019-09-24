import Node from "../node"
import Queue from "../queue"

/**
 * Priority Queue
 * Just changing the enqueue logic to sort it before enqueueing it makes it
 * a priority queue.
 */
class PrioirtyQueue<T> extends Queue<T> {
  constructor(size?: number) {
    super(size)
  }

  enqueue(node: Node<T>) {
    const { length, size } = this
    if (size && length === size) {
      throw new Error("Overflow")
    }

    if (this.isEmpty()) {
      // First element
      this.head = node
      return
    }

    // Else loop through while checking priority
    let current = this.head
    let previous = null

    while (current && current.priority >= node.priority) {
      previous = current
      current = current.next
    }

    node.next = current

    if (!previous) {
      // Managing head
      this.head = node
    } else {
      previous.next = node
    }
  }
}

export default PrioirtyQueue
