import Node from "../node"

abstract class QueueLL<Type> {
  head: Node<Type>
  tail: Node<Type>
  size?: number

  abstract isEmpty(): boolean
  abstract get length(): number
  abstract enqueue(item: Node<Type>): void
  abstract dequeue(): Node<Type>
}

export default QueueLL
