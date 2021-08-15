// Internal Assessment Card Game
// Submit 30 August
// Ella Thomas

//instructions
console.log('Welcome to the Card Game. In this game a card will be dealt. Your job is to guess if the next card will be higher or lower. You have will have 3 rounds. Who ever has the most points at the end of the rounds will win. Good luck. ')

//list of numbers to be picked
let number = [ 1,  2,  3,  4,  5,  6,  7,  8,  9,  10,  11,  12,  13];

//Picks a card
let length = number.length
let randomCard2 = Math.floor(Math.random() * length + 0);
let randomCard1 = Math.floor(Math.random() * length + 0);

let tableCard1 = number[randomCard1];
let tableCard2 = number[randomCard2];

let point1 = 0
// let playAgain = ''

console.log(' These are the cards you will choose from. \n' + number)


function play(){

//Lets player know what card is dealt

console.log('The first card is a ' + tableCard1)

let player1 = prompt('Player 1, do you think the next card dealt will be higher or lower?')

console.log('The card dealt is a ' + tableCard2)

//if next card is higher and player1 guessed higher, give a point
//if next card is lower and player1 guessed lower, give point
//if next card is higher and player1 guessed lower, no point
//if next card is lower and player1 guessed higher, no point

if (tableCard1 < tableCard2 && player1 == 'higher') {
  console.log('You guessed correctly')
  point1 ++
} else if (tableCard1 > tableCard2 && player1 == 'higher') {
  console.log('You guessed incorrectly')
} else if (tableCard1 < tableCard2 && player1 == 'lower') {
  console.log('You guessed incorrectly')
}else if(tableCard1 > tableCard2 && player1 == 'lower') {
  console.log('You guessed correctly')
  point1 ++
}
console.log('Player1 you have ' + point1 + ' points.')
}



do{
  play();
}while (point1 <= 3)

playAgain = prompt('Do you want to play again?');

if (playAgain == 'yes') {
play();
} else {
	console.log(player1 + ' your final point is ' + point1)
	console.log('GAME OVER');
}