// BONUS TASK:
// Write a generic function `merge<T, U>(obj1: T, obj2: U): T & U`
// Write a generic function `wrapInArray<T>(value: T): T[]`

// Your code here 👇

function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

function wrapInArray<T>(value: T): T[] {
  return [value];
}
