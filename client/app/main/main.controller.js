'use strict';

angular.module('blogpianApp')
  .controller('MainCtrl', function ($scope, $http, socket, $location, ngDialog) {
    $scope.awesomeThings = [];
    $scope.posts = [];
    $scope.newPostDialog = null;

    $http.get('/api/posts').success(function(posts) {
      $scope.posts = posts;
      socket.syncUpdates('post', $scope.posts);
    });

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    //   socket.syncUpdates('thing', $scope.awesomeThings);
    // });

    $scope.addPost = function() {
      if ($scope.title === '') {
        return;
      }
      $http.post('/api/posts', { title: $scope.title, body: $scope.body });
      $scope.title = '';
      $scope.body = '';

      ngDialog.closeAll();
    };

    $scope.newPost = function() {
      // ngDialog.open({ template: 'newPost.html' });
      $scope.newPostDialog = ngDialog.open({ 
        template: 'new-post-template',
        controller: 'MainCtrl'
      });
    };

    $scope.closePostDialog = function() {
      ngDialog.closeAll();
    };

    $scope.viewPost = function(id) {
      $location.path('/view_post').search({id:id});
    };

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
