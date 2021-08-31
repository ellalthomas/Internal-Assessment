// Internal Assessment Card Game
// Submit 30 August
// Ella Thomas

//instructions
console.log('Welcome to the Card Game. In this game a card will be dealt. Your job is to guess if the next card will be higher or lower. You have will have 3 rounds. Who ever has the most points at the end of the rounds will win. Good luck. \n ')

//list of numbers to be picked
let number = [ 1,  2,  3,  4,  5,  6,  7,  8,  9,  10,  11,  12,  13];

//Picks a card
let length = number.length
let point1 = 0
let point2 = 0
let round = 0

//initializing variables before using them - so it won't come up with 'undefined'
let randomCard1 = ''
let randomCard2 = ''
let tableCard1=''
let tableCard2=''

//lets players know what they can choose from
console.log('These are the cards you will choose from. \n' + number + '\n ')

play();
function play(){

//selects a random card from list
let randomCard2 = Math.floor(Math.random() * length + 0);
let randomCard1 = Math.floor(Math.random() * length + 0);


let tableCard1 = number[randomCard1];
let tableCard2 = number[randomCard2];

//Lets player1 know what card is dealt
console.log('The card dealt is a ' + tableCard1)

//asks player if they think card will be higher or lower
let player1 = prompt('Player 1, do you think the next card dealt will be higher or lower?')

//lets player know what the next card is
console.log('The card dealt is a ' + tableCard2)

//if next card is higher and player1 guessed higher, give a point
//if next card is lower and player1 guessed lower, give point
//if next card is higher and player1 guessed lower, no point
//if next card is lower and player1 guessed higher, no point
if (tableCard1 < tableCard2 && player1 == 'higher') {
  console.log('You guessed correctly')
  point1 ++
  round++
} else if (tableCard1 > tableCard2 && player1 == 'higher') {
  console.log('You guessed incorrectly')
  round++
} else if (tableCard1 < tableCard2 && player1 == 'lower') {
  console.log('You guessed incorrectly')
  round++
}else if(tableCard1 > tableCard2 && player1 == 'lower') {
  console.log('You guessed correctly')
  point1 ++
  round++
}
//tells player how many points they have
console.log('Player1 you have ' + point1 + ' points.\n ')



//selects a random card from list
randomCard2 = Math.floor(Math.random() * length + 0);
randomCard1 = Math.floor(Math.random() * length + 0);

//
tableCard1 = number[randomCard1];
tableCard2 = number[randomCard2];

//Lets player2 know what card is dealt
console.log('The next card dealt is a ' + tableCard1)

//asks player2 if they think card will be higher or lower
let player2 = prompt('Player 2, do you think the next card dealt will be higher or lower?')

//lets player know what the next card is
console.log('The card dealt is a ' + tableCard2)

//if next card is higher and player2 guessed higher, give a point
//if next card is lower and player2 guessed lower, give point
//if next card is higher and player2 guessed lower, no point
//if next card is lower and player2 guessed higher, no point
if (tableCard1 < tableCard2 && player2 == 'higher') {
  console.log('You guessed correctly')
  point2 ++
  round++
} else if (tableCard1 > tableCard2 && player2 == 'higher') {
  console.log('You guessed incorrectly')
  round++
} else if (tableCard1 < tableCard2 && player2 == 'lower') {
  console.log('You guessed incorrectly')
  round++
}else if (tableCard1 > tableCard2 && player2 == 'lower') {
  console.log('You guessed correctly')
  point2 ++
  round++
}
//lets player know how many points they have
console.log('Player2 you have ' + point2 + ' points.\n ')
}

//will keep repeating until each player has had 3 goes
do{
  play();
}while (round <= 4)

//lets both players know how many points they have
console.log('\nPlayer1 you have ' + point1 + ' points.')
console.log('Player2 you have ' + point2 + ' points.\n')

//asks players if they want to play again
playAgain = prompt('Do you want to play again?');

//if yes they will play again
//if no it will say game over
if (playAgain == 'yes \n') {
play();
} else {
	console.log('\nGAME OVER');
}