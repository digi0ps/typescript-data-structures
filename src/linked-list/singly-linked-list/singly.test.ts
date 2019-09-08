import Node from "../node"
import SinglyLinkedList from "."

describe("Testing Singly Linked List", () => {
  const sll = new SinglyLinkedList<number>()
  const node1 = new Node(1)
  const node2 = new Node(2)
  const node3 = new Node(3)

  test("Checking initialized", () => {
    expect(sll.head).toBeNull()
    expect(sll.isEmpty()).toBeTruthy()
  })

  test("Insert into list", () => {
    sll.insert(node1)

    expect(sll.isEmpty()).toBeFalsy()
    expect(sll.head).toBe(node1)
    expect(sll.head.next).toBeNull()

    sll.insert(node2)
    expect(sll.head).toBe(node2)
    expect(sll.head.next).toBe(node1)

    sll.insert(node3)
  })

  test("Search using data", () => {
    const resultNode = sll.search(2)

    expect(resultNode).toBeInstanceOf(Node)
    expect(resultNode.data).toBe(2)
    expect(resultNode).toBe(node2)

    // Test a value which is not present
    expect(sll.search(11)).toBeNull()
  })

  test("Delete: Middle Node", () => {
    // Delete Middle Node
    expect(node3.next).toBe(node2)
    expect(node2.next).toBe(node1)

    sll.delete(node2)
    expect(node3.next).toBe(node1)
  })

  test("Delete: First and last nodes", () => {
    expect(sll.head).toBe(node3)
    sll.delete(node3)
    expect(sll.head).toBe(node1)

    sll.delete(node1)
    expect(sll.head).toBeNull()
  })

  test("Delete: Last Node", () => {
    sll.insert(node1)
    sll.insert(node2)
    sll.insert(node3)

    sll.delete(node1)
    expect(node2.next).toBeNull()
  })
})
