/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);
    // if empty queue
    if (this.first === null && this.last === null) {
      this.first = newNode;
      this.last = newNode;
      this.size += 1;
      return undefined;
    }
    // if 1 node in queue
    if (this.first && this.last === this.first) {
      this.first.next = newNode;
      this.last = newNode;
      this.size += 1;
      return undefined;
    }

    this.last.next = newNode;
    this.last = newNode;
    this.size += 1;
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    try {
      if (this.size === 0) {throw new Error}
      if (this.size === 1) {this.last = null;}
      const toReturn = this.first.val;
      this.first = this.first.next
      this.size -= 1;
      return toReturn;
    } catch (err) {
      throw err
    }

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    try {
      return this.first.val
    } catch (err) {
      return "Error"
    }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.first) {return false}
    return true
  }
}

module.exports = Queue;
