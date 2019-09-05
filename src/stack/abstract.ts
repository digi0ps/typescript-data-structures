abstract class AbstractStack<Type> {
  items: Array<Type>
  top: Type

  constructor() {}

  abstract push(item: Type): void
  abstract pop(): Type
  abstract print(): void
}

export default AbstractStack
