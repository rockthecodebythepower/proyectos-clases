class MyArray {
  constructor(array) {
    this.array = array;
  }

  pop() {
    this.array.length = this.array.length - 1;
  }
}

const arr = new MyArray([4, 5, 6, 7, 8, 9]);

console.log(arr.array);

arr.pop();
arr.pop();
arr.pop();

console.log(arr.array);