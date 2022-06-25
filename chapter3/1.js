// indexOf関数は、配列ではなくオブジェクトを渡されたら何をするか？
// -> 引数valueに一致するプロパティ値のプロパティ名を返す

function indexOf(arr, value) {
  for (let i in arr) {
    if (arr[i] === value) return i
  }
  return -1
}

const obj = {
  a: 1,
  b: 2,
  c: 4,
  d: 8,
  e: 16,
}
console.log(indexOf(obj, 4)) // c
console.log(indexOf(obj, 64)) // -1
