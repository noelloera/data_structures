class StackClass {
  count = 0;
  storage = {};
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
  size() {
    return this.count;
  }
  peek() {
    return this.storage[this.count - 1];
  }
}
//Inputs
let myStack = new StackClass();
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
