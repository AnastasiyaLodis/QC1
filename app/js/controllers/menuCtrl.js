var menuApp = angular.module('menuApp',[]);
menuApp.controller('menuCtrl',
    function menuCtrl($scope, $http){

        $http.get('menu.json').success(function(data) {
            $scope.menu=data.menu;
        });
    }
)