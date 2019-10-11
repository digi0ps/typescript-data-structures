import Node from "../node"
import BinaryTree from "."

describe("Testing Binary Tree", () => {
  const node1 = new Node(1)
  const node2 = new Node(2)
  const node3 = new Node(3)
  const node4 = new Node(4)
  const node5 = new Node(5)
  const node6 = new Node(6)
  const node7 = new Node(7)
  const node8 = new Node(8)

  const binarytree = new BinaryTree<number>()
  /*
  Setting up the tree like
           1
        2     3
      4  5   6  7
  */
  node1.left = node2
  node1.right = node3
  node2.left = node4
  node2.right = node5
  node3.left = node6
  node3.right = node7

  test("Initial state of a BST", () => {
    expect(binarytree.root).toBeNull()
    binarytree.root = node1
  })

  // Utils to test console messages
  const consoleArr: string[] = []

  const spy = jest.spyOn(console, "log").mockImplementation(msg => {
    consoleArr.push(msg)
  })

  const flushConsole = () => {
    while (consoleArr.length) {
      consoleArr.pop()
    }
  }

  const getConsoleString = () => consoleArr.join(" ")

  test("PreOrder", () => {
    flushConsole()

    binarytree.preorder(binarytree.root)
    const expected = "1 2 4 5 3 6 7"

    expect(getConsoleString()).toBe(expected)
  })

  test("InOrder", () => {
    flushConsole()

    binarytree.inorder(binarytree.root)
    const expected = "4 2 5 1 6 3 7"

    expect(getConsoleString()).toBe(expected)
  })

  test("PostOrder", () => {
    flushConsole()

    binarytree.postorder(binarytree.root)
    const expected = "4 5 2 6 7 3 1"

    expect(getConsoleString()).toBe(expected)
  })

  test("Breadth First Traversal", () => {
    flushConsole()

    binarytree.breathFirstTraversal()
    const expected = "1 2 3 4 5 6 7"
    expect(getConsoleString()).toBe(expected)
  })

  test("Breadth First Traversal", () => {
    flushConsole()

    binarytree.depthFirstTraversal()
    const expected = "1 3 7 6 2 5 4"
    expect(getConsoleString()).toBe(expected)
  })

  test("Height", () => {
    expect(binarytree.height(null)).toBe(0)

    expect(binarytree.height(binarytree.root)).toBe(3)

    node7.left = node8
    expect(binarytree.height(binarytree.root)).toBe(4)

    expect(binarytree.height(node5)).toBe(1)
  })
})
