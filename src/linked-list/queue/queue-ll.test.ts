import Queue from "."
import Node from "../node"

describe("Testing LinkedList Queue", () => {
  const queue = new Queue<number>()
  const node1 = new Node(1)
  const node2 = new Node(2)
  const node3 = new Node(3)

  it("Queue is initalized", () => {
    expect(queue.head).toBeNull()
    expect(queue.tail).toBeNull()
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
    queue.enqueue(node1)
    expect(queue.tail).toBe(node1)
    expect(queue.head).toBe(node1)

    queue.enqueue(node2)
    expect(queue.tail).toBe(node2)
    expect(queue.head).toBe(node1)
  })

  it("Lenght of queue", () => {
    expect(queue.length).toBe(2)
  })

  it("Dequeue an element", () => {
    const deleted = queue.dequeue()

    expect(deleted).toBe(node1)
    expect(queue.head).toBe(node2)
    expect(queue.tail).toBe(node2)

    queue.dequeue()
    expect(queue.head).toBeNull()
    expect(queue.tail).toBeNull()
  })
})

describe("Testing Sized Queue LL", () => {
  const queue = new Queue<string>(3)
  const node1 = new Node("Alpha")
  const node2 = new Node("Beta")
  const node3 = new Node("Charlie")

  test("Sized queue is initialized", () => {
    expect(queue.isEmpty()).toBe(true)
    expect(queue.size).toBe(3)
    expect(queue.head).toBeNull()
    expect(queue.tail).toBeNull()
  })

  test("Enqueue new elements", () => {
    queue.enqueue(node1)
    queue.enqueue(node2)
    queue.enqueue(node3)

    expect(queue.head).toBe(node1)
    expect(queue.tail).toBe(node3)
    expect(queue.length).toBe(3)
  })

  test("Enqueue when queue is full", () => {
    try {
      queue.enqueue(new Node("Delta"))
    } catch ({ message }) {
      expect(message).toBe("Overflow")
    }
  })
})
