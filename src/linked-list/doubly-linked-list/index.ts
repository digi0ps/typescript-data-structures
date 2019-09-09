import Node from "../node"
import Abstract, { modeOptions } from "./abstract"

class DoublyLinkedList<T> extends Abstract<T> {
  constructor() {
    super()
    this.head = null
    this.tail = null
  }

  isEmpty() {
    return !this.head
  }

  private setHeadAndTail(node: Node<T>) {
    this.head = node
    this.tail = node
  }

  private insertAtEnd(node: Node<T>) {
    // Insert at end
    node.prev = this.tail
    this.tail.next = node
    this.tail = node
  }

  private insertAtBeginning(node: Node<T>) {
    node.next = this.head
    this.head.prev = node
    this.head = node
  }

  private insertInBetween(previousValue: T, newNode: Node<T>) {
    const previousNode = this.search(previousValue)

    if (!previousNode) {
      throw new Error("Node Not Found")
    }

    // TODO: Handle the case of previousNode == Head | Tail
    newNode.next = previousNode.next
    newNode.prev = previousNode

    previousNode.next.prev = newNode
    previousNode.next = newNode
  }

  insert(node: Node<T>, options: modeOptions<T> = { mode: "start" }) {
    // Default mode is "start" or beginning
    const { mode, previous } = options

    if (this.isEmpty()) {
      this.setHeadAndTail(node)
      return
    }

    if (mode === "start") {
      this.insertAtBeginning(node)
    } else if (mode === "end") {
      this.insertAtEnd(node)
    } else if (mode === "between" && previous) {
      this.insertInBetween(previous, node)
    }
  }

  search(value: T): Node<T> {
    let current = this.head

    while (current) {
      if (current.data === value) {
        return current
      }
      current = current.next
    }

    return null
  }

  delete(node: Node<T>) {
    // If node is head, prev is NULL
    if (this.head === node) {
      this.head = node.next
    } else {
      node.prev.next = node.next
    }
    // If node is tail, next is NULL
    if (this.tail === node) {
      this.tail = node.prev
    } else {
      node.next.prev = node.prev
    }
  }
}

export default DoublyLinkedList
