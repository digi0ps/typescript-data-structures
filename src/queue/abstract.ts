abstract class AbstractQueue<Type> {
  items: Array<Type>
  head: number
  tail: number

  constructor() {}

  abstract isEmpty(): boolean
  abstract enqueue(item: Type): void
  abstract dequeue(): Type
  abstract print(): void
}

export default AbstractQueue
