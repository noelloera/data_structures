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

  search(data) {
    /*
    -Searches for the first node containing data that matches the key
    -Returns the node or null if not found
    -Takes O(n) Linear time
     */
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      } else current = current.next_node;
    }
    return null;
  }
  search_index(i) {
    /*
    -Searches the linked list and matches the index provided with a counter of nodes
    -Returns null if index not found in the linked list, or current node at that index
    -Takes O(n) Linear time
    */
    let current = this.head;
    let count = 0;
    while (current) {
      if (i == 0) {
        return current;
      }
      if (i == count) {
        return current;
      } else {
        current = current.next_node;
        count += 1;
      }
    }
    return null;
  }
  insert(data, i) {
    /*
    Inserts the desired data into the desired index by changing the next_node attributes
    Insetion takes constant time O(1) Constant Time
    Finding the node at insertion point takes O(n) Linear Time
    */
    //If the index is 0 then it will add it to the head of the linked list
    if (i == 0) this.add(data);
    //If it is not zero then it will search for the index
    if (i > 0) {
      //Creates a new node to store the data
      let new_node = new Node(data);
      let position = i;
      //Current will be the head of the linked list
      let current = this.head;
      //While loop if the position is greater than 1
      while (position > 1) {
        //Asssigns current to the next_node, the way of cycling through
        current = current.next_node;
        //Decreases the index until the position is 1 because 1 will be the prev_node and 2 will be the next_node
        position -= 1;
      }
      //Sets previous to the current node at 1
      let prev = current;
      //Sets next to current nodes next_node attribute
      let next = current.next_node;
      //Sets the next node of prev to the new node
      prev.next_node = new_node;
      //Sets the new_nodes next_node attribute to the next_node that is supposed to follow in the linked list
      new_node.next_node = next;
    }
  }
  remove_data(data) {
    let current = this.head;
    //Initializes variables that will be used for conditionals for finding value in linked list
    let previous = null;
    let found = false;
    //Loop continues as long as current is not null and found is false
    while (current && !found) {
      //First condition checks if the data at current is equal and the current is what is stored in head at the moment
      if (current.data == data && current == this.head) {
        //Found will be set to true exiting the loop
        found = true;
        //Will remove the head by overriding this.head to the next node, because it found at head
        this.head = current.next_node;
        //Will check next node if data is equal
      } else if (current.data == data) {
        found = true;
        //Will remove the node by changing the next_node of the previous to the next_node of current, thus removing current
        previous.next_node = current.next_node;
      } else {
        //previous variable will be set to current since data in current did not match
        previous = current;
        //current will now be the next node in the linked list
        current = current.next_node;
      }
    }
    return `was found: ${found}, current is ${JSON.stringify(current)} `;
  }
  remove_index(index) {
    /*Will delete the node at the provided index, granted the index exists in the linked list
    Takes Linear time becuase it cycles through each index O(n)
    */
    let current = this.head;
    let previous = null;
    let count = 0;
    let found = false;
    while (current && !found) {
      if (index == 0) {
        found = true;
        this.head = current.next_node;
      }
      if (count == index && previous) {
        found = true;
        previous.next_node = current.next_node;
      } else {
        //If the index did not match the count then previous will be current
        previous = current;
        //Current will now be the next_node that it points to
        current = current.next_node;
        //count will increase by one to go to next index
        count += 1;
      }
    }
    //Will check if the count is at 0 and the index was not found
    if (count == 0 && !found) count = null;
    return `was found: ${found}, at index: ${index}, the deleted node was: ${current}`;
  }
  print() {
    /*
      -Prints out a representation of the Linked List
      -Takes O(n) time Linear
  */
    let nodes = [];
    //sets the current variable to the value of this.head, the start of nodes in linked list
    let current = this.head;
    //While there exists a value in current keep looping
    while (current) {
      //If the current is equal to the head print it as the head
      if (current == this.head) {
        nodes.push(`[Head: ${current.data}]`);
      }
      //Else if the current.next_node does not have a value then it is the tail of the linked list
      else if (current.next_node == null) {
        nodes.push(`[Tail: ${current.data}]`);
      }
      //Anything else should just print the value at that node
      else {
        nodes.push(`[${current.data}]`);
      }
      //Will set current as the next node after checking the conditions
      current = current.next_node;
    }
    //Will return the array of nodes joined by "->"
    return nodes.join(" -> ");
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
l1.add(200);
l1.add(450);
//Prints the size of the linked list
console.log(l1.size());
//Prints a visual of the contents in the linked list
console.log(l1.print());
//Searches for the existance of that value inside the linked list O(n)
console.log(l1.search(20));
//Searches for the desired position in the linked list O(n)
//Inserts the node value at that position O(1)
l1.insert(25, 2);
//Prints the new linked list after the changes
console.log(l1.print());
console.log(l1.remove_data(20));
console.log(l1.print());
console.log(l1.remove_index(4));
console.log(l1.print());
console.log(l1.search_index(2));
