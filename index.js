// Internal Assessment Card Game
// Submit 30 August
// Ella Thomas

//instructions
console.log('Welcome to the Card Game. In this game a card will be dealt. Your job is to guess if the next card will be higher or lower. You have will have 3 rounds. Who ever has the most points at the end of the rounds will win. Good luck. ')

//list of numbers to be picked
let number = [' Ace', ' 2', ' 3', ' 4', ' 5', ' 6', ' 7', ' 8', ' 9', ' 10', ' Jack', ' Queen', ' King'];

//Picks a card
let length = number.length
let randomCard2 = Math.floor(Math.random() * length + 0);
let randomCard1 = Math.floor(Math.random() * length + 0);

let tableCard1 = number[randomCard1];
let tableCard2 = number[randomCard2];

console.log(' These are the cards you will choose from. \n' + number)

//Lets player know what card is dealt
console.log('The first card is a' + tableCard1)

let higher = ''
let lower = ''
let player1Choice = prompt('Player 1, do you think the next card dealt will be higher or lower?')

console.log('The card dealt is a' + tableCard2)
while (tableCard1 > tableCard2 && player1Choice == higher) {
  console.log('You guessed successfully')
} while (tableCard1 < tableCard2 && player1Choice == higher) {
  console.log('You guessed incorrectly')
}