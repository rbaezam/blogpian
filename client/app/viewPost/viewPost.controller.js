'use strict';

angular.module('blogpianApp')
  .controller('ViewPostCtrl', function ($scope, $http, socket, $location, $routeParams) {
    $scope.post = null;

    init();

    function init() {
      $http.get('/api/posts', {params: {id:$routeParams.id}}).success(function(posts) {
        if (posts.length > 0) {
          $scope.post = posts[0];
          socket.syncUpdates('post', $scope.post);
        }
      });
    };

    $scope.returnListing = function() {
      $location.path('/');
      $location.url($location.path());
    };
  });
