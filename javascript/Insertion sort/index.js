function insertionSort(arr){
  for(let i=0;i<arr.length;i++){
    const min=i;
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]<arr[min]){
        min=j;
      }
    }
    const temp=arr[min];
    arr[min]=arr[i];
    arr[i]=temp;
  }
}
