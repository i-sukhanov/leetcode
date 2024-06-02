const missingNumber = (arr) => {
  let mask = 0

  for (let i = 0; i < arr.length; i++) {
    mask ^= arr[i]
  }

  return mask
}

console.log(missingNumber([1, 1, 3, 4, 4]))
