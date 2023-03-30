class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Utility Functions:

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (this.isEmpty() || this.head === null) {
      return "List Is Empty";
    } else {
      let current = this.head;
      let list = "";
      while (current) {
        list += `${current.value} `;
        current = current.next;
      }
      console.log(list);
    }
  }

  prepend(value) {
    // add element in start
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append() {}

  remove() {}

  reverse() {}

  search() {}
}

// Create Fresh Link List Object

let list = new LinkList();

// add value in start in the link list
list.prepend(20);

// Print Link List
list.print();

list.prepend(30);
list.prepend(50);
list.prepend(70);
list.prepend(90);
list.prepend(40);
list.prepend(60);
// console.log(list);
list.print();
