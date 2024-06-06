const productExceptSelf = (nums) => {
  const len = nums.length
  const answer = Array(len).fill(1)

  for (let i = 1; i < len; i++) {
    answer[i] = answer[i - 1] * nums[i - 1]
  }

  let right = 1
  for (let i = len - 1; i >= 0; i--) {
    answer[i] *= right
    right *= nums[i]
  }

  return answer
}
