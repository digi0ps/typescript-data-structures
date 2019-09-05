/**
 * Stack Array
 */

import Stack from "./stack"

const stack = new Stack<number>()

stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
stack.push(4)
stack.print()
