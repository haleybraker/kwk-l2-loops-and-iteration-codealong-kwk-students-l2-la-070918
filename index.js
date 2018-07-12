// Code your solutions in this file

// const names = ['Ada', 'Brendan', "Ali"]

function printBadges(namesArray) {
 for (let i = 0; i < namesArray.length; i++) {
console.log(`Welcome ${namesArray[i]}! You are employee #${i+1}.`)
}
return namesArray
}

function tailsNeverFails(){
  return Math.random () >= 0.5;
}

while (tailsNeverFails()) {
  return(`You got ${tailsNeverFails} tails in a row!`)
}

return `You got ${tailsNeverFails} tails in a row!`
