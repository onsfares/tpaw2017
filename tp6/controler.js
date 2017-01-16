  angular.module("myapp", [])
        .controller("MyController", function($scope, $http) {
            $scope.myData = {};
            $scope.myData.doClick = function(item, event) {

                var responsePromise = $http.get("/angularjs-examples/json-test-data.jsp");

                responsePromise.success(function(data, status, headers, config) {
                    $scope.myData.fromServer = data.title;
                });
                responsePromise.error(function(data, status, headers, config) {
                    alert("AJAX failed!");
                });
            }


        } );
