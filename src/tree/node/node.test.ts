import Node from "."

describe("Testing Tree Node", () => {
  const node = new Node<string>("Alpha")

  it("Checking .data attribute", () => {
    expect(node.key).toBe("Alpha")
  })

  it("Checking prev and next attributes", () => {
    expect(node.left).toBeNull()
    expect(node.right).toBeNull()
    expect(node.parent).toBeNull()
  })
})
