
```markdown
# Insertion Sort Algorithm Documentation

## Introduction

Insertion Sort is a simple algorithm that sorts an array by iteratively placing each element in its correct position within the sorted portion of the array.

## Algorithm

```function insertionSort(arr):
    for i from 1 to length(arr):
        currentElement = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > currentElement:
            arr[j + 1] = arr[j]
            j = j - 1
        arr[j + 1] = currentElement
```

### Explanation

1. The `insertionSort` function takes an array `arr` as input and sorts it in ascending order.

2. The algorithm starts from the second element (index 1) and iterates through the array.

3. For each element, it saves the current element (`currentElement`) and compares it with the elements in the sorted portion of the array.

4. The inner loop (`while` loop) shifts elements in the sorted portion to the right until the correct position for `currentElement` is found.

5. Once the correct position is found, `currentElement` is placed in that position.

## Example

Input: [5, 2, 9, 1, 5]

1. Start with [5, 2, 9, 1, 5]
2. Pass 1: [2, 5, 9, 1, 5]
3. Pass 2: [2, 5, 9, 1, 5]
4. Pass 3: [1, 2, 5, 9, 5]
5. Pass 4: [1, 2, 5, 5, 9]

The final sorted array is [1, 2, 5, 5, 9].
