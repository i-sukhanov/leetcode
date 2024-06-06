const longestConsecutive = (nums) => {
  const numSet = new Set(nums)
  let maxStreak = 0

  for (let num of nums) {
    if (!numSet.has(num - 1)) {
      let currentStreak = 1
      let currentNum = num

      while (numSet.has(currentNum + 1)) {
        currentNum++
        currentStreak++
      }

      maxStreak = Math.max(currentStreak, maxStreak)
    }
  }

  return maxStreak
}
