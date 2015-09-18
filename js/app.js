angular.module("twdApp",["ngRoute"])
.controller("Controller", function($scope, $route, $routeParams, $location) {
	$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.index = "index.html";

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
	.otherwise({
		redirectTo: "/characters"
	});

	$locationProvider.html5Mode(true);
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
