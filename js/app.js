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
.config(function($routeProvider) {
  $routeProvider
	.when("/characters", {
	    templateUrl: "views/characters.html"
	})
	.when("/weapons", {
    	templateUrl: "views/weapons.html"
	})
	.otherwise({
		redirectTo: "/characters"
	});
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