var myArray = ['Rain is wet','The Harry Potter books get their name from the main character, whose name is Harry Potter','Tom Waits is the name of a musician, not a patient man named Tom','There are more people alive than when there were fewer people','The Edge is not actually an edge, but a three dimensional human being','The page number in a book denotes the number of the page you are on','Comic book vigilante Batman gets his name from being a man who dresses as a bat','Ford is named after the man who founded the company, whose name was Ford','The Teenage Mutant Ninja Turtles are mutant turtles trained as ninjas.They are also teenagers','The S on Supermans chest stands for Superman','Most people are born without clothes','Buying a Samsung Galaxy Phone will not send you to another galaxy','Obamas last name in Obama','There are more nipples in the world than humans','You should subscribe to FrostyKoala','Did you know avocados are green','In Denmark you can buy apples from the grocery store','Your sister is probably a girl','Baby sitters do not actually sit on babies','Don’t hurry to your funeral. They won’t start without you.','Alligators are not good house pets','You can skydive without a parachute. But only once.','Being bored is not fun','Every 60 seconds in Africa, one minute passes by.','Brandon is trash','Samad is cool','A main similarity between raccoons and humans is that both are injured when hit by a car.','Snow is not hot','A human is not a tree.','Aliens are not from earth','Bald men do not have hair','Old people are old','Homeless people do not have homes','Ice is cold','Clownfish are not part clown','Potatoes taste like mashed potatoes','Popcorn is a special type of corn that, when heated, pops',
'A marker is called a marker because you use it to mark with','Goldfish are not made of gold','Babies are tiny adults, and not a separate human species','Seals, the animal, cannot be used to hold boxes and letters closed','this is a fact']
//the array that has the random facts
var goodnightArray = ['sleep tight', 'right back at you', 'Sleep tight honey bun', 'Good night! :D', 'See you tomorrow']

const responseObject = {
  "ayy": "Ayy, lmao!",
  "wat": "Say what?",
  "lol": "roflmaotntpmp",
  "good night" : "Good night!",
  "lenny" : "( ͡° ͜ʖ ͡°)",
  "Good night" : "Good night!",
//some extra things the bot can do
};
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('im ready')
});
//bot connecting to the discord.js api
client.on('message', message => {
  if (message.content === 'fact me bro') {
    var rand = myArray[  Math.floor(Math.random() * myArray.length	)]; 

    message.channel.send(rand);
  

  }})
//code that decides and sends the fact
client.on("message", (message) => {
  if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }
});
//things that i'm adding in so dont question it.


client.login('MzIyMDQ4OTk3NTgzNzQ5MTIx.DBnlXQ.CZoPoUsLybQ1HsjBlYsVlkkbOvY')