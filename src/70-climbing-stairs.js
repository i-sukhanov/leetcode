const recursionClimbingStairs = (n) => {
  const hashTable = {
    1: 1,
    2: 2,
  }

  const f = (x) => {
    if (x in hashTable) {
      return hashTable[x]
    }

    hashTable[x] = f(x - 1) + f(x - 2)

    return hashTable[x]
  }

  return f(n)
}

const climbingStairs = (n) => {
  let one = 1
  let two = 1

  for (let i = 0; i < n; i++) {
    const temp = one
    one = one + two
    two = temp
  }

  return two
}
