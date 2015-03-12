//var demoApp = angular.module('demoApp', []);

// demoApp.controller('demoController', ['$scope', '$http', function($scope, $http) {
//   $http.get('public/data/cs498rk.json').success(function(data) {
//     $scope.courseInfo = data;
//     $scope.artistOrder = 'name';
//   });
// }]);

var phonecatControllers = angular.module('phonecatControllers', []);
var mainApp = angular.module('mainApp', []);
mainApp.controller('picCtrl', ['$scope', '$http',
    function($scope, $http){
        $http.get('data/cars.json').success(function(data){
           $scope.phones = data;
        });
    }]);
phonecatControllers.service('favService', function(){
    this.fav = [];
    this.addfav = function(rank){
        this.fav.push(rank);
    }
    this.deletefav = function(rank){
        this.fav = this.fav.filter(function(e){
            return e !== rank;
        });
    }
});
phonecatControllers.controller('PhoneListCtrl',  ['$scope', '$http', 'favService',
    function ($scope, $http, favService) {
        $http.get('data/imdb250.json').success(function(data){
            $scope.phones = data;
        });
        $scope.fav = favService.fav;
        $scope.addfav = function(rank){
            favService.addfav(rank);
        };
        $scope.deletefav = function(rank) {
            favService.deletefav(rank);
        };
        $scope.orderProp = 'rank';
    }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
        $http.get('data/imdb250.json').success(function(data){
            $scope.phones = data;
        });
        $scope.rank = $routeParams.rank;
    }]);

phonecatControllers.controller('PhoneGalleryCtrl',  ['$scope', '$http',
    function ($scope, $http) {
        $http.get('data/imdb250.json').success(function(data){
            $scope.phones = data;
        });
        $scope.genre_selected = 'ALL';
    }]);