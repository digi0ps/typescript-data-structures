import Node from "../node"
import BinaryTreeAbstract from "./abstract"

import Queue from "../../queue"
import Stack from "../../stack"

class BinaryTree<T> extends BinaryTreeAbstract<T> {
  constructor() {
    super()
    this.root = null
  }

  preorder(node: Node<T>) {
    if (node === null) {
      return
    }

    console.log(node.key)
    this.preorder(node.left)
    this.preorder(node.right)
  }

  inorder(node: Node<T>) {
    if (node === null) {
      return
    }

    this.inorder(node.left)
    console.log(node.key)
    this.inorder(node.right)
  }

  postorder(node: Node<T>) {
    if (node === null) {
      return
    }

    this.postorder(node.left)
    this.postorder(node.right)
    console.log(node.key)
  }

  breathFirstTraversal() {
    const queue = new Queue<Node<T>>()

    queue.enqueue(this.root)

    while (true) {
      try {
        const node = queue.dequeue()
        console.log(node.key)

        // Push items only if they are not null
        node.left && queue.enqueue(node.left)
        node.right && queue.enqueue(node.right)
      } catch (e) {
        break
      }
    }
  }

  depthFirstTraversal() {
    const stack = new Stack<Node<T>>()

    stack.push(this.root)

    while (true) {
      try {
        const node = stack.pop()
        console.log(node.key)

        node.left && stack.push(node.left)
        node.right && stack.push(node.right)
      } catch (e) {
        break
      }
    }
  }

  height(node: Node<T>): number {
    if (node === null) {
      return 0
    }

    const leftHeight = this.height(node.left)
    const rightHeight = this.height(node.right)

    if (leftHeight >= rightHeight) {
      return leftHeight + 1
    } else {
      return rightHeight + 1
    }
  }
}

export default BinaryTree
