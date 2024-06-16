const twoSum = (numbers, target) => {
  const hash = {}

  for (let i = 0; i < numbers.length; i++) {
    const compliment = target - numbers[i]

    if (compliment in hash) {
      return [hash[compliment], i + 1]
    } else {
      hash[numbers[i]] = i + 1
    }
  }
}
