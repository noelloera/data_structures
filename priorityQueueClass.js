class priorityQueueClass {
  collection = [];
  print() {
    console.log(this.collection);
  }
  enqueue(value) {
    if (this.isEmpty()) {
      this.collection.push(value);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (value[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, value);
          added = true;
          break;
        } else {
          if (!added) {
            this.collection.push(value);
          }
        }
      }
    }
  }
  dequeue() {
    let value = this.collection.shift();
    return value[0];
  }
  front() {
    return this.collection[0][0];
  }
  size() {
    return this.collection.length;
  }
  isEmpty() {
    return this.collection.length === 0;
  }
}

//Input:
var pQueue = new priorityQueueClass();
pQueue.enqueue(["Beau Carnes", 2]);
pQueue.enqueue(["Quincy Larson", 3]);
pQueue.enqueue(["Ewa Mitulska-Wójcik", 1]);
pQueue.enqueue(["Briana Swift", 2]);
pQueue.print();
pQueue.dequeue();
console.log(pQueue.front());
pQueue.print();

/*Output:

*/
