const isPalindrome = (str) => {
  const filteredStr = str.toLowerCase().replace(/[^\x30-\x39\x41-\x5A\x61-\x7A]/g, '')
  return filteredStr === filteredStr.split('').reverse().join('')
}
