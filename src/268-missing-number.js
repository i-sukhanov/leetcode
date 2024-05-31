const missingNumber = (arr) => {
  const len = arr.length

  const currentSum = arr.reduce((acc, curr) => acc + curr, 0)
  const sum = (len * (len + 1)) / 2

  return sum - currentSum
}
