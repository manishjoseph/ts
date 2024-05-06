"use strict";
//Problem Statement: Sort number array  or string or linked list in a generic way. Iterative way
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const NumbersCollection_1 = require("./NumbersCollection");
//Approach 1
// 1st step : Find the Bubble sort solution for number array.
//2nd step: try to make it generic to string using Union operator, typeof & instanceof
//Approach 2
// 1st step: Create a generic sort class with a method to swap & a method to compare.
//2. Create separate implementations of sort class for numbers, string & linked list
//Approach 3
//1st step : Interfaces & Abstract classes
const numbersCollection = new NumbersCollection_1.NumbersCollection([100, 3, -5, 50]);
numbersCollection.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection("Xaayb");
charactersCollection.sort();
console.log(charactersCollection.data);
const newLinkedList = new LinkedList_1.LinkedList();
newLinkedList.add(500);
newLinkedList.add(-3);
newLinkedList.add(-4);
newLinkedList.add(10);
newLinkedList.sort();
newLinkedList.print();
