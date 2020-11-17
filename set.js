let mySet = function () {
  let collection = [];
  //Returns true or false based on condition
  this.has = function (value) {
    return collection.indexOf(value) !== -1;
  };
  //Adds value to collection if not present
  this.add = function (value) {
    if (!this.has(value)) {
      collection.push(value);
      return true;
    }
    return false;
  };
  //In the ES6 object this is delete
  this.remove = function (value) {
    if (this.has(value)) {
      index = collection.indexOf(value);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };
  //Size is a method in ES6 not a property
  this.size = function () {
    return collection.length;
  };
  //Returns each value in the set
  this.values = function () {
    return collection;
  };
  //These properties and methods are not included in the ES6 sets
  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = unionSet.values();
    firstSet.forEach((value) => {
      unionSet.add(value);
    });
    secondSet.forEach((value) => {
      unionSet.add(value);
    });
    return unionSet;
  };
  //Returns the intersecting values as a new set
  this.intersection = function (otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach((value) => {
      if (otherSet.has(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  };
  //Returns a set of differing values between sets
  this.difference = function (otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  };
};

class SetStructure {
  /*constructor() {
    this.collection = [];
  }*/
  collection = []
  has(value) {
    return this.collection.indexOf(value) !== -1;
  }
  add(value) {
    if (!this.has(value)) {
      this.collection.push(value);
      return true;
    }
    false;
  }
  values() {
    return this.collection;
  }
}

let set = new mySet();
let set2 = new SetStructure();

set.add(1);
set.add(2);
console.log(set.values());
set2.add(1);
console.log(set2.values());

console.log(set.has(3));
