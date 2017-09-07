function printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
    let newString = string.substring(1, string.length)
    printString(newString)
  } else {
    return true
  }
}

function reverseString(string) {
  if (string.length < 2) {
    return string
  } else {
    return reverseString(string.substring(1)) + string[0]
  }
}

function isPalindrome(string) {
  if (string[0] !== string[string.length-1]) {
    return false
  } else if (string.length > 2) {
    isPalindrome(string.substring(1, string.length-1))
  }
  return true
}

function addUpTo(arr, i) {
  return i ? arr[i] + addUpTo(arr, --i) : arr[i]
}

function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0]
  } else {
    return Math.max(arr.pop(), maxOf(arr))
  }
}

function includesNumber(arr, n) {
  if (!arr.length) {
    return false
  } else {
    return arr.shift() === n ? true : includesNumber(arr, n)
  }
}

// function includesNumber(arr, n) {
//   if (!arr.length) {
//     return false
//   } else if (arr[0] === n) {
//     return true
//   } else {
//     includesNumber(arr.slice(1), n)
//   }
// }
