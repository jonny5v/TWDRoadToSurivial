angular.module("twdApp",["ngRoute"])
.controller("Controller", function($scope, $route, $routeParams, $location, $rootScope) {
	$scope.$route = $route;
    $scope.$location = $location;

	$scope.menu= [
		{ title: "Characters", url: "/characters", glyphicon: "user" },
		{ title: "Weapons", url: "/weapons", glyphicon: "wrench" }
	];
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
