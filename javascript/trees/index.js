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
    add(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(current){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
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

}
const sixth=new Node(32);
const fifth=new Node(27);
const fourth=new Node(30,fifth,sixth);
const third=new Node(12);
const second =new Node(15,third);
const first=new Node(25,second,fourth);
const tree=new Tree(first);
const binaryTree=new BinaryTree(first);
console.log(binaryTree.preOrder());
module.exports={
    Node,
    Tree,
    BinaryTree
}