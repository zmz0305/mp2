var phonecatApp = angular.module('phonecatApp', ['ngRoute','phonecatControllers', 'ngAnimate']);
var mainApp = angular.module('mainApp', []);
phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/list', {
                templateUrl: 'partials/list.html',
                controller: 'PhoneListCtrl'
            }).
            when('/detail/:rank', {
                templateUrl: 'partials/details.html',
                controller: 'PhoneDetailCtrl'
            }).
            when('/gallery', {
                templateUrl: 'partials/gallery.html',
                controller: 'PhoneGalleryCtrl'
            }).
            when('/fav', {
                templateUrl: 'partials/favorite.html',
                controller: 'PhoneListCtrl'
            }).
            otherwise({
                redirectTo: '/list'
            });
    }]);
//mainApp.directive('fade',function($timeout){
//    return {
//        restrict: 'A',
//        link: function(scope,element,attrs) {
//            $timeout(function() {
//                $(element).slick(scope.$eval(attrs.slickSlider));
//            });
//        }
//    }
//});