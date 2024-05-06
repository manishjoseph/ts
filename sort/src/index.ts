//Problem Statement: Sort number array  or string or linked list in a generic way. Iterative way

import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

//Approach 1
// 1st step : Find the Bubble sort solution for number array.
//2nd step: try to make it generic to string using Union operator, typeof & instanceof

//Approach 2
// 1st step: Create a generic sort class with a method to swap & a method to compare.
//2. Create separate implementations of sort class for numbers, string & linked list

//Approach 3
//1st step : Interfaces & Abstract classes

const numbersCollection = new NumbersCollection([100, 3, -5, 50]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Xaayb");
charactersCollection.sort();
console.log(charactersCollection.data);

const newLinkedList = new LinkedList();
newLinkedList.add(500);
newLinkedList.add(-3);
newLinkedList.add(-4);
newLinkedList.add(10);

newLinkedList.sort();
newLinkedList.print();
