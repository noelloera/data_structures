class Node {
  /*An object for storing a single node of a linked list. 
    Models two attributes - data and the link to the next node in the list*/
  data = null;
  next_node = null;
  constructor(data) {
    this.data = data;
  }
}
//Creates the instance of a Node
let N1 = new Node(10);
//Logs the Node to the console
console.log(N1);
//Creates a new instance of a Node
let N2 = new Node(20);
//Points the next_node variable to the instance of N2
N1.next_node = N2;
//Logs the Node and its reference to N2
console.log(N1);

//LinkedList
class LinkedList {
  //Singly LinkedList
  constructor(head) {
    this.head = head;
  }
  isEmpty() {
    return this.head == null;
  }
  size() {
    //returns the number of nodes in the list, takes linear time
    let current = this.head;
    let count = 0;
    while (current) {
      count += 1;
      current = current.next_node;
    }
    return count;
  }
  add(data) {
    /*
    - This is a constant time assignment operation*
    - Adds new node to the Head of the LinkedList O(1) Constant Time
    */
    let new_node = new Node(data);
    new_node.next_node = this.head;
    this.head = new_node;
  }
}
let l1 = new LinkedList();
//Manually creating a new Node
N1 = new Node(10);
//Pointing head reference to the created Node
l1.head = N1;
//Logging the size of the Linked List currently should only contain one
console.log(l1.size());
//Calls the linked List add function which adds new node to head and is constant time
l1.add(20);
console.log(l1.size());
console;
console.log(l1);
