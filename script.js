var app = angular.module('catDogModule', ['ngRoute']);

app.config(function($routeProvider){

  $routeProvider.when('/view1.html', {
    templateUrl: 'view1.html',

  });

  $routeProvider.when('/view2.html', {
    templateUrl: 'view2.html',

  });
});
