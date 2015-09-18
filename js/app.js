angular.module("twdApp",["ngRoute"])
.controller("Controller", function($scope, $route, $routeParams, $location, $http) {
	$scope.$route = $route;
    $scope.$location = $location;

    $http.get("https://spreadsheets.google.com/feeds/list/1zMDOJlHQLf5z2JVbmsckdIlBRHBKCEG1B0AcKSnk0ZE/1/public/values?alt=json").success(function(data) {
    	$scope.menu = data.feed.entry;
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
		.otherwise("/characters");


		$locationProvider.html5Mode(false);
})
.controller("viewController", function($scope, $route) {
	$scope.$route = $route;
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
