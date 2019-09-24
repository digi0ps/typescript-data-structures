class Node<Type> {
  data: Type
  next: Node<Type>
  prev?: Node<Type>
  priority?: number

  constructor(data: Type) {
    this.data = data
    this.next = null
    this.prev = null
    this.priority = 0
  }
}

export default Node
