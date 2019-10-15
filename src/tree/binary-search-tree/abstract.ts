import Node from "../node"

abstract class BST<T> {
  abstract insert(node: Node<T>): void

  // Other methods
  abstract minimum(node: Node<T>): T
  abstract maximum(node: Node<T>): T
  abstract predecessor(node: Node<T>): Node<T>
  abstract successor(node: Node<T>): Node<T>
}

export default BST
