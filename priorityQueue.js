let priorityQueueFunction = function () {
  this.collection = [];
  this.print = function () {
    console.log(this.collection);
  };
  this.enqueue = function (value) {
    if (this.isEmpty()) {
      this.collection.push(value);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        //Because the priority value is at index 1 not 0
        if (value[1] < this.collection[i][1]) {
          //value priortity less spliced at collections index
          this.collection.splice(i, 0, value);
          added = true;
          break;
        }
      }
      if (!added) {
        //added at the end index, priority too high
        this.collection.push(value);
      }
    }
  };

  this.dequeue = function () {
    //Returns only the value at index 1 of the dequeued element
    let value = this.collection.shift();
    return value[0];
  };
  this.front = function () {
    return this.collection[0][0];
  };
  this.size = function () {
    return this.collection.length;
  };
  this.isEmpty = function () {
    return this.collection.length === 0;
  };
};

//Input:
var pQueue = new priorityQueueFunction();
pQueue.enqueue(["Beau Carnes", 2]);
pQueue.enqueue(["Quincy Larson", 3]);
pQueue.enqueue(["Ewa Mitulska-Wójcik", 1]);
pQueue.enqueue(["Briana Swift", 2]);
pQueue.print();
pQueue.dequeue();
console.log(pQueue.front());
pQueue.print();

/*Output:
* [
  [ 'Ewa Mitulska-Wójcik', 1 ],
  [ 'Beau Carnes', 2 ],
  [ 'Briana Swift', 2 ],
  [ 'Quincy Larson', 3 ]
]
* Beau Carnes
* [ [ 'Beau Carnes', 2 ], [ 'Briana Swift', 2 ], [ 'Quincy Larson', 3 ] ]
*/