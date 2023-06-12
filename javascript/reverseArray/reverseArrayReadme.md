# Reverse Array

## problem domain

> you have an array and you need to reverse it without using any built in methods and in a clean and well strucutred way

## algorithim

>create a function that accepts an array as an parameter

>make a new empty array to push the elements in reverse to

>loop into the array from the last index to the first index

>on each iteration push the element to the new array

>return the new array


## Test Cases

### Given [1,2,3,4,5,6]=====>[6,5,4,3,2,1]

### Given [55,33,21,2,3,5,6] =====>[6,5,3,2,21,33,55]

## Given [0]=====>[0]


## Pseudo Code 

Algorith reverseArray (array)

const newArray=[]

 let newArr=[]\
  for (let i=arr.length-1;i>=0;i--)\
    newArr.push(arr[i])\
  return newArr


  ## walkthrough & Big-O
arr=[2,3,4,5,6]\
newArr=[]\
1-newArr=[6]\
2-newArr=[6,5]\
3-newArr=[6,5,4]\
4-newArr=[6,5,4,3]\
5-newArr=[6,5,4,3,2]

### Big-O
> Time complexity is O(N),Space Allocation is O(n)
