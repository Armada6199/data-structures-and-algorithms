Of course! Here's a shorter version of the documentation for the Merge Sort algorithm in Markdown format:

```markdown
# Merge Sort Algorithm Documentation

## Introduction

Merge Sort is a divide-and-conquer sorting algorithm that efficiently sorts arrays by breaking them into smaller halves, sorting them, and then merging them back together.

## Algorithm

```javascript
class MergeSort {
    constructor(array) {
      this.array = array;
    }

    merge(left, right) {
      // Merge two sorted arrays
      // ...

      return result;
    }

    sort(arr = this.array) {
      // Recursive merge sort
      // ...

      return mergedArray;
    }
}

// Example usage
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const mergeSort = new MergeSort(unsortedArray);
const sortedArray = mergeSort.sort();
console.log(sortedArray);
```

### Explanation

1. The `MergeSort` class has methods for sorting an array using the merge sort algorithm.

2. The `merge` function combines two sorted arrays into one sorted array.

3. The `sort` method uses recursion to divide and sort the array, then merges the sorted parts.

## Example

Input: [64, 34, 25, 12, 22, 11, 90]
Output: [11, 12, 22, 25, 34, 64, 90]

