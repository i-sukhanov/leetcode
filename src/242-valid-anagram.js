const isAnagram = (s, t) => {
  if (s.length !== t.length) return false

  const cacheS = {}
  const cacheT = {}

  for (let i = 0; i < s.length; i++) {
    cacheS[s[i]] = (cacheS[s[i]] || 0) + 1
    cacheT[t[i]] = (cacheT[t[i]] || 0) + 1
  }

  for (const c in cacheS) {
    if (cacheS[c] !== cacheT[c]) return false
  }

  return true
}
