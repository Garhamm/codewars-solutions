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

