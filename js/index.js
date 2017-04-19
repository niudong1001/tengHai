var urlBase="127.0.0.1/"
var login=angular.module("login",[]);

login.controller("loginCtrl",function($scope,$http){
	$scope.user="niudong";
	$scope.pasw="niudong";
	$scope.login=function(){
		$http.get(urlBase+"login").success(function(res){
			$scope.test=res.data;
		});
	}
	
});
