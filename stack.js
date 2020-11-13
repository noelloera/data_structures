let Stack = function () {
  this.count = 0;
  this.storage = {};
  //Adds value parameter to the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };
  //Removes and returns the top most value from the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };
  //Returns the current count of all the values in the stack
  this.size = function () {
    return this.count;
  };
  //Returns the value of at the end of the stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};
//Inputs
let myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("coding is awesome");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push(3);
myStack.push(1);
console.log(myStack.pop());
myStack.push(1);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
/*Outputs:
2
2
1
2
coding is awesome
coding is awesome
1
1
1
1
3
*/
