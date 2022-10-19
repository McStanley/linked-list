export default class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let pointer = this.head;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }

    pointer.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  getSize() {
    let pointer = this.head;
    let count = 0;

    while (pointer) {
      count++;
      pointer = pointer.nextNode;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let pointer = this.head;

    while (pointer?.nextNode) {
      pointer = pointer.nextNode;
    }

    return pointer;
  }

  at(index) {
    let pointer = this.head;
    let count = 0;

    while (pointer) {
      if (count !== index) {
        pointer = pointer.nextNode;
        count++;
        continue;
      }

      return pointer;
    }

    throw new Error('Could not retrieve a node at the given index');
  }

  pop() {
    if (this.head === null) return;
    if (!this.head.nextNode) {
      this.head = null;
      return;
    }

    let pointer = this.head;
    let nextPointer = pointer.nextNode;

    while (nextPointer.nextNode) {
      pointer = nextPointer;
      nextPointer = nextPointer.nextNode;
    }

    pointer.nextNode = null;
  }

  contains(value) {
    let pointer = this.head;

    while (pointer) {
      if (pointer.value === value) return true;

      pointer = pointer.nextNode;
    }

    return false;
  }

  find(value) {
    let pointer = this.head;
    let index = 0;

    while (pointer) {
      if (pointer.value === value) return index;

      pointer = pointer.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    let pointer = this.head;
    let output = '';

    while (pointer) {
      output += `( ${pointer.value} ) -> `;
      pointer = pointer.nextNode;
    }

    output += 'null';

    return output;
  }

  insertAt(value, index) {
    let lastPointer = null;
    let pointer = this.head;
    let count = 0;

    while (pointer || lastPointer) {
      if (count !== index) {
        lastPointer = pointer;
        pointer = pointer?.nextNode;
        count++;
        continue;
      }

      const newNode = new Node(value, pointer);
      lastPointer ? (lastPointer.nextNode = newNode) : (this.head = newNode);

      return;
    }

    throw new Error('Could not insert a node at the given index.');
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }

    let lastPointer = null;
    let pointer = this.head;
    let count = 0;

    while (pointer) {
      if (count !== index) {
        lastPointer = pointer;
        pointer = pointer.nextNode;
        count++;
        continue;
      }

      index === 0
        ? (this.head = this.head.nextNode)
        : (lastPointer.nextNode = pointer.nextNode);

      return;
    }

    throw new Error('Could not remove a node at the given index.');
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
