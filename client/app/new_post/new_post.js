'use strict';

angular.module('blogpianApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/new_post', {
        templateUrl: 'app/new_post/new_post.html',
        controller: 'NewPostCtrl'
      });
  });
