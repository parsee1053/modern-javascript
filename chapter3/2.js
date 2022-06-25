function indexOf(arr, value) {
  let index = -1
  for (let i in arr) {
    if (arr[i] === value) {
      index = i
      break
    }
  }
  return index
}

const arr = [3, 1, 4, 1, 5, 9]
console.log(indexOf(arr, 5)) // 4
console.log(indexOf(arr, 1)) // 1
console.log(indexOf(arr, 6)) // -1
