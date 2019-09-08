import Stack from "."

describe("Testing Array Stack", () => {
  const stack = new Stack<number>()

  it("Stack is initalized", () => {
    expect(stack.items).toStrictEqual([])
    expect(stack.top).toBe(-1)
  })

  it("Check if is Empty", () => {
    expect(stack.isEmpty()).toBe(true)
  })

  it("Popping empty stack", () => {
    try {
      stack.pop()
    } catch (error) {
      expect(error.message).toBe("Underflow")
    }
  })

  it("Push a new element", () => {
    stack.push(1)
    expect(stack.items).toStrictEqual([1])
    expect(stack.top).toBe(0)

    stack.push(2)
    expect(stack.items).toStrictEqual([1, 2])
    expect(stack.top).toBe(1)
  })

  it("Pop an element", () => {
    stack.push(3)
    expect(stack.items).toStrictEqual([1, 2, 3])
    expect(stack.top).toBe(2)

    const popped = stack.pop()
    expect(popped).toBe(3)
    expect(stack.top).toBe(1)
  })

  it("Print stack elements", () => {
    // Mock console.log
    const spy = jest.spyOn(console, "log").mockImplementation(() => {})
    stack.print()

    const { calls } = spy.mock
    expect(calls.length).toBe(1)
    expect(calls[0][0]).toBe("TOP -> 2 -> 1 -> BOTTOM")
    spy.mockRestore()
  })
})

describe("Testing Sized Stack", () => {
  const stack = new Stack<string>(3)

  test("Sized stack is initialized", () => {
    expect(stack.isEmpty()).toBe(true)
    expect(stack.size).toBe(3)
    expect(stack.top).toBe(-1)
  })

  it("Popping empty stack", () => {
    try {
      stack.pop()
    } catch (error) {
      expect(error.message).toBe("Underflow")
    }
  })

  test("Push new elements", () => {
    stack.push("Alpha")
    stack.push("Beta")
    stack.push("Charlie")

    expect(stack.top).toBe(2)
    expect(stack.items).toStrictEqual(["Alpha", "Beta", "Charlie"])
  })

  test("Push when stack is full", () => {
    try {
      stack.push("Delta")
    } catch ({ message }) {
      expect(message).toBe("Overflow")
    }
  })
})
