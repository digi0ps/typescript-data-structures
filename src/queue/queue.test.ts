import Queue from "./"

describe("Testing Queue implemented using Array", () => {
  const queue = new Queue<string>()

  it("Queue is initalized", () => {
    expect(queue.items).toStrictEqual([])
    expect(queue.head).toBe(0)
    expect(queue.tail).toBe(0)
  })

  it("Check if queue is Empty", () => {
    expect(queue.isEmpty()).toBe(true)
  })

  it("Enqueue a new element", () => {
    queue.enqueue("Alpha")
    expect(queue.tail).toBe(1)
    expect(queue.head).toBe(0)

    queue.enqueue("Beta")
    expect(queue.tail).toBe(2)
    expect(queue.head).toBe(0)

    expect(queue.items).toStrictEqual(["Alpha", "Beta"])
  })

  it("Dequeue an element", () => {
    const deleted = queue.dequeue()

    expect(deleted).toBe("Alpha")
    expect(queue.head).toBe(1)
    expect(queue.tail).toBe(2)
  })
})
