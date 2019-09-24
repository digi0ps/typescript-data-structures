import PriorityQueue from "."
import Node from "../node"

describe("Testing Prioirty Queue", () => {
  const queue = new PriorityQueue<number>()
  const node1 = new Node(1)
  const node2 = new Node(2)
  const node3 = new Node(3)

  it("Queue is initalized", () => {
    expect(queue.head).toBeNull()
  })

  it("Check if queue is Empty", () => {
    expect(queue.length).toBe(0)
    expect(queue.isEmpty()).toBe(true)
  })

  it("Dequeueing empty queue", () => {
    try {
      queue.dequeue()
    } catch (error) {
      expect(error.message).toBe("Underflow")
    }
  })

  it("Enqueue a new element", () => {
    // Insert when empty
    node1.priority = 2
    queue.enqueue(node1)
    expect(queue.head).toBe(node1)

    // Insert node with higher prioirty
    node2.priority = 3
    queue.enqueue(node2)
    expect(queue.head).toBe(node2)
    expect(queue.head.next).toBe(node1)

    // Insert node with lesser priority
    node3.priority = 1
    queue.enqueue(node3)
    expect(queue.head).toBe(node2)
    expect(queue.head.next).toBe(node1)
    expect(queue.head.next.next).toBe(node3)
  })

  it("Lenght of queue", () => {
    expect(queue.length).toBe(3)
  })

  it("Dequeue an element", () => {
    // head -> node2 -> node1 -> node3 -> null
    expect(queue.dequeue()).toBe(node2)
    expect(queue.head).toBe(node1)

    expect(queue.dequeue()).toBe(node1)
    expect(queue.head).toBe(node3)

    expect(queue.dequeue()).toBe(node3)
    expect(queue.head).toBe(null)
  })
})
