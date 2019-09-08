import Node from "../node"
import Abstract from "./abstract"

/**
 * Singly Linked List:
 * Head points to the last inserted node.
 * New elements gets inserted in the beginning.
 */
class SinglyLinkedList<Type> extends Abstract<Type> {
  constructor() {
    super()
    this.head = null
  }

  isEmpty() {
    return !this.head
  }

  insert(node: Node<Type>) {
    if (!this.head) {
      this.head = node
      return
    }

    node.next = this.head
    this.head = node
  }

  search(data: Type): Node<Type> {
    let current = this.head

    while (current) {
      if (current.data === data) {
        return current
      }
      current = current.next
    }

    return null
  }

  delete(node: Node<Type>) {
    let current = this.head
    let previous = null

    while (current) {
      if (current === node) {
        // If previous is null, then node is head
        if (!previous) {
          this.head = this.head.next
        } else {
          // Else previous must point to this node's next
          previous.next = current.next
        }

        break
      }
      previous = current
      current = current.next
    }
  }
}

export default SinglyLinkedList
