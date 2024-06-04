const twoSum = (arr, target) => {
  const hash = {}

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i]

    if (complement in hash) {
      return [i, hash[complement]]
    } else {
      hash[arr[i]] = i
    }
  }
}
