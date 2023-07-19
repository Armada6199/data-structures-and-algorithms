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
  checkBrackets(){
    let current=this.front;
    const counter={
      '[':0,
      ']':0,
      '{':0,
      '}':0,
      '(':0,
      ')':0};
    while(current){
      switch(current.value){
        case '[':{
          counter['[']++;
          break;
        }
        case ']':{
          counter[']']++;
          break;
        }
        case '(':{
          counter['(']++;
          break;
        }
        case ')':{
          counter[')']++;
          break;
        }
        case '{':{
          counter['{']++;
          break;
        }
        case '}':{
          counter['}']++;
          break;
        }
      }
      current=current.next;
    }
    if(counter['[']==counter[']'|counter['{']==counter['}']]|counter['(']==counter[')']) return true;
    else return false;
  }
}

const linked1 = new LinkedList();
linked1.enqueue('(');
console.log(linked1.checkBrackets());
module.exports = {LinkedList,Node};
