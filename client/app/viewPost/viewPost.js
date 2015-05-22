'use strict';

angular.module('blogpianApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/view_post', {
        templateUrl: 'app/viewPost/viewPost.html',
        controller: 'ViewPostCtrl'
      });
  });
