class Node<T> {
  key: T
  left?: Node<T> = null
  right?: Node<T> = null
  parent?: Node<T> = null
  constructor(key: T) {
    this.key = key
  }
}

export default Node
