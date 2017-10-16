var restclient = require('node-restclient');
var Twit = require('twit');
var striptags = require('striptags');
require("console-stamp")(console, "HH:MM:ss.l");
var tweet = "";
var statement =   "";

var T = new Twit({
  consumer_key:         'OQPcr1SvUrOGbR6E6sW6WA5oC',
  consumer_secret:      'p6FOqV0KVW6TTUKgAHfCaJcKw4L0lSOWPGpKfecV11yWH2LrB7',
  access_token:         '3306199859-fSdbe9Egu92Aca5DOfKIBIJ4m1Ex4dbVmo9wdtZ',
  access_token_secret:  'Tnb3ZKeIkgTBeXXgKl8Be4r4qUQMzoovXjuWazzi6e0rB'
});


function makeMetaphor() {
        indexredcard = Math.round(Math.random() * maxredcard);
        indexwhitecard = Math.round(Math.random() * maxwhitecard);

	statement = arrayredcard[indexredcard];

	console.time('timestamp');
	console.log('Just generated a great idea.');

	return (statement);
}


function posttweet () {
	tweet = striptags(makeMetaphor());
        T.post('statuses/update', { status: tweet}, function(err, reply) {
          console.log("tweeted: " + tweet);
//          console.log("error: " + err);
//          console.log("reply: " + reply]);
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

//var idea = striptags(makeMetaphor());
//console.log(idea);


// every hour, make and tweet a metaphor
// wrapped in a try/catch in case Twitter is unresponsive, don't really care about error
// handling. it just won't tweet.

setImmediate(function() {
  try {
    posttweet();
  }
 catch (e) {
    console.log(e);
  }
});

// every 5 hours, check for people who have RTed a metaphor, and favorite that metaphor
setImmediate(function() {
  try {
    favRTs();
  }
 catch (e) {
    console.log(e);
  }
});



// DICTIONARY
arrayredcard = new Array(

);

arraywhitecard = new Array(

);

arraypivot = new Array(
"3D printing",
"Agile",
"AirBnB",
"Amazon Marketplace",
"Amazon Lockers",
"Amazon Prime",
"<span class=\"fa fa-cloud\"> </span>The Amazon Cloud",
"app stores",
"<span class=\"fa fa-apple\"> </span>the Apple Watch",
"Ashleigh Madison",
"Big Data",
"<span class=\"fa fa-bitcoin\"> </span>Bitcoin",
"the blockchain",
"Candy Crush Saga",
"Chromecast",
"<span class=\"fa fa-cloud\"> </span>cloud hosting",
"<span class=\"fa fa-cloud\"> </span>the cloud",
"co-creation",
"co-working spaces",
"craigslist",
"CRM",
"crowdsourcing",
"data visualization",
"<span class=\"fa fa-delicious\"> </span>delicious",
"design thinking",
"Disqus",
"Dollar shave club",
"Docker",
"drone delivery",
"drones",
"<span class=\"fa fa-dropbox\"> </span>Dropbox",
"emoji",
"Eventbrite",
"Evernote",
"<span class=\"fa fa-facebook-official\"> </span>Facebook",
"Facetime",
"Fitbit",
"Fitness trackers",
"<span class=\"fa fa-flickr\"> </span>Flickr",
"<span class=\"fa fa-foursquare\"> </span>Foursquare",
"gamification",
"<span class=\"fa fa-github\"> </span>github",
"GoPro cameras",
"<span class=\"fa fa-google\"> </span>Google apps and email",
"<span class=\"fa fa-google\"> </span>Google docs",
"<span class=\"fa fa-google\"> </span>Google Hangouts",
"<span class=\"fa fa-google\"> </span>Google maps",
"<span class=\"fa fa-google-plus-square\"> </span>Google+",
"<span class=\"fa fa-google-wallet\"> </span>Google Wallet",
"Groupon",
"a hackathon",
"human-centered design",
"instagram filters",
"<span class=\"fa fa-linkedin-square\"> </span>LinkedIn",
"Lyft",
"Meetup",
"mesh networking",
"minecraft",
"<span class=\"fa fa-mobile\"> </span>mobile apps",
"MOOCs",
"netflix",
"Oculus Rift VR",
"OKCupid",
"open source",
"Pandora",
"PayPal",
"<span class=\"fa fa-pinterest-square\"> </span>Pinterest pin-boards",
"Podcasts",
"<span class=\"fa fa-reddit\"> </span>reddit",
"Scrums",
"Smart thermostats",
"Snapchat",
"Shazam",
"Siri",
"<span class=\"fa fa-skype\"> </span>Skype",
"<span class=\"fa fa-mobile\"> </span>SMS",
"smart grids",
"Snapchat",
"<span class=\"fa fa-spotify\"> </span>Spotify",
"<span class=\"fa fa-steam-square\"> </span>Steam",
"tablets",
"<span class=\"fa fa-fire\"> </span>Tinder",
"<span class=\"fa fa-trello\"> </span>Trello",
"TripAdvisor",
"<span class=\"fa fa-tumblr-square\"> </span>Tumblr",
"<span class=\"fa fa-twitter-square\"> </span>Twitter",
"<span class=\"fa fa-twitter-square\"> </span>Twitter bots",
"Uber",
"wearables",
"<span class=\"fa fa-whatsapp\"> </span>WhatsApp",
"WikiLeaks",
"Wikipedia",
"Wordclouds",
"Viber",
"<span class=\"fa fa-vine\"> </span>Vine",
"<span class=\"fa fa-yelp\"> </span>Yelp",
"<span class=\"fa fa-youtube\"> </span>Youtube"
);

arraytwist = new Array(
"advocacy",
"agriculture",
"agricultural development",
"anti-trafficking",
"the bottom billion",
"childhood education",
"citizen engagement",
"citizen media",
"climate change",
"community building",
"countering violent extremism",
"democracy and governance",
"disaster relief",
"economic relief",
"education",
"election observation",
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
"improving health outcomes",
"infrastructure development",
"internally-displaced persons",
"journalism",
"malaria",
"maternal health",
"media development",
"mHealth",
"microfinance",
"natural resource management",
"peace-building",
"population",
"post-conflict work",
"poverty reduction",
"public health",
"public-private partnerships",
"refugee camps",
"reproductive health",
"a rights-based approach",
"rural healthcare",
"social entrepreneurship",
"social marketing",
"small and medium enterprises",
"smallholder farms",
"sustainability",
"transparency",
"urban development",
"vulnerable populations",
"water and sanitation",
"youth development",
"youth employment"
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

var maxredcard = arrayredcard.length - 1;
var maxwhitecard = arraywhitecard.length - 1;
var maxwow = arraywow.length - 1;
