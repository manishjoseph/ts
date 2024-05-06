//Problem Statement: Sort number array  or string or linked list in a generic way. Iterative way

//Approach 1
// 1st step : Find the Bubble sort solution for number array.
//2nd step: try to make it generic to string using Union operator, typeof & instanceof

//Approach 2
// 1st step: Create a generic sort class with a method to swap & a method to compare.
//2. Create separate implementations of sort class for numbers, string & linked list

//Approach 3
//1st step : Interfaces
class SorterApproach1 {
  constructor(public collection: number[] | string) {}
  sort(): void {
    //Length destructuring wow
    const { length } = this.collection;
    //Bubble sort. Compare adjacent and swap

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // Without this line typescript assumes collection can be string or number array.
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }
      }
    }
    if (typeof this.collection === "string") {
    }
  }
}

const sorter1 = new Sorter([10, 3, -5, 0]);
sorter1.sort();
console.log(sorter1.collection);
