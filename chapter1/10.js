// 配列の配列を文字列に変換したらどうなるか？
// -> フラット化され、カンマで連結された文字列になる

const a = [[1, 2], [3, 4, 5]].toString()
console.log(a) // '1,2,3,4,5'

const b = [[[[1], 2], 3], 4].toString()
console.log(b) // '1,2,3,4'
