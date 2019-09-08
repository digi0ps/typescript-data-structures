import Node from "../node"

export interface modeOptions<T> {
  mode: "start" | "end" | "between"
  previous?: T
}

abstract class AbstractSingly<Type> {
  head: Node<Type>
  tail: Node<Type>

  abstract isEmpty(): boolean
  abstract insert(node: Node<Type>, modeOptions?: modeOptions<Type>): void
  abstract search(value: Type): Node<Type>
  abstract delete(node: Node<Type>): void
}

export default AbstractSingly
