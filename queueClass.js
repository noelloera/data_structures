class queueClass {
  collection = [];

  print() {
    console.log(this.collection);
  }

  enqueue(value) {
    this.collection.push(value);
  }
  dequeue() {
    return this.collection.shift();
  }
  front() {
    return this.collection[0];
  }
  size() {
    return this.collection.length;
  }
  isEmpty() {
    return this.collection.length === 0;
  }
}

//Inputs:
var queue = new queueClass();
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
