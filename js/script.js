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


var app = angular.module("clima",[])
app.controller("climaCtrl",function($scope,$rootScope,$http){


	$scope.sendData= function(x){
		$scope.ciudad = x;
		$scope.info= [];
		$http({
			method : "GET",
			url : "https://api.openweathermap.org/data/2.5/weather?q=".concat($scope.ciudad,'&appid=c1129a468f87761d13fb4d459a89b087')
		}).then(function(snapshot){
			$scope.info.push(snapshot);
			console.log(snapshot);
		})		
	}

		


});