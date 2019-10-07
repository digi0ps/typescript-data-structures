import Node from "../node"
import BST from "./abstract"

class BinarySearchTree<T> extends BST<T> {
  constructor() {
    super()
    this.root = null
  }

  insert(node: Node<T>) {
    if (this.root === null) {
      this.root = node
      return
    }

    let current = this.root
    let previous = null

    while (current) {
      previous = current
      if (node.key <= current.key) {
        current = current.left
      } else {
        current = current.right
      }
    }

    if (node.key <= previous.key) {
      previous.left = node
    } else {
      previous.right = node
    }
  }

  search(key: T): Node<T> {
    let current = this.root

    while (current) {
      if (current.key === key) {
        return current
      } else if (key > current.key) {
        current = current.right
      } else {
        current = current.left
      }
    }

    return null
  }

  inorder(node: Node<T>) {
    if (node === null) {
      return
    }

    this.inorder(node.left)
    console.log(node.key)
    this.inorder(node.right)
  }

  minimum(node: Node<T>) {
    let current = node

    if (current === null) {
      return null
    }

    while (current.left) {
      current = current.left
    }

    return current.key
  }

  maximum(node: Node<T>) {
    let current = node

    if (current === null) {
      return null
    }

    while (current.right) {
      current = current.right
    }

    return current.key
  }
}

export default BinarySearchTree
