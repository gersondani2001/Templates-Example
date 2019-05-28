//codigo del js de javaScript y de angular js tambien

$(document).ready(function(){
	console.log("jquery.js");
})

/*
$(document).ready(function(){
	$('#').click(function(){
		$('#').toggle();
		console.log("jquery.js");
	})
})
*/


var app = angular.module("app",[])
app.controller("appCtrl",function($scope,$rootScope){
	console.log("Angular.js")
	console.log("JavaScript.js")
});