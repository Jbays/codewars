let input1 = [1,4,2,8,7,9,3,10,14,16]

class Heap{
  constructor(){
    this.maxHeap = [];
  }

  insertNode(value){
    this.maxHeap.push(value);
    this.bubbleUp(this.maxHeap.length-1);
  }

  bubbleUp(index){
    while ( index > 0 ) {
      //get parent
      let parent = Math.floor((index+1)/2)-1;

      //if current is greater than parent
      if (this.maxHeap[index] > this.maxHeap[parent] ) {
        //swap current and parent values
        let temp = this.maxHeap[parent];
        this.maxHeap[parent] = this.maxHeap[index];
        this.maxHeap[index] = temp;
      }

      index = parent;
    }
  }

  bubbleDown(index,level){
    let leftChild = (index*level*2)+1;
    let rightChild = (index*level*2)+2;
    let leftIsLargestChild = false;
    
    //is left or right larger?
    if ( this.maxHeap[leftChild] > this.maxHeap[rightChild] ) {
      leftIsLargestChild = true;
    }
    
    //find the biggest child
    //iterate down that branch
    if ( leftIsLargestChild ) {
      if ( this.maxHeap[index] < this.maxHeap[leftChild] ){
        let temp = this.maxHeap[leftChild];
        this.maxHeap[leftChild] = this.maxHeap[index];
        this.maxHeap[index] = temp;
        return this.bubbleDown(leftChild,++level);  
      }
    } else {
      if ( this.maxHeap[index] < this.maxHeap[rightChild] ){
        let temp = this.maxHeap[rightChild];
        this.maxHeap[rightChild] = this.maxHeap[index];
        this.maxHeap[index] = temp;
        return this.bubbleDown(rightChild,++level);  
      }
    }
  }

  extractMax(){
    let max = this.maxHeap[0];

    this.maxHeap[0] = this.maxHeap.pop();
    this.bubbleDown(0,0);

    return max;
  }
}

let myHeap = new Heap();

for ( let i = 0; i < input1.length; i++ ) {
  myHeap.insertNode(input1[i]);  
}

let max = myHeap.extractMax();
console.log('this is max',max);
// console.log(myHeap.extractMax())
// console.log(myHeap.extractMax())
// console.log(myHeap.extractMax())
// console.log(myHeap.extractMax())

console.log(myHeap);

































// // const sort = { 
// //   heap: function (arr) {
// //     this.buildMaxHeap(arr);
// //     lastEl = arr.length -1;

// //     while ( lastEl > 0) {
// //       this.swap ( arr, 0, lastEl);
// //       this.heapify ( arr, 0, lastEl);
// //       lastEl --;
// //     }
// //     return arr;
// //   },

// //   buildMaxHeap: function (arr) {
// //     let i = Math.floor(arr.length /2 -1)
// //     while ( i >= 0) {
// //       this.heapify (arr, i, arr.length);
// //       i--;
// //     }
// //     return arr;
// //   },

// //   heapify: function (heap, i, max) {
// //     while ( i < max) {

// //       let index = i;
// //       let leftChild = i * 2 + 1;
// //       let rightChild = leftChild + 1;

// //       if (leftChild < max && heap[leftChild] > heap[index]) {
// //         index = leftChild;
// //       }

// //       if (leftChild < max && heap[leftChild] > heap[index]) {
// //         index = leftChild;
// //       }

// //       if (index == i) {
// //         return;
// //       }

// //       this.swap ( heap, i, index);
// //       i = index;
// //     };
// //   },

// //   swap: function (array, firstItemIndex, lastItemIndex) {
// //     let temp = array[firstItemIndex];
// //     array[firstItemIndex] = array[lastItemIndex];
// //     array[lastItemIndex] = temp;
// //   },
// // }


// // class heap{
// //   constructor(array){
// //     this.heap = array
// //   }
// // }



// // // heap(input1);

// // // function heap(array){
// // //   let heap = buildMaxHeap(array);
// // //   let lastElemIndex = array.length-1;

// // //   while ( lastElemIndex > 0 ) {
// // //     swap(heap,0,lastElemIndex);
// // //     heapify(heap,0,lastElemIndex);
// // //     lastElemIndex--;
// // //   }

// // //   console.log('this is heap',heap);
// // //   return heap;

// // //   function buildMaxHeap(array){
// // //     let i = Math.floor((array.length/2)-1);

// // //     while ( i >= 0 ) {
// // //       heapify(array,i,array.length);
// // //       i--;
// // //     }
// // //     return array;
// // //   } 

// // //   function heapify(heap, index, maxLength){
// // //     while ( index < maxLength ) {
// // //       let thisIndex = index;
// // //       let leftChild = index*2+1;
// // //       let rightChild = index*2+2;

// // //       if ( leftChild < maxLength && heap[leftChild] > heap[index] ){
// // //         thisIndex = leftChild;
// // //       }

// // //       if ( rightChild < maxLength && heap[rightChild] > heap[index] ){
// // //         thisIndex = rightChild;
// // //       }

// // //       if ( thisIndex === index ){
// // //         return 
// // //       }

// // //       swap(heap,index,thisIndex);
// // //       index = thisIndex;
// // //     }
    
// // //     return heap;
// // //   }

// // //   function swap(array,firstItemIndex,secondItemIndex){
// // //     let temp = array[firstItemIndex];
// // //     array[firstItemIndex] = array[secondItemIndex];
// // //     array[secondItemIndex] = temp;
// // //   }

// // // }

