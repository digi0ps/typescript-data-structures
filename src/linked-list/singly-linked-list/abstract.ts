import Node from "../node"

abstract class AbstractSingly<Type> {
  head: Node<Type>

  abstract isEmpty(): boolean
  abstract insert(node: Node<Type>): void
  abstract search(value: Type): Node<Type>
  abstract delete(node: Node<Type>): void
}

export default AbstractSingly
