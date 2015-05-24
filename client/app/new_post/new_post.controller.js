'use strict';

angular.module('blogpianApp')
  .controller('NewPostCtrl', function ($scope, $location, $http, Auth) {
    $scope.message = 'Hello';

    $scope.returnToHome = function() {
      $location.path('/');
    };

    $scope.addPost = function() {
      if ($scope.title === '') {
        return;
      }

      var user = Auth.getCurrentUser().email;
      $http.post('/api/posts', { title: $scope.title, body: $scope.body, user: user });
      $scope.title = '';
      $scope.body = '';

      $location.path('/');
    };
  });
