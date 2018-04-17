// SETS - Store unique values of any type (only value, not key => value)

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100);
console.log(set1);

const set2 = new Set([1, true, 'string']);
console.log(set2);

// Get count
console.log(set1.size);

// Check for values
console.log(set1.has(100)); // true
console.log(set1.has(50 + 50)); // true
console.log(set1.has({name: 'John'})); // false

// Delete from set
set1.delete(100);
console.log(set1);

// Iterate through sets
// For...of
console.log('-=-=-=-=-=-=-=-=')
for(let item of set1) {
  console.log(item);
}
console.log('-=-=-=-=-=-=-=-=')

// forEach loop
console.log("==================")
set1.forEach((value) => {
  console.log(value);
});
console.log("==================")

// Convert set to array
const setArr = Array.from(set1);
console.log(setArr);

