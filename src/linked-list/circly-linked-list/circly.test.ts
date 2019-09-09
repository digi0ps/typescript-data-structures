import Node from "../node"
import CircularLinkedList from "."

describe("Testing Circular Linked List", () => {
  const cll = new CircularLinkedList<number>()
  const node1 = new Node(1)
  const node2 = new Node(2)
  const node3 = new Node(3)
  const node4 = new Node(4)

  test("Checking initialized", () => {
    expect(cll.head).toBeNull()
    expect(cll.tail).toBeNull()
    expect(cll.isEmpty()).toBeTruthy()
  })

  test("Inserting when empty", () => {
    /* tail -> head:node1:tail -> head */
    cll.insert(node1)

    expect(cll.isEmpty()).toBeFalsy()
    expect(cll.head).toBe(node1)
    expect(cll.tail).toBe(node1)
    expect(node1.next).toBe(node1)
    expect(node1.prev).toBe(node1)
  })

  test("Inserting at the start", () => {
    /* null -> head:node2 -> node1:tail -> null */
    cll.insert(node2, { mode: "start" })
    expect(cll.head).toBe(node2)
    expect(cll.head.next).toBe(node1)
    expect(cll.head.prev).toBe(cll.tail)

    expect(cll.tail).toBe(node1)
    expect(cll.tail.prev).toBe(node2)
    expect(cll.tail.next).toBe(cll.head)
  })

  test("Inserting at the end", () => {
    const prevTail = cll.tail
    /* null -> head:node2 -> node1 -> node3:tail -> null */
    cll.insert(node3, { mode: "end" })

    expect(cll.tail).toBe(node3)
    expect(cll.tail.next).toBe(cll.head)
    expect(cll.tail.prev).toBe(prevTail)
    expect(prevTail.next).toBe(cll.tail)
    expect(cll.head.prev).toBe(cll.tail)
  })

  test("Inserting in between", () => {
    /* null -> head:n2 -> n1 -> n4 -> n3:tail -> null */
    cll.insert(node4, { mode: "between", previous: 1 })

    expect(node4.next).toBe(node3)
    expect(node4.prev).toBe(node1)

    // Give a previous node which is not presetn
    const node9 = new Node(9)
    try {
      cll.insert(node9, { mode: "between", previous: 9 })
    } catch (e) {
      expect(e.message).toBe("Node Not Found")
    }
  })

  test("Search using data", () => {
    const resultNode = cll.search(2)

    expect(resultNode).toBeInstanceOf(Node)
    expect(resultNode.data).toBe(2)
    expect(resultNode).toBe(node2)

    // Test a value which is not present
    expect(cll.search(11)).toBeNull()
  })

  test("Delete: Middle Node", () => {
    // Delete Node 4
    const prevOf4 = node4.prev
    const nextOf4 = node4.next

    /* null -> head:n2 -> n1 -> n3:tail -> null */
    cll.delete(node4)
    expect(prevOf4.next).toBe(nextOf4)
    expect(nextOf4.prev).toBe(prevOf4)
  })

  test("Delete: First and last nodes", () => {
    const nextOfHead = cll.head.next
    /* null -> head:n1 -> n3:tail -> null */
    cll.delete(cll.head)
    expect(cll.head).toBe(nextOfHead)
    expect(cll.head.prev).toBe(cll.tail)
    expect(cll.tail.next).toBe(cll.head)

    const prevOfTail = cll.tail.prev
    /* null -> head:n1:tail -> null */
    cll.delete(cll.tail)
    expect(cll.tail).toBe(prevOfTail)
    expect(cll.tail.next).toBe(cll.head)
    expect(cll.head.prev).toBe(cll.tail)
  })

  test("Delete: Last remaining Node", () => {
    cll.delete(node1)
    expect(cll.head).toBeNull()
    expect(cll.tail).toBeNull()
  })

  return
})
