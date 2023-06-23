'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  const testLinked=new LinkedList();
  it('testing inserting an element ',()=>{
    testLinked.insertHead(100);
    expect(testLinked.printAllData()).toEqual(`{100}->NULL`);
  });
  it('testing the head',()=>{
    testLinked.insertHead(200);
    expect(testLinked.getHead().data).toEqual(200);
  });
  it('testing insert multiple nodes',()=>{
    testLinked.insertHead(100);
    testLinked.insertHead(200);
    testLinked.insertHead(300);
    expect(testLinked.getSize()).toBe(5);//size
  });
});
