const fibLoop = (n) => {
  if (n === 0) return 0
  if (n === 1) return 1

  let prev = 0
  let curr = 1

  for (let i = 2; i < n; i++) {
    prev = curr
    curr = prev + curr
  }

  return curr
}

// Fib function with memoization + recursion
const fibRec = (n) => {
  const memo = {
    0: 0,
    1: 1,
  }

  const f = (x) => {
    if (x in memo) {
      return memo.x
    }

    memo.x = fibRec(n - 1) + fibRec(n - 2)
    return memo.x
  }

  return f(n)
}
