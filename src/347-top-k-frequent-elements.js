const topKFrequent = (nums, k) => {
  const hashMap = {}

  for (const num of nums) {
    hashMap[num] = (hashMap[num] || 0) + 1
  }

  const buckets = Array(nums.length + 1)
    .fill()
    .map(() => [])

  for (const [item, freq] of Object.entries(hashMap)) {
    buckets[freq].push(item)
  }

  const result = []

  for (let i = buckets.length - 1; result.length < k && i >= 0; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i])
    }

    if (result.length >= k) {
      break
    }
  }

  return result
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
