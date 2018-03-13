'use strict';
angular.module('parking')
    .factory('projection', function() {

        var source = new proj4.Proj('+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
        var destination = new proj4.Proj('EPSG:4326');

        var latLon ='';

        return {
            convert: function(data){
                angular.forEach(data.data,function(parking){
                    latLon = proj4.transform(source, destination,new proj4.toPoint([parking.parking_x, parking.parking_y]));
                    parking.map_x = latLon.x;
                    parking.map_y = latLon.y;
                    //console.log(parking);
                });
                return data;
            }
        };
    });