
/*
 * GET home page.
 */
 var http = require('http');
 var request = require('request');
 var url_call = "http://access.alchemyapi.com/calls/url/";
 var api_key = "5d94ddbd598dbd02d431d6fb9f91261f6b1fd88f";
 var url_part = "&url=";
 var cquery_part = "&cquery="
 var outputJSON = "&outputMode=json";



 exports.index = function(req, res){
 	var keyword = {};
 	res.render('index', { title: 'Express', keywords: keyword});


 };

 exports.post_handler = function(req, res){

 	var url = req['body']['urlInput'];
 	var type = req['body']['type_of_response'];
 	var constraintQuery = req['body']['contentFind'];
 	

 	if(type != 'URLGetConstraintQuery'){
 		non_constraint_query(type, url, res);
 	} else {
 		constraint_query(type , url, constraintQuery, res);

 	}
 };

 function non_constraint_query(type, url, res){
 	var myRequest = url_call+type+'?apikey='+api_key+url_part+url+outputJSON;
 	request(myRequest, function(error, response, body){
 		var data = JSON.parse(body);
 		var information = [];
 		var titles = "";
 		if(type == 'URLGetAuthor'){
 			information.push(data.author);
 			titles = "Author";


 		}
 		if(type == 'URLGetRankedKeywords'){
 			for(x in data.keywords){
 				information.push(data.keywords[x].text);
 				titles = "keyword"

 			}

 		}
 		res.render('index', { title: titles, keywords: information, type: "regular"});
 	});
 }

 function constraint_query(type, url, query, res){
 	var myRequest = url_call+type+'?apikey='+api_key+url_part+url+cquery_part+query+outputJSON;
 	request(myRequest, function(error, response, body){
 		var data = JSON.parse(body);
 		var resultText_Links = [];
 		var information = [];
 		for(x in data.queryResults){
 			resultText_Links.push(data.queryResults[x].resultURL)
 			resultText_Links.push(data.queryResults[x].resultText)
 			console.log(resultText_Links[0] + " " + resultText_Links[1]);
 			information.push(resultText_Links);
 			resultText_Links = [];
 		}

 		res.render('index', {title: "Constraint Query", keywords: information});
 	});

 }
