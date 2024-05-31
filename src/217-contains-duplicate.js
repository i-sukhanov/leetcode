const containsDuplicate = (arr) => {
  const hashTable = new Set()

  for (let i = 0; i < arr.length; i++) {
    if (hashTable.has(arr[i])) return true

    hashTable.add(arr[i])
  }

  return false
}
