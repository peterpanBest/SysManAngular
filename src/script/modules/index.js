var app = angular.module("indexApp", ["ngRoute"]);
	
	app.config(function($routeProvider){
		$routeProvider.when("/main",{
			templateUrl: './index-main.html',
    		controller: 'indexMainCon'
		}).when("/A0",{
			templateUrl: './index-proMan.html',
    		controller: 'proManCon'
		}).when("/A1",{
			templateUrl: './index-proTypeMan.html',
    		controller: ''
		}).when("/A2",{
			templateUrl: './index-proTypeMan.html',
    		controller: ''
		});
	});
	
	
	
	app.run(function($rootScope, $location){
		$rootScope.pageTo=function(hash){
			$rootScope.hash=hash;
			$location.path(hash);
			console.log(hash);
		}
		$rootScope.pageTo("main");
	});
