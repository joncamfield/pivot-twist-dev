var restclient = require('node-restclient');
var Twit = require('twit');
var app = require('express').createServer();
var dict = require('./dictionary.js');
//var config = require('./config.js');

// I deployed to Nodejitsu, which requires an application to respond to HTTP requests
// If you're running locally you don't need this, or express at all.

var statement =   "";

app.get('/', function(req, res){
    res.send(makeMetaphor());
  try {
    tweet();
  }
 catch (e) {
    console.log(e);
  }

});
app.listen(3000);

var T = new Twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  ''
});


function makeMetaphor() {
        indexpivot = Math.round(Math.random() * maxpivot);
        indextwist = Math.round(Math.random() * maxtwist);

	statement = "It's like " + arraypivot[indexpivot] + ", but for " + arraytwist[indextwist] + ".";
	console.log('Just generated a great idea.');

	return (statement);
}


function tweet () {

        T.post('statuses/update', { status: makeMetaphor()}, function(err, reply) {
          console.log("error: " + err);
          console.log("reply: " + reply);
        });
}

function favRTs () {
  T.get('statuses/retweets_of_me', {}, function (e,r) {
    for(var i=0;i<r.length;i++) {
      T.post('favorites/create/'+r[i].id_str,{},function(){});
    }
    console.log('harvested some RTs');
  });
}

// every hour, make and tweet a metaphor
// wrapped in a try/catch in case Twitter is unresponsive, don't really care about error
// handling. it just won't tweet.
setInterval(function() {
  try {
    tweet();
  }
 catch (e) {
    console.log(e);
  }
},60000*60*1);

// every 5 hours, check for people who have RTed a metaphor, and favorite that metaphor
setInterval(function() {
  try {
    favRTs();
  }
 catch (e) {
    console.log(e);
  }
},60000*60*5);



// DICTIONARY

arraypivot = new Array(
"Agile",
"AirBnB",
"Amazon Marketplace",
"Amazon Lockers",
"Amazon Prime",
"<span class=\"fa fa-cloud\"></span> The Amazon Cloud",
"App Stores",
"<span class=\"fa fa-apple\"></span> the Apple Watch",
"Big Data",
"<span class=\"fa fa-bitcoin\"></span> Bitcoin",
"Bump",
"Candy Crush Saga",
"Chromecast",
"<span class=\"fa fa-cloud\"></span> cloud hosting",
"<span class=\"fa fa-cloud\"></span> the cloud",
"co-creation",
"craigslist",
"crowdsourcing",
"<span class=\"fa fa-delicious\"></span> delicious",
"design thinking",
"Dollar shave club",
"drone delivery",
"drones",
"<span class=\"fa fa-dropbox\"></span> dropbox",
"Evernote",
"<span class=\"fa fa-facebook-official\"></span> Facebook",
"Facetime",
"Fitbit",
"Fitness trackers",
"<span class=\"fa fa-flickr\"></span> Flickr",
"<span class=\"fa fa-foursquare\"></span>Foursquare",
"gamification",
"<span class=\"fa fa-github\"></span> github",
"GoPro cameras",
"<span class=\"fa fa-google\"></span> Google apps and email",
"<span class=\"fa fa-google\"></span> Google docs",
"<span class=\"fa fa-google\"></span> Google Hangouts",
"<span class=\"fa fa-google\"></span> Google maps",
"<span class=\"fa fa-google-plus-square\"></span> Google+",
"<span class=\"fa fa-google-wallet\"></span> Google Wallet",
"Groupon",
"a hackathon",
"human-centered design",
"instagram filters",
"<span class=\"fa fa-linkedin-square\"></span> LinkedIn",
"Lyft",
"mesh networking",
"minecraft",
"<span class=\"fa fa-mobile\"></span> mobile solutions",
"<span class=\"fa fa-mobile\"></span> mobile apps",
"<span class=\"fa fa-mobile\"></span> mobile banking",
"netflix",
"Oculus Rift VR",
"OKCupid",
"open source",
"Pandora",
"<span class=\"fa fa-pinterest-square\"></span> Pinterest pin-boards",
"Podcasts",
"<span class=\"fa fa-reddit\"></span> reddit",
"Scrums",
"Smart thermostats",
"Snapchat",
"Shazam",
"<span class=\"fa fa-skype\"></span> Skype",
"<span class=\"fa fa-mobile\"></span> SMS",
"Snapchat",
"<span class=\"fa fa-spotify\"></span> Spotify",
"<span class=\"fa fa-steam-square\"></span> Steam",
"tablets",
"<span class=\"fa fa-fire\"></span> Tinder",
"<span class=\"fa fa-trello\"></span> Trello",
"TripAdvisor",
"<span class=\"fa fa-tumblr-square\"></span> Tumblr",
"<span class=\"fa fa-twitter-square\"></span> Twitter",
"Uber",
"wearables",
"<span class=\"fa fa-whatsapp\"></span> WhatsApp",
"WikiLeaks",
"Wikipedia",
"Viber",
"<span class=\"fa fa-vine\"></span> Vine",
"<span class=\"fa fa-yelp\"></span> Yelp",
"<span class=\"fa fa-youtube\"></span> Youtube"
);

arraytwist = new Array(
"agricultural development",
"anti-trafficking",
"the bottom billion",
"childhood education",
"citizen engagement",
"climate change",
"community building",
"countering violent extremism",
"democracy and governance",
"disaster relief",
"economic relief",
"education",
"enviromental efforts",
"fisheries",
"freedom of expression",
"fragile states",
"eGov",
"gender equality",
"governance",
"HIV/Aids work",
"human rights",
"immigration",
"internally-displaced persons",
"journalism",
"Malaria",
"media development",
"mHealth",
"microfinance",
"natural resource management",
"peace-building",
"popultion",
"post-conflict work",
"poverty reduction",
"public health",
"refugee camps",
"reproductive health",
"a rights-based approach",
"rural healthcare",
"social entrepreneurship",
"social marketing",
"small and medium enterprises",
"sustainability",
"transparency",
"vulnerable populations",
"water and sanitation"
);

arraywow = new Array (
"Awesome, so it's like",
"Your Nobel Peace prize awaits with this idea",
"I taste three cups of book deals here",
"Your win-rate just keeps going up",
"A winning proposal",
"Wow. Just wow",
"Start calculating in that NICRA",
"Pop some cheap champagne, because this is a winner"
);

var maxpivot = arraypivot.length - 1;
var maxtwist = arraytwist.length - 1;
var maxwow = arraywow.length - 1;
