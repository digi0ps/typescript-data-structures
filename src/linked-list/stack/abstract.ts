import Node from "../node"

abstract class StackLL<Type> {
  top: Node<Type>
  size?: number

  abstract isEmpty(): boolean
  abstract get length(): number
  abstract push(item: Node<Type>): void
  abstract pop(): Node<Type>
}

export default StackLL
