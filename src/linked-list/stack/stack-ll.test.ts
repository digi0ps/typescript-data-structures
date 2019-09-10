import Stack from "."
import Node from "../node"

describe("Testing LinkedList Stack", () => {
  const stack = new Stack<number>()
  const node1 = new Node(1)
  const node2 = new Node(2)
  const node3 = new Node(3)

  test("Stack is initalized", () => {
    expect(stack.top).toBeNull()
    expect(stack.size).toBeFalsy()
  })

  test("Check if is Empty", () => {
    expect(stack.isEmpty()).toBe(true)
    expect(stack.length).toBe(0)
  })

  test("Popping empty stack", () => {
    try {
      stack.pop()
    } catch (error) {
      expect(error.message).toBe("Underflow")
    }
  })

  test("Push a new element", () => {
    stack.push(node1)
    expect(stack.top).toBe(node1)
    expect(stack.isEmpty()).toBeFalsy()

    stack.push(node2)
    expect(stack.top).toBe(node2)
    expect(stack.top.next).toBe(node1)
  })

  test("Lenght of Stack", () => {
    expect(stack.length).toBe(2)
  })

  test("Pop an element", () => {
    stack.push(node3)
    expect(stack.top).toBe(node3)
    expect(stack.top.next).toBe(node2)

    const popped = stack.pop()
    expect(popped).toBe(node3)
    expect(stack.top).toBe(node2)
  })
})

describe("Testing Sized Stack", () => {
  const stack = new Stack<string>(3)
  const node1 = new Node("Alpha")
  const node2 = new Node("Beta")
  const node3 = new Node("Charlie")

  test("Sized stack is initialized", () => {
    expect(stack.isEmpty()).toBe(true)
    expect(stack.size).toBe(3)
    expect(stack.top).toBeNull()
  })

  test("Popping empty stack", () => {
    try {
      stack.pop()
    } catch (error) {
      expect(error.message).toBe("Underflow")
    }
  })

  test("Push new elements", () => {
    stack.push(node1)
    stack.push(node2)
    stack.push(node3)

    expect(stack.top).toBe(node3)
    expect(stack.length).toBe(3)
  })

  test("Push when stack is full", () => {
    try {
      stack.push(new Node("Delta"))
    } catch ({ message }) {
      expect(message).toBe("Overflow")
    }
  })
})
