import Stack from "./stack"

describe("Testing Stack implemented using Array", () => {
  const stack = new Stack<number>()

  it("Stack is initalized", () => {
    expect(stack.items).toStrictEqual([])
  })

  it("Push a new element", () => {
    stack.push(1)
    expect(stack.items).toStrictEqual([1])

    stack.push(2)
    expect(stack.items).toStrictEqual([1, 2])
  })

  it("Pop an element", () => {
    stack.push(3)
    expect(stack.items).toStrictEqual([1, 2, 3])

    const popped = stack.pop()
    expect(popped).toBe(3)
    expect(stack.items).toStrictEqual([1, 2])
  })
})
