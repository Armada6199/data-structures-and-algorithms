class InsertionSort {
    static sort(array) {
      const length = array.length;
  
      for (let i = 1; i < length; i++) {
        const currentElement = array[i];
        let j = i - 1;
  
        while (j >= 0 && array[j] > currentElement) {
          array[j + 1] = array[j];
          j--;
        }
  
        array[j + 1] = currentElement;
      }
  ///fsd
      return array;
    }
  }
  