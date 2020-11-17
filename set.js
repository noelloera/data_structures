let Set = function () {
  let collection = [];
  //Returns indexOf value or -1 if not found
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

  this.remove = function (value) {
    if (this.has(value)) {
      index = collection.indexOf(value);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.values = function () {
    return collection;
  };
};
