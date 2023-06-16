'use strict';

class Node {
  constructor(data,next=null){
    this.data=data;
    this.next=next;
}
}
class LinkedList {
  constructor(){
    this.head=null;
    this.size=0;
  }
  insertHead(data){
    this.head=new Node(data,this.head);
    this.size++;
  }
  insertTail(data){
    let current =this.head;
    while (current.next){
      current=current.next;
    }
    current.next=new Node(data);
  }
  insertAt(data,index){
    let current=this.head;
    while (index>1){
      current=current.next;
      index--;
    }
    current.next=new Node(data,current.next);
    this.size++;
  }
  removeAt(index){
    if(index<this.size){
      let current=this.head;
      while (index>1){
        current=current.next;
        index--;
      }
      this.size--;
      current.next=current.next.next;
    }else return 'Sorry the provided index is bigger than the linkedlist size';
  }

  printAllData(){
    let current=this.head;
    let allNodes=``;
    while (current){
      allNodes+=`{${current.data}}->`;
      current=current.next;
    }
    return allNodes+'NULL';
  }


  includes(value){
    let current=this.head;
    while (current.next){
      if(current.data===value) return true;
      current=current.next;
    }
    return false;

  }
  getHead(){
    return this.head;
  }
  getSize(){
    return this.size;
  }
  clearList(){
    this.head.next=null;
    this.head=null;
  }
}
const linked1=new LinkedList();
linked1.insertHead(300);
linked1.insertHead(200);
linked1.insertHead(100);
linked1.insertTail(400);
linked1.insertAt(600,2);
console.log(linked1.printAllData());

module.exports = LinkedList;
