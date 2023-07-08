class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }
  isEmpty() {
    return this.front ? false : true;
  }
  dequeue() {
    if (this.isEmpty()) return "stack is empty";
    let temp = this.front;
    this.front = temp.next;
    temp.next = null;
    this.size--;
    return temp.value;
  }
  enqueue(value) {
    if (this.isEmpty()) {
      const newNode = new Node(value);
      this.front = newNode;
      this.back = newNode;
      this.size++;
    } else {
      const newNode = new Node(value);
      this.back.next = newNode;
      this.back = newNode;
      this.size++;
    }
  }
  peek() {
    if (this.isEmpty()) return "stack is Empty";
    return this.front;
  }
  printAllNodes() {
    let current = this.front;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}
const linked1 = new LinkedList();
linked1.enqueue(1);
linked1.enqueue(2);
linked1.enqueue(3);
console.log(linked1.printAllNodes());
module.exports=LinkedList;
