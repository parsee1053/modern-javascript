function findNextSpace1(s) {
  let i = 0
  do {
    i++
  } while (i < s.length && s[i] != ' ')

  console.log(i)
}

function findNextSpace2(s) {
  let i = 0
  while (++i < s.length && s[i] != ' ');

  console.log(i)
}

findNextSpace1('Hello, World') // 6
findNextSpace1('Hello,World') // 11
findNextSpace1(' Hello,World') // 12

findNextSpace2('Hello, World') // 6
findNextSpace2('Hello,World') // 11
findNextSpace2(' Hello,World') // 12
