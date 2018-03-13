'use strict';

/* Controllers */

var parking = angular.module('parking');

parking.controller('parkingController', ['$scope','$routeParams','parkingService','projection', function ($scope,$routeParams,parkingService,projection) {
    parkingService.getListParking().success(function (data) {

        var dataConv = projection.convert(data);

        angular.forEach(dataConv.data, function (item) {
            if (item.parking_id == $routeParams.id) {
                $scope.id = item.parking_id;
                $scope.nom = item.parking_nom;
                $scope.type = item.parking_type;
                $scope.nbplaces = item.parking_nb_places;
                $scope.marker= {
                    id : item.parking_id,
                    title: item.parking_nom,
                    position:"["+item.map_y+","+item.map_x+"]"
                }

            };

        });

    });
    }]);