const arr = [5, 4, 3, 2, 8, 9, 7];
/*function separateArr(Ar) {
  if (Ar.length <= 1) {
    return Ar;
  }
  let left = [];
  let right = [];
  let pivot = Ar[0];
  for (let i = 1; i < Ar.length; i++) { // start loop at 1
    if (Ar[i] < pivot) {
      left.push(Ar[i]);
    } else {
      right.push(Ar[i]);
    }
  }
  return [...separateArr(left), pivot, ...separateArr(right)];
}
const sorted = separateArr(arr);
console.log(arr, sorted);
*/
function sorting(y) {
  if (y.length <= 1) {
    return y;
  }
  let right = [];
  let left = [];
  let pivot = y[0];
  for (let i = 1; i < y.length; i++) {
    if (y[i] > pivot) {
      right.push(y[i]);
    } else {
      left.push(y[i]);
    }
  }
  return [...sorting(left), pivot, ...sorting(right)];
}
console.log(arr);
const sortedArray = sorting(arr);
console.log(sortedArray);
