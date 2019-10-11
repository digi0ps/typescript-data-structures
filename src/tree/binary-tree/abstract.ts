import Node from "../node"

abstract class BST<T> {
  root: Node<T>

  // Printing methods
  abstract preorder(node: Node<T>): void
  abstract inorder(node: Node<T>): void
  abstract postorder(node: Node<T>): void

  // Search
  abstract breathFirstTraversal(): void
  abstract depthFirstTraversal(): void

  // Other methods
  abstract height(node: Node<T>): number
}

export default BST
