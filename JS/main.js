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