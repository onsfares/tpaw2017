var meteoApp= angular.module('meteoApp', ['ngRoute', 'meteoControllers'])
angular.module("myapp", [])
    .view("HelloController", function($scope) {
        $scope.helloTo = {};
        $scope.helloTo.title = "World, AngularJS";
    } );
