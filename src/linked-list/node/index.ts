class Node<Type> {
  data: Type
  next: Node<Type>
  prev?: Node<Type>

  constructor(data: Type) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

export default Node
