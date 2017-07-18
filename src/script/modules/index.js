var app = angular.module("indexApp", ["ngRoute"]);
	
	app.config(function($routeProvider){
		$routeProvider.when("/main",{
			templateUrl: './_page/index-main.html',
    		controller: 'indexMainCon'
		}).when("/A0",{
			templateUrl: './_page/index-proMan.html',
    		controller: 'proManCon'
		}).when("/A1",{
			templateUrl: './_page/index-proTypeMan.html',
    		controller: ''
		}).when("/A2",{
			templateUrl: './_page/index-proTypeMan.html',
    		controller: ''
		}).when("/B0",{
			templateUrl: './_page/index-imgMan.html',
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
