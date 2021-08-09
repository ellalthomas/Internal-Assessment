// Internal Assessment Card Game
// Submit 30 August
// Ella Thomas

console.log('Welcome to the Card Game. In this game a card will be dealt. Your job is to guess if the next card will be higher or lower. You have will have 3 rounds. Who ever has the most points at the end of the rounds will win. Good luck. ')

//list of numbers to be picked
let number = [' Ace', ' 2', ' 3', ' 4', ' 5', ' 6', ' 7', ' 8', ' 9', ' 10', ' Jack', ' Queen', ' King'];

let length = number.length
let cardDealt = Math.floor(Math.random() * length + 0);

console.log(number + '.  These are the cards you will choose from.')

