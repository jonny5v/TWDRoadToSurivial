angular.module("twdApp",["ngRoute"])
.controller("Controller", function($scope, $route, $routeParams, $location, $http) {
	$scope.$route = $route;
    $scope.$location = $location;

    $http.get("https://spreadsheets.google.com/feeds/list/1zMDOJlHQLf5z2JVbmsckdIlBRHBKCEG1B0AcKSnk0ZE/1/public/values?alt=json")
    .success(function(data) {
    	$scope.menu = data.feed.entry;
    });

    $http.get("https://spreadsheets.google.com/feeds/list/1zMDOJlHQLf5z2JVbmsckdIlBRHBKCEG1B0AcKSnk0ZE/4/public/values?alt=json")
    .success(function(data) {
    	$scope.contributors = data.feed.entry;
    });

    $scope.notOther = function(source) {
		return (source.gsx$target.$t !== '_blank') ? true : false;
	};

	$scope.isOther = function(source) {
		return (source.gsx$target.$t === '_blank') ? true : false;
	};
}) 
.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when("/characters", {
		    templateUrl: "views/characters.html",
		    contoller: "viewController",
		    active: "characters"
		})
		.when("/weapons", {
	    	templateUrl: "views/weapons.html",
	    	contoller: "viewController",
		    active: "weapons"
		})
		.when("/comingsoon", {
			templateUrl: "views/comingsoon.html",
			controller: "viewController",
			active: "comingsoon"
		})
		.when("/contributions", {
			templateUrl: "views/contributions.html",
			controller: "viewController",
			active: "contributions"
		})
		.when("/404error", {
			templateUrl: "views/404error.html",
			controller: "viewController"
		})
		.when("/", {
			templateUrl: "views/home.html",
			controller: "viewController"
		})
		.otherwise("/404error");


		$locationProvider.html5Mode(true);
})
.controller("viewController", function($scope, $route) {
	$scope.$route = $route;
})
.directive("navbarTop", function() {
	return {
		restrict: "A",
		templateUrl: "views/navbarTop.html"
	};
})
.directive("navbarBottom", function() {
	return {
		restrict: "A",
		templateUrl: "views/navbarBottom.html"
	};
})
.directive("characterJs", function() {
	return {
		restrict: "E",
		templateUrl: "js/character.js"
	};
})
;
