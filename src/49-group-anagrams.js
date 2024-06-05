const groupAnagrams = (strs) => {
  const hashMap = {}

  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split('').sort().join('')

    if (str in hashMap) {
      hashMap[str].push(strs[i])
    } else {
      hashMap[str] = [strs[i]]
    }
  }

  return Object.values(hashMap)
}
