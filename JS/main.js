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

