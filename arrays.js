let list = [1, 2, 3];
//Access a value in an array
let result = list[0];
console.log(result);
result = list[3];
console.log(result);

//Searching for value in an array, both are linear time functions
result = list.includes(2);
for (n in list) {
  n == 2 ? console.log(true) : null;
}
console.log(result);

//Inserting
//True Insert - (Linear Runtime) shifts the values in an array at desired index
list.splice(2, 0, 2.5);
console.log(list);
//Appending Insert -  (Constant Runtime) inserts the new value at the end of the array
list.push(4);
console.log(list);
//Appending Arrays - (Ok Runtime) inserts the values of another array to the end of the first array
let list2 = [5, 6, 7];
list.push(...list2);
console.log(list);
