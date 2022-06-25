// 数の配列から最大の値を探す

// 古典的なforループ
function searchMaxNumber1(numbers) {
  let maxNumber = -Infinity
  for (let i = 0; i < numbers.length; i++) {
    if (maxNumber < numbers[i]) {
      maxNumber = numbers[i]
    }
  }
  return maxNumber
}

// for ofループ
function searchMaxNumber2(numbers) {
  let maxNumber = -Infinity
  for (const number of numbers) {
    if (maxNumber < number) {
      maxNumber = number
    }
  }
  return maxNumber
}

// for inループ
function searchMaxNumber3(numbers) {
  let maxNumber = -Infinity
  for (const i in numbers) {
    if (maxNumber < numbers[i]) {
      maxNumber = numbers[i]
    }
  }
  return maxNumber
}

const a = [3, 1, 4, -1, 5, -9]
console.log(searchMaxNumber1(a)) // 5
console.log(searchMaxNumber2(a)) // 5
console.log(searchMaxNumber3(a)) // 5
