'use strict';

/* Controllers */

var parking = angular.module('parking');

parking.factory('parkingService',['$http', function ($http) {
	
	var service={};
	
	service.getListParking = function (){
		return $http.get('json/sta_parking.json');
	};
	
	return service;
	
}]);