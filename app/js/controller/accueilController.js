'use strict';

/* Controllers */

var parking = angular.module('parking');

parking.controller('accueilController', ['$scope','parkingService','projection','$filter', function ($scope,parkingService,projection,filter) {

	parkingService.getListParking().then(function(response){
        var dataConvert = projection.convert(response.data);
        $scope.listParking = dataConvert;
        $scope.displayParking = dataConvert;

		$scope.predicates = ['parking_nom', 'parking_type'];
		
		$scope.selectedPredicate = $scope.predicates[0];
	});
}]);

parking.filter('unique', function() {
    return function (arr, field) {
        var o = {}, i, l = arr.length, r = [];
        for(i=0; i<l;i+=1) {
            o[arr[i][field]] = arr[i];
        }
        for(i in o) {
            r.push(o[i]);
        }
        return r;
    };
});

