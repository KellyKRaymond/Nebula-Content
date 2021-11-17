// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

function solution(str){
    return str.split('').reverse().join('');  
  }
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

function repeatStr (n, s) {
    let placeHolder = ""
    for(i = 0; i < n; i++)
      placeHolder +=s
    return placeHolder
  }
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b)=>a-b)[0]
    }
  }
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((previousValue, currentValue) => previousValue + currentValue)
  }

// https://www.codewars.com/kata/544675c6f971f7399a000e79

function stringToNumber(str){
    return parseInt(str)
 }
