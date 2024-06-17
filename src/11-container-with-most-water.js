const maxArea = (height) => {
  let left = 0
  let right = height.length - 1
  let maxArea = 0

  while (left < right) {
    const length = right - left
    const minHeight = Math.min(height[left], height[right])
    const area = length * minHeight

    maxArea = Math.max(maxArea, area)

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return maxArea
}
