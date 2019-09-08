import Node from "."

describe("Testing Node", () => {
  const node = new Node("Alpha")

  it("Checking .data attribute", () => {
    expect(node.data).toBe("Alpha")
  })

  it("Checking prev and next attributes", () => {
    expect(node.next).toBeNull()
    expect(node.prev).toBeNull()
  })
})
