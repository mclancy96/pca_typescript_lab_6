// TASK:
// Write a function `logLength<T extends { length: number }>(item: T)`
// It should print the `.length` of the item

// Your code here 👇

function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length.toString());
}
