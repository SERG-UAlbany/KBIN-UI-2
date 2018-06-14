var myKbin = angular.module('myKbin', ['ngRoute', 'ngAnimate']);
myKbin.config(function ($routeProvider) {
   
    $routeProvider

            .when('/', {
                templateUrl: 'pages/login.html'
            })
            .when('/login', {
                templateUrl: 'pages/login.html'
            });
           
});


