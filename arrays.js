var friends = ["Danny", "Doug", "Sarah", "Richard"];
var nums = [5, 16, 2, 5];
var bools = [true, false, true, false];

//This will isolate the last element in the array.  It will
//then print the last element followed by the array with
//the last element removed
console.log(friends.pop());
console.log(friends);

//This will print the elements in the array at index positions 0-1
console.log(nums.slice(0, 2));

//This will add a true to the end of the array and then output the
//new number of elements in the array
console.log(bools.push(true));
