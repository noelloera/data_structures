/*
*Queues share the array properties with the exceptoin that it is a first
 come first serve basis, similar to a line in front of a cashier.
 *Javascript does not have a queue object
 */

let queueFunction = function () {
  this.collection = [];
  //Helper function to display elememts
  this.print = function () {
    console.log(collection);
  };
  //Push will always push to the top of array
  this.enqueue = function (value) {
    collection.push(value);
  };
  //Shift will remove and return the oldest/ first array
  this.dequeue = function () {
    return collection.shift();
  };
  //Returns the object at position [o] "first in line"
  this.front = function () {
    return collection[0];
  };
  //Returns the total amount of objects found in the queue/line
  this.size = function () {
    return collection.length;
  };
  //Returns boolean if the total amount of objects in line is 0
  this.isEmpty = function () {
    return collection.length === 0;
  };
};

//Inputs:
var queue = new queueFunction();
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.print();
queue.dequeue();
console.log(queue.front());
queue.print();

/*Outputs:

*[ 'a', 'b', 'c' ]
*  b
*[ 'b', 'c' ]

*/
