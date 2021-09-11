var restclient = require('node-restclient');
var Twit = require('twit');
var striptags = require('striptags');
require("console-stamp")(console, "HH:MM:ss.l");
var tweet = "";
var statement =   "";
var config = require('../config.js');
var cards = require('../dictionary.js');

var T = new Twit(config);


function safeRand() {
  Math.random();
  return Math.random();
}

function makeMetaphor() {

  var maxtech = arraytech.length - 1;
  var maxhipster = arrayhipster.length - 1;
  var maxfix = arrayfix.length - 1;
  var maxdev = arraydev.length - 1;
  var maxwow = arraywow.length - 1;


//  	var maxpivot = cards.arraypivot.length - 1;
//  	var maxtwist = cards.arraytwist.length - 1;
//   	var maxwow = cards.arraywow.length - 1;


  indexhipster = Math.round(safeRand() * maxhipster);
  indextech = Math.round(safeRand() * maxtech);
  indextech2 = Math.round(safeRand() * maxtech);
  indexfix = Math.round(safeRand() * maxfix);
  indexdev = Math.round(safeRand() * maxdev);
  indexwow = Math.round(safeRand() * maxwow);

//        var indexpivot = Math.round(safeRand() * maxpivot);
//        var indextwist = Math.round(safeRand() * maxtwist);


//	statement = "It's " + cards.arraypivot[indexpivot] + ", but with Blockchain technology!";
statement = "We're combining " + arraytech[indextech] + " with " + arraytech[indextech2] + " to " + arrayfix[indexfix] + " " + arraydev[indexdev] + ".";

	console.time('timestamp');
	console.log('There are ' + maxpivot + ' pivots, and ' + maxtwist + ' twists');
	console.log('Just generated a great ' + statement.length  + ' character-long idea.: ' + statement );
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
