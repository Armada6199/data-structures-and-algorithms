const insertionSort = require('./index'); 

describe('insertionSort', () => {
  it('should sort an array with positive integers', () => {
    const arr = [3, 1, 4, 2, 5];
    insertionSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort an array with negative integers', () => {
    const arr = [-5, -2, -8, -1, -3];
    insertionSort(arr);
    expect(arr).toEqual([-8, -5, -3, -2, -1]);
  });

  it('should sort an already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    insertionSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort an array with duplicate elements', () => {
    const arr = [5, 2, 3, 2, 1];
    insertionSort(arr);
    expect(arr).toEqual([1, 2, 2, 3, 5]);
  });

  it('should sort an empty array', () => {
    const arr = [];
    insertionSort(arr);
    expect(arr).toEqual([]);
  });

  it('should sort an array with a single element', () => {
    const arr = [42];
    insertionSort(arr);
    expect(arr).toEqual([42]);
  });
});
