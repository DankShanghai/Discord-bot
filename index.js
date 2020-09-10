//THIS PART STAYS ALWAYS
// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});




//My own stuff below

//Greetings
client.on("message", function(message){


	let greetings = ["hi",'hello','siema', 'hey'];

	for (let i = 0; i < greetings.length; i++) {

	if (message.content.includes(greetings[i])) {
		
		let answers = ['Hi!', 'Hello!', 'Hey, how is your day?', 'How are you doing?', 'Whats upppp!', 'Hey!', 'Hey! By the way, did you know that I like potatoes...'];
		let randomAnswer = answers[Math.floor(Math.random() * answers.length)];

			message.channel.send(randomAnswer);

		}
}	
});



//Custom messages
client.on('message', message => {
	if (message.content === 'test'.toLowerCase()) {
		message.channel.send('Jaki test? Przeciez dzialam!');
	}
	if (message.content === '!ping'.toLowerCase()) {
		message.channel.send('Pong');
	}
	if (message.content === 'ayy'.toLowerCase()) {
		message.channel.send('Ayy, lmao!');
	}
	if (message.content === 'For Honor!'.toLowerCase()) {
		message.channel.send('and glory!');
	}
	if (message.content === 'halo'.toLowerCase()) {
		message.channel.send('no halo!');
	}
});



//Who do you like
client.on("message", function(message){
	if(message.content === 'who do you like?'.toLowerCase())
	{
	if(message.author.id === '264357251773497356') //Robert
	{
		message.channel.send('I like you, Robert.')
	} else {
		message.channel.send('Definitely not you!');
	}
	}
	});



//Czy mozna grac w gry
client.on("message", function(message){
	if(message.author.id === '264357251773497356') //Robert
	{
			
	if(message.content === 'czy moge pograc?'.toLowerCase())
	{
		message.channel.send('Oczywiscie, graj ile chcesz');
	}
	}});



//Czy Boosted moze grac w gry
client.on("message", function(message){
	if(message.content === 'czy mogę grać w gry?'.toLowerCase())
	{
	if(message.author.id === '289431508022853642') //Boosted
	{
		message.channel.send('Taki duży chłop a gra w głupie gry... weź się do roboty.')
	} else {
		message.channel.send('Pewnie, graj ile chcesz. Nikt nie powinna Ci mówić co wolno, a co nie.');
	}
	}
	});










