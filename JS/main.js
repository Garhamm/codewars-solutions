// Multiply
function multiply(a, b){
    return a * b
  }

//Are You Playing Banjo?
function areYouPlayingBanjo(name) {
    let firstLetter = name.slice(0, 1);
    if (firstLetter == 'r' || firstLetter == 'R'){
      return `${name} plays banjo`
    }else {
      return `${name} does not play banjo`
    }
  }

//Convert number to reversed array of digits
function digitize(n) {
    let arr = n.toString().split('').reverse()
    return arr.map(Number)
  }
 
// Beginner - Lost Without a Map
function maps(x){
    const newArr = x.map(currentValue => currentValue * 2)
    return newArr
  }

// Abbreviate a Two Word Name
function abbrevName(name){
    let nameSplit = name.split(' ');
    let firstName = nameSplit.shift();
    let lastName = nameSplit.pop();
    let firstInitial = firstName.slice(0,1);
    let lastInitial = lastName.slice(0,1);
    firstInitial = firstInitial.toUpperCase();
    lastInitial = lastInitial.toUpperCase();
    return `${firstInitial}.${lastInitial}`
  }

// Returning Strings
function greet(name){
    return `Hello, ${name} how are you doing today?`
  }

// Basic Mathematical Operations
function basicOp(operation, value1, value2){
    if(operation === '+'){
       return value1 + value2}
    else if(operation === '-'){
        return value1 - value2}
    else if(operation === '*' ){
        return value1 * value2}
    else{
        return value1/value2
    }
  }

// Convert a String to a Number!
var stringToNumber = function(str){
    // put your code here
    return Number(str);
  }

// Keep Hydrated!
function litres(time) {
    let literCalc = (time * .5)
    return Math.floor(literCalc)
   
   }

//Convert a Number to a String! 
function numberToString(num) {
    // Return a string of the number here!
    return num.toString();
  }

// Square(n) Sum
function squareSum(numbers){
    return numbers.reduce((sum, num) => sum + (num * num ), 0);
  }

// Parse nice int from char problem
function getAge(inputString){
    // return the girl's correct age as an integer. Happy coding :) 
      ageNumber = inputString.charAt(0)
      parseInt(ageNumber)
      return parseInt(ageNumber)
    }
// Convert a string to an array
function stringToArray(string){
  let splitString = string.split(' ')
  return splitString
}

// If you can't sleep, just count sheep!!
var countSheep = function (num){
  let count = ""
  if(num === 0){
    return count
  }else if(num > 0){
  for(let i = 1; i <= num; i++){
    count += `${i} sheep...`
  }
  return count
  }
}

// 8 kyu Function 3 - multiplying two numbersasdf
let multiply = function(num1, num2) {
  return num1 * num2;
}

// 8 kyu Cat years, Dog years
var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears;
  let dogYears;
  if(humanYears === 1){
    catYears = 15;
    dogYears = 15;
  }else if(humanYears === 2){
    catYears = 24;
    dogYears = 24;
  }else if (humanYears > 2){
    catYears = (4*(humanYears-2)) + 24
    dogYears = (5*(humanYears-2)) + 24
  }
  return [humanYears, catYears, dogYears];
}

