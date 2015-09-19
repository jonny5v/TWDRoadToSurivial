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


		$locationProvider.html5Mode(false);
})
.controller("viewController", function($scope, $route) {
	$scope.$route = $route;

	$scope.isReddit = function(source) {
		return (source.gsx$type.$t === 'reddit') ? true : false;
	};

	$scope.isOwner = function(source) {
		return (source.gsx$type.$t === 'owner') ? true : false;
	};
})
.directive("navBar", function() {
	return {
		restrict: "A",
		templateUrl: "views/navbar.html"
	}
})
.directive("characterJs", function() {
	return {
		restrict: "E",
		templateUrl: "js/character.js"
	}
})
;
