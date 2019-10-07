import Node from "../node"
import BST from "."

describe("Testing Binary Search Tree", () => {
  const node1 = new Node(5)
  const node2 = new Node(3)
  const node3 = new Node(7)
  const node4 = new Node(8)
  const node5 = new Node(1)

  const bst = new BST<number>()

  test("Initial state of a BST", () => {
    expect(bst.root).toBeNull()
  })

  test("Insertion", () => {
    bst.insert(node1)
    expect(bst.root).toBe(node1)

    bst.insert(node2)
    expect(bst.root.left).toBe(node2)

    bst.insert(node3)
    expect(bst.root.right).toBe(node3)

    bst.insert(node4)
    expect(bst.root.right.right).toBe(node4)

    bst.insert(node5)
    expect(bst.root.left.left).toBe(node5)
  })

  test("Searching", () => {
    expect(bst.search(5)).toBe(bst.root)

    expect(bst.search(8)).toBe(node4)

    expect(bst.search(99)).toBeNull()
  })

  test("Minimum", () => {
    // Full Tree
    expect(bst.minimum(bst.root)).toBe(1)

    // Right Sub Tree
    expect(bst.minimum(bst.root.right)).toBe(7)

    expect(bst.minimum(null)).toBe(null)
  })

  test("Maximum", () => {
    // Full Tree
    expect(bst.maximum(bst.root)).toBe(8)

    // Left Sub Tree
    expect(bst.maximum(bst.root.left)).toBe(3)

    expect(bst.maximum(null)).toBe(null)
  })
})
