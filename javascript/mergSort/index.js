class MergeSort {
    constructor(array) {
      this.array = array;
    }
  
    merge(left, right) {
      let result = [];
      let leftIndex = 0;
      let rightIndex = 0;
  
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      }
  
      return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }
  
    sort(arr = this.array) {
      if (arr.length <= 1) {
        return arr;
      }
  
      const middle = Math.floor(arr.length / 2);
      const left = arr.slice(0, middle);
      const right = arr.slice(middle);
  
      return this.merge(this.sort(left), this.sort(right));
    }
  }
  
  // Example usage
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const mergeSort = new MergeSort(unsortedArray);
  const sortedArray = mergeSort.sort();
  console.log(sortedArray);
  