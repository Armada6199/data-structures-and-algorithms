class Node{
    constructor(value,left=null,right=null){
        this.value=value;
        this.right=right;
        this.left=left;
    }
}
class Tree{
    constructor(root){
        this.root=root
    }
    preOrder(){
        if(!this.root) return 'Tree Is Empty';
    const arr=[];
    const traversal=node=>{
        arr.push(node.value);
        if(node.left) traversal(node.left);
        if(node.right) traversal(node.right);
    }
    traversal(this.root);
    return arr;
    }
    inOrder(){
        if(!this.root) return 'Tree Is Empty';
        const arr=[];
        const traversal=node=>{
            if(node.left) traversal(node.left);
            arr.push(node.value);
            if(node.right) traversal(node.right);
        }
        traversal(this.root);
        return arr;

    }
    postOrder(){
        if(!this.root) return 'Tree Is Empty';
        const arr=[];
        const traversal=node=>{
            if(node.left) traversal(node.left);
            if(node.right) traversal(node.right);
            arr.push(node.value);
        }
        traversal(this.root);
        return arr;

    }
  

}
class BinaryTree extends Tree{
    constructor(root){
        super(root)
    }
    add(root=this.root,value){
        if(root.value>value){
            if(root.left!==null){
                this.add(root.left,value);
            }else root.left=new Node(value);
        }else {
            if(root.right!==null){
                this.add(root.right,value);
            }else root.right=new Node(value);
        }
        return 'Inserted';
    }
    contains(value){
        if(!this.root) return false
      
        let current = this.root
        let found = false
        while(current && !found){
              if(value < current.value){
                current = current.left
               } else if(value > current.value){
                  current = current.right
               } else {
                    found = current
               } 
              
              }
      
          if(!found) return undefined;
          return found;
    }
    isValidBST(root) {
       if(root.left){
        if(root.left>root.value) return false;
        this.isValidBST(root.left);
       };
       if(root.right){
        if(root.right.value<root.value) return false;
           this.isValidBST(root.right);
       };
       return true;
    };

}
length/2

root=arr[length/2]===20;
root.left=arr[length/2-1];
root.right=arr[length/2+1];



                   20
            10             43
           
         1      5                 60
      
      
[1,5,10,20,43,60];

function convertArray(arr){

}
const sixth=new Node(6);
const fifth=new Node(3);
const fourth=new Node(4,fifth,sixth);
// const third=new Node(12);
const second =new Node(1);
const first=new Node(25,second,fourth);
// const tree=new Tree(first);
const binaryTree=new BinaryTree(first);
// console.log(binaryTree.add(first,35))
// console.log(binaryTree.add(first,26))
// console.log(binaryTree.preOrder());
console.log(binaryTree.isValidBST(first));
module.exports={
    Node,
    Tree,
    BinaryTree
}