class Node<T> {
  data: T
  left?: Node<T> = null
  right?: Node<T> = null

  constructor(data: T) {
    this.data = data
  }
}

export default Node
