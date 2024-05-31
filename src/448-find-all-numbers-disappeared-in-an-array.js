const findNumbers = (arr) => {
  let i = 0

  while (i < arr.length) {
    let pos = arr[i] - 1

    if (arr[i] !== arr[pos]) {
      const swap = [arr[i], arr[pos]]

      arr[i] = swap[1]
      arr[pos] = swap[0]
    } else {
      i++
    }
  }

  const missed = []

  for (let j = 0; j < arr.length; j++) {
    const miss = j + 1

    if (miss !== arr[j]) {
      missed.push(j)
    }
  }

  return missed
}
