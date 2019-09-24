import Node from "../node"
import DoublyLinkedList from "."

describe("Testing Doubly Linked List", () => {
  const dll = new DoublyLinkedList<number>()
  const node1 = new Node(1)
  const node2 = new Node(2)
  const node3 = new Node(3)
  const node4 = new Node(4)

  test("Checking initialized", () => {
    expect(dll.head).toBeNull()
    expect(dll.tail).toBeNull()
    expect(dll.isEmpty()).toBeTruthy()
  })

  test("Inserting when empty", () => {
    /* null -> head:node1:tail -> null */
    dll.insert(node1)

    expect(dll.isEmpty()).toBeFalsy()
    expect(dll.head).toBe(node1)
    expect(dll.tail).toBe(node1)
  })

  test("Inserting at the start", () => {
    /* null -> head:node2 -> node1:tail -> null */
    dll.insert(node2, { mode: "start" })
    expect(dll.head).toBe(node2)
    expect(dll.head.next).toBe(node1)
    expect(dll.head.prev).toBeNull()

    expect(dll.tail).toBe(node1)
    expect(dll.tail.prev).toBe(node2)
    expect(dll.tail.next).toBeNull()
  })

  test("Inserting at the end", () => {
    /* null -> head:node2 -> node1 -> node3:tail -> null */
    dll.insert(node3, { mode: "end" })

    expect(dll.tail).toBe(node3)
    expect(node1.next).toBe(node3)
    expect(node3.prev).toBe(node1)
    expect(node3.next).toBeNull()
  })

  test("Inserting in between", () => {
    /* null -> head:n2 -> n1 -> n4 -> n3:tail -> null */
    dll.insert(node4, { mode: "between", previous: 1 })

    expect(node4.next).toBe(node3)
    expect(node4.prev).toBe(node1)

    // Give a previous node which is not presetn
    const node9 = new Node(9)
    try {
      dll.insert(node9, { mode: "between", previous: 9 })
    } catch (e) {
      expect(e.message).toBe("Node Not Found")
    }
  })

  test("Calling insert with wrong arguments", () => {
    try {
      dll.insert(new Node(10), { mode: "between" })
    } catch ({ message }) {
      expect(message).toBe("Invalid Arguments.")
    }
  })

  test("Search using data", () => {
    const resultNode = dll.search(2)

    expect(resultNode).toBeInstanceOf(Node)
    expect(resultNode.data).toBe(2)
    expect(resultNode).toBe(node2)

    // Test a value which is not present
    expect(dll.search(11)).toBeNull()
  })

  test("Delete: Middle Node", () => {
    // Delete Node 4
    const prevOf4 = node4.prev
    const nextOf4 = node4.next

    /* null -> head:n2 -> n1 -> n3:tail -> null */
    dll.delete(node4)
    expect(prevOf4.next).toBe(nextOf4)
    expect(nextOf4.prev).toBe(prevOf4)
  })

  test("Delete: First and last nodes", () => {
    const nextOfHead = dll.head.next
    /* null -> head:n1 -> n3:tail -> null */
    dll.delete(dll.head)
    expect(dll.head).toBe(nextOfHead)

    const prevOfTail = dll.tail.prev
    /* null -> head:n1:tail -> null */
    dll.delete(dll.tail)
    expect(dll.tail).toBe(prevOfTail)
  })

  test("Delete: Last Node", () => {
    dll.delete(node1)
    expect(dll.head).toBeNull()
    expect(dll.tail).toBeNull()
  })
})
