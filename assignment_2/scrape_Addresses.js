// npm install cheerio


var fs = require('fs');
var cheerio = require('cheerio');

// load the thesis text file into a variable, `content`
// this is the file that we created in the starter code from last week
var content = fs.readFileSync('data/thesis-5.txt');

// load `content` into a cheerio object
var $ = cheerio.load(content);

// print (to the console) names of thesis students
$('td').each(function(i, elem) {
    console.log($(elem).text());
});

// write the project titles to a text file
var tdTexts = []; // this variable will hold the lines of text

$('.project .title').each(function(i, elem) {// select the class projects and titles and for each of them.... do.... something
    tdTexts.push($(elem).text());
});

var addresses = []

tdTexts.forEach((title) => {
	var parsing = false
	var foundAddress2 = false
	var ignore = true
	var text = ''
	var i;
	for(i=0; i < title.length; i++){
		var c = title[i]
		if(parseInt(c)){
			parsing = true
			text =+ c
		}

	}
})

fs.writeFileSync('data/tdTexts.txt', tdTexts);



// var thesisTitles = ''; // this variable will hold the lines of text

// $('.project .title').each(function(i, elem) {
//     thesisTitles += ($(elem).text()) + '\n';
// });

// fs.writeFileSync('data/thesisTitles.txt', thesisTitles);
