
class Node{
  constructor(value,next=null){
    this.value=value;
    this.next=next;
  }
}

class LinkedList{
  constructor(){
    this.top=null;
    this.size=0;
  }
  isEmpty(){
    return this.top?false:true;
  }
  push(value){
    if(this.isEmpty()){
      const newNode=new Node(value);
      this.top=newNode;
      this.size++;
    }else {
      const newNode=new Node(value,this.top);
      this.top=newNode;
      this.size++;
    }
  }
  pop(){
    if(this.isEmpty()) return 'stack is empty';
    const temp=this.top;
    this.top=temp.next;
    temp.next=null;
    this.size--;
    return temp.value;
  }
  peek(){
    if(this.isEmpty()) return 'stack is empty';
    return this.top;
  }
  printData(){
    let current=this.top;
    while(current){
      console.log(current);
      current=current.next;
    }
  }
}
const linked1=new LinkedList();
linked1.push(1);
linked1.push(2);
linked1.push(3);
console.log(linked1.pop());
module.exports=LinkedList;
