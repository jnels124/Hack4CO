
/*
 * GET home page.
 */
 var http = require('http');
 var request = require('request');
 var SendGrid = require('sendgrid').SendGrid;
 var sendgrid_name = 'jnels124';
 var sendgrid_key = 'nuggets1';
 var url_call = "http://access.alchemyapi.com/calls/url/";
 var api_key = "5d94ddbd598dbd02d431d6fb9f91261f6b1fd88f";
 var url_part = "&url=";
 var cquery_part = "&cquery=";
 var outputJSON = "&outputMode=json";
 var weight_score = .25;


 var googleBook = "https://www.googleapis.com/books/v1/volumes?q=";
 var google_api_key = '&key=AIzaSyATwwTIasX6mmpLRtptzL_zI9bQ0PxRX-s';


 exports.index = function(req, res){
 	var keyword = {};
 	res.render('index', { title: 'Express', keywords: keyword, results: "gdfgdfgdfgd"});
 };

 exports.post_handler = function(req, res){
 	var url = req.body.url;
 	var keywords = req.body.keywords;

 	console.log("KEYWORD: " + keywords);

 	relevance(keywords, url, res);
 	//subject1_books( keywords, res );

 	//sendgrid('jnels124@msudenver.edu');
 };


 var relevance = function(keywords_unparsed, url, res){
 	var type = "URLGetRankedConcepts";
 	var myRequest = url_call+type+'?apikey='+api_key+url_part+url+outputJSON;
 	var keyword_request = {
 		relevance : 0.0,
 		related : []
 	};

 	var keywords = keywords_unparsed.split(" ");

 	var found_keywords = [];

 	request(myRequest, function(error, response, body){

 		for(i in keywords){

 			var keyword = keywords[i];

 			var temp_keyword = keyword.toLowerCase();
 			var all_keywords = temp_keyword.split(" ");
 			

 			
 			var data = JSON.parse(body);
 			var related_temp = [];
 			var score_temp = 0.0;
 			var titles = "";
 			var found_it = false;
 			for(y in all_keywords){
 				for(x in data.concepts){

 					var concept_data = data.concepts[x];
 					var relevances_score = concept_data.relevance;
 					var relevant_keyword = concept_data.text.toLowerCase();
 					var check_keyword = all_keywords[y].toLowerCase();
 					found_it = (relevant_keyword.indexOf(check_keyword));
 					if(found_it){
 						keyword_request.relevance = relevances_score;
 						found_keywords.push(check_keyword);
 						found_it = !found_it;
 						break;
 					} 
 				}
 			}

 			var num_of_related = 0;

 			for(x in data.concepts){
 				var keywords_lower_case = [];
 				for(all in keywords){
 					keywords_lower_case.push(keywords[all].toLowerCase());
 				}
 				var concept_data = data.concepts[x];
 				var relevant_keyword = concept_data.text.toLowerCase();
 				var is_single_word = relevant_keyword.indexOf(" ") === -1;
 				var put_it_in = inArray(relevant_keyword, found_keywords) == -1 
 				&& num_of_related <= 2 
 				&& is_single_word 
 				&& inArray(relevant_keyword, keyword_request.related) == -1
 				&& inArray(relevant_keyword, keywords_lower_case);

 				if(put_it_in){

 					keyword_request.related.push(relevant_keyword);
 					num_of_related++;
 				}
 			}

 				//console.log(data.concepts);

 				


 			}

 			console.log( "FINAL RESPONSE: " + keyword_request.relevance + " " + keyword_request.related);

 			sentiment(keywords_unparsed, url, res, keyword_request);


 		});
}

var sentiment  = function(keyword, url, res, keyword_request){
	var type = "URLGetTextSentiment";
	var myRequest = url_call+type+'?apikey='+api_key+url_part+url+outputJSON+"&showSourceText=1";
	var sentiment_request = keyword_request;

	request(myRequest, function(error, response, body){
		var data = JSON.parse(body);
		var titles = "";
		try{
			sentiment_request["sentiment"] = data.docSentiment.type;
		} catch(err){
			console.log("Sentiment Error: " + err);
		}

		console.log(sentiment_request);

		author_name(keyword, url, res, sentiment_request );

		
	});

} 

