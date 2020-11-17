//Mimics the Set ES6 Object with extra functionality
class SetClass {

  collection = [];
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
  remove(value) {
    if (this.has(value)) {
      index = this.collection.indexOf(value);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }
  size() {
    return this.collection.length;
  }
  values() {
    return this.collection;
  }
  union(otherSet) {
    let unionSet = new SetClass();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach((value) => {
      unionSet.add(value);
    });
    secondSet.forEach((value) => {
      unionSet.add(value);
    });
    return unionSet;
  }
  intersection(otherSet) {
    let intersectionSet = new SetClass();
    let firstSet = this.values();
    firstSet.forEach((value) => {
      if (otherSet.has(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  }
  difference(otherSet) {
    let differenceSet = new SetClass();
    let firstSet = this.values();
    firstSet.forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }
}

let set = new SetClass();
