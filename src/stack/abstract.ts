abstract class AbstractStack<Type> {
  items: Array<Type>
  top: number
  size?: number

  constructor() {}

  abstract isEmpty(): boolean
  abstract push(item: Type): void
  abstract pop(): Type
  abstract print(): void
}

export default AbstractStack
