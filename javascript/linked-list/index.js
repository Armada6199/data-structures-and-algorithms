
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
    this.size++;
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
  insertBefore(value, targetValue) {
    if (!this.head) {
      return;
    }
    if (this.head.value === targetValue) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === targetValue) {
        const newNode = new Node(value);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  insertAfter(value, targetValue) {
    if (!this.head) {
      return;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === targetValue) {
        const newNode = new Node(value);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next;
    }
  }
  nthFromTail(num){
    const size=this.getSize();
    let iterations=size-num;
    let current=this.head;
    while(iterations>1){
      current=current.next;
      iterations--;
    }
    return current;
  }
  zipLists(list1,list2){
    if (!list1) {
      return list2;
    }
  
    if (!list2) {
      return list1;
    }
  
    let curr1 = list1;
    let curr2 = list2;
    let result = null;
    let currResult = null;
  
    while (curr1 && curr2) {
      if (!result) {
        result = curr1;
        currResult = result;
      } else {
        currResult.next = curr1;
        currResult = currResult.next;
      }
  
      curr1 = curr1.next;
  
      currResult.next = curr2;
      currResult = currResult.next;
  
      curr2 = curr2.next;
    }
  
    if (curr1) {
      currResult.next = curr1;
    } else if (curr2) {
      currResult.next = curr2;
    }
  
    return result;
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
linked1.insertHead(1);
linked1.insertHead(2);
linked1.insertHead(3);
linked1.insertTail(4);
linked1.insertTail(5);
linked1.insertTail(6);
linked1.insertTail(7);
linked1.insertTail(8);
linked1.insertTail(9);

console.log(linked1.nthFromTail(3));

module.exports = {LinkedList,Node};

