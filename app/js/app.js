'use strict';

angular.module('OpendataApp', ['ngRoute', 'parking','ngMap', 'ui.bootstrap', 'smart-table'])
    .config(function ($routeProvider) {
        $routeProvider.when('/parking/:id', {templateUrl: 'views/parking.html', controller: 'parkingController'});
		$routeProvider.when('/', {templateUrl: 'views/accueil.html', controller: 'accueilController'});
        $routeProvider.otherwise({redirectTo: '/'});

    });

angular.module('parking',[]);