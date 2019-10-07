import Node from "../node"

abstract class BST<T> {
  root: Node<T>

  abstract insert(node: Node<T>): void
  // Printing methods
  abstract inorder(node: Node<T>): void
  // Search
  abstract search(key: T): Node<T>
  // Other methods
  abstract minimum(node: Node<T>): T
  abstract maximum(node: Node<T>): T
}

export default BST
