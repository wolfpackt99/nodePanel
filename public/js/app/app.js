'use strict';

// Declare app level module which depends on filters, and services
angular.module('PanelApp', [
	'ngResource',
	'$strap.directives',
	'firebase'
	]).
	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    // <base href="/studio/">

	$routeProvider.

	when("/app/home", {
			templateUrl: "/app/home/index",
			controller: "appController"
   }).
	when("/app/about", {
			templateUrl: "/app/about/index",
			controller: "aboutController"
   }).

		otherwise({redirectTo: "/app/home"});

		$locationProvider.html5Mode(true).hashPrefix('!');
}])