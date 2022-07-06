const strings = ["a", "b", "c", "d"];

// console.log(strings[2]); // c

// push
strings.push("e"); // O(1)
console.log(strings);

// pop
strings.pop(); // O(1)
strings.pop(); // O(1)
console.log(strings);

// unshift
strings.unshift("x"); // O(n)
console.log(strings);

// splice
strings.splice(2, 0, "alien"); // O(n)
console.log(strings);