var author_name = function(keyword, url, res, sentiment_request){
	var type = "URLGetAuthor";
	var myRequest = url_call+type+'?apikey='+api_key+url_part+url+outputJSON+"&showSourceText=1";
	var author_request = sentiment_request;

	request(myRequest, function(error, response, body){
		var data = JSON.parse(body);
		var author = data.author
		console.log("Author: " + author);
		try{
			author_request["author"] = author;
		} catch(err){
			console.log("Sentiment Error: " + err);
		}

		console.log(author_request);

		res.send(JSON.stringify(author_request));
	});
};

var subject1_books = function(keywords, res){
	var words = [];
	var book_titles = {}
	words = keywords.split(" ");
	request( googleBook + words[0] + google_api_key, function( error, response, body )  {
		if(error) console.log(error);
		
		var content = response.body;
		content = JSON.parse(content);
		console.log(content);
		for(x in content.items){
			var this_volumeInfo = content.items[x].volumeInfo.categories;
			console.log(this_volumeInfo);
			if(inArray("Fiction", this_volumeInfo) == -1){
				console.log("GOT TO ONE");
				book_titles[words[0]] = content.items[x].volumeInfo.title;
				//res.send(JSON.stringify(book_titles));
				subject2_books(keywords, book_titles, res );

			}
		};

	});

};

var subject2_books = function(keywords, books, res){
	var words = [];
	var book_titles = books;
	words = keywords.split(" ");
	request( googleBook + words[1] + google_api_key, function( error, response, body )  {
		if(error) console.log(error);
		var content = response.body;
		content = JSON.parse(content);
		for(x in content.items){
			var this_volumeInfo = content.items[x].volumeInfo.categories;
			//console.log(this_volumeInfo);
			if(inArray("Fiction", this_volumeInfo) == -1){
				book_titles[words[1]] = content.items[x].volumeInfo.title;
				//res.send(JSON.stringify(book_titles));
				subject3_books(keywords, book_titles, res );

			}
		};

	});

};

var subject3_books = function(keywords, books, res){
	var words = [];
	var book_titles = books;
	words = keywords.split(" ");
	request( googleBook + words[2] + google_api_key, function( error, response, body )  {
		if(error) console.log(error);
		console.log("GOT TO THREE");
		var content = response.body;
		content = JSON.parse(content);
		for(x in content.items){
			var this_volumeInfo = content.items[x].volumeInfo.categories;
			//console.log(this_volumeInfo);
			if(inArray("Fiction", this_volumeInfo) == -1){
				book_titles[words[2]] = content.items[x].volumeInfo.title;
				//res.send(JSON.stringify(book_titles));
				subject4_books(keywords, book_titles, res );

			}
		};

	});

};

var subject4_books = function(keywords, books, res){
	var words = [];
	var book_titles = books;
	words = keywords.split(" ");
	request( googleBook + words[3] + google_api_key, function( error, response, body )  {
		var content = response.body;
		content = JSON.parse(content);
		for(x in content.items){
			var this_volumeInfo = content.items[x].volumeInfo.categories;
			console.log(this_volumeInfo);
			if(inArray("Fiction", this_volumeInfo) == -1){
				book_titles[words[3]] = content.items[x].volumeInfo.title;
				//res.send(JSON.stringify(book_titles));
				subject5_books(keywords, book_titles, res );

			}
		};

	});

};

var subject5_books = function(keywords, books, res){
	var words = [];
	var book_titles = books;
	words = keywords.split(" ");
	request( googleBook + words[4] + google_api_key, function( error, response, body )  {
		if(error) console.log(error);
		var content = response.body;
		content = JSON.parse(content);
		for(x in content.items){
			var this_volumeInfo = content.items[x].volumeInfo.categories;
			//console.log(this_volumeInfo);
			if(inArray("Fiction", this_volumeInfo) == -1){
				book_titles[words[4]] = content.items[x].volumeInfo.title;
				res.send(JSON.stringify(book_titles));
				//subject5_books(keywords, book_titles, res );

			}
		};

	});

};

function inArray(value, an_array){
	for(x in an_array){
		if(an_array[x] === value){
			return x;
		}
	}

	return -1;

};

function getBooks( allBooks, words ) {

}

function sendGrid (email, body) {
	var sendgrid = new SendGrid(sendgrid_name, sendgrid_key);
	sendgrid.send({
		to: email,
		from: 'jessetnelson89@comcast.net',
		subject: 'Dossier',
		html: body
	}, function(success, message) {
		if (!success) {
			console.log(message);
		}
	});
}

exports.mail_handler = function(req, res) {
	var body = req.body.body;
	var email = req.body.email;

	sendGrid(email, body)
	res.send('{ status: "ok" }');
}
