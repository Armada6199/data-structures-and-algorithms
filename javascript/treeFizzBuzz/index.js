class Node {
    constructor(val, children = []) {
      this.val = val;
      this.children = children;
    }
  }
  
  class FizzBuzzTree {
     fizzBuzzTree(inputTree) {
      if (!inputTree) {
        return null;
      }
  
      const newRootVal = this.fizzBuzzValue(inputTree.val);
      const newChildren = inputTree.children.map((child) => this.fizzBuzzTree(child));
      return new Node(newRootVal, newChildren);
    }
    fizzBuzzValue(num) {
        if (num % 3 === 0 && num % 5 === 0) {
          return "FizzBuzz";
        } else if (num % 3 === 0) {
          return "Fizz";
        } else if (num % 5 === 0) {
          return "Buzz";
        } else {
          return num.toString();
        }
      }
  }
  
  const normalTree = new Node(15, [
    new Node(3, [new Node(9), new Node(10)]),
    new Node(5),
    new Node(7, [new Node(14)]),
  ]);
  
  const fizzBuzz = new FizzBuzzTree();
  
  const newTree = fizzBuzz.fizzBuzzTree(normalTree);

  