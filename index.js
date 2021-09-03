// Internal Assessment Card Game
// Submit 30 August
// Ella Thomas

//instructions on how to play
console.log('Welcome to the Card Game. In this game a card will be dealt. Your job is to compete against another player and guess if the next card will be higher or lower. You will have 3 rounds each. Who ever has the most points at the end of the rounds will win. Good luck. \n ');

//asks for players for their names
let player1 = prompt('What is player1 name?');
let player2 = prompt('What is player2 name?');

// dealing with invalid input for player1
    while (player1 == '' || player1 == ' '){
      console.log('Sorry player1 input is invalid.');
      player1 = prompt('What is player1 name?');
      }

// dealing with invalid input for player2
    while (player2 == '' || player2 == ' '){
      console.log('Sorry player2 input is invalid.');
      player2 = prompt('What is player2 name?');
      }


//list of numbers that can be picked
let number = [ 1,  2,  3,  4,  5,  6,  7,  8,  9,  10,  11,  12,  13];

//Picks the card thats dealt
let length = number.length

//sets the amount of points each player has at the beginning
let point1 = 0
let point2 = 0

//sets the amount of rounds to 0
let round = 0

//initializing variables before using them so it won't come up with 'undefined'
let randomCard1 = ''
let randomCard2 = ''
let card1=''
let card2=''

//lets players know what they can choose from
console.log('\nThese are the cards you will choose from. \n' + number + '\n ');


//begins to play everything in play loop
function play(){

//selects a random card from list
let randomCard2 = Math.floor(Math.random() * length + 0);
let randomCard1 = Math.floor(Math.random() * length + 0);

let card1 = number[randomCard1];
let card2 = number[randomCard2];


//Lets player1 know what card is dealt
console.log('The card dealt is a ' + card1);

//asks player if they think card will be higher or lower
let guess1 = prompt(player1 + ' do you think the next card dealt will be higher or lower?');

//lets player know what the next card is thats dealt
console.log('The card dealt is a ' + card2);


//if next card is higher and player1 guessed higher, give a point
//if next card is lower and player1 guessed lower, give point
//if next card is higher and player1 guessed lower, no point
//if next card is lower and player1 guessed higher, no point
if (card1 < card2 && guess1 == 'higher') {
  console.log('You guessed correctly');
  point1 ++
  round++
} else if (card1 > card2 && guess1 == 'higher') {
  console.log('You guessed incorrectly');
  round++
} else if (card1 < card2 && guess1 == 'lower') {
  console.log('You guessed incorrectly');
  round++
}else if(card1 > card2 && guess1 == 'lower') {
  console.log('You guessed correctly');
  point1 ++
  round++
}

//tells player1 how many points they have
console.log(player1 + ' you have ' + point1 + ' points.\n ');


//selects a random card from list
randomCard2 = Math.floor(Math.random() * length + 0);
randomCard1 = Math.floor(Math.random() * length + 0);

//
card1 = number[randomCard1];
card2 = number[randomCard2];


//Lets player2 know what card is dealt
console.log('The next card dealt is a ' + card1)

//asks player2 if they think card will be higher or lower
let guess2 = prompt(player2 + ' do you think the next card dealt will be higher or lower?');

//lets player know what the next card is thats been dealt
console.log('The card dealt is a ' + card2);


//if next card is higher and player2 guessed higher, give a point
//if next card is lower and player2 guessed lower, give point
//if next card is higher and player2 guessed lower, no point
//if next card is lower and player2 guessed higher, no point
if (card1 < card2 && guess2 == 'higher') {
  console.log('You guessed correctly');
  point2 ++
  round++
} else if (card1 > card2 && guess2 == 'higher'){
  console.log('You guessed incorrectly');
  round++
} else if (card1 < card2 && guess2 == 'lower') {
  console.log('You guessed incorrectly');
  round++
}else if (card1 > card2 && guess2 == 'lower') {
  console.log('You guessed correctly');
  point2 ++
  round++
}
//lets player2 know how many points they have
console.log(player2 + ' you have ' + point2 + ' points.\n ');
}

//will keep repeating until each player has had 3 goes
do{
  play();
}while (round <= 4);

//lets both players know how many points they have
console.log('\n' + player1 + ' you have ' + point1 + ' points.');
console.log(player2 + ' you have ' + point2 + ' points.\n');

//compares players points
if (point1 > point2){
  console.log(player1 + ' you win!\n');
} else if (point2 > point1){
  console.log(player2 + ' you win!\n');
} else {
  console.log('You both tied!\n');
}

//will let player keep playing again until they want to stop
do{
//asks players if they want to play again
playAgain = prompt('Do you want to play again?');

//if yes they will play again
//if no it will say game over
if (playAgain == 'yes') {
  console.log('\n');
//run the function 3 times, so each player has another 3 goes
play();
play();
play();
} else {
	console.log('\nGAME OVER');
}

//will keep looping everything in 'do' until player says they want to stop
}while(playAgain == 'yes');
