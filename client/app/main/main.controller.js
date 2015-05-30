'use strict';

angular.module('blogpianApp')
  .controller('MainCtrl', function ($scope, $http, socket, $location) {
    $scope.awesomeThings = [];
    $scope.posts = [];

    $http.get('/api/posts').success(function(posts) {
      $scope.posts = posts;
      socket.syncUpdates('post', $scope.posts);
    });

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    //   socket.syncUpdates('thing', $scope.awesomeThings);
    // });

    $scope.closePostDialog = function() {
      ngDialog.closeAll();
    };

    $scope.viewPost = function(id) {
      $location.path('/view_post/' + id);
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

    $scope.shareWithTwitter = function() {
      wsh.exec({
        code: function() {
          apis.twitter.auth();
        },
        process: function(json, meta) {
          $('body').append(meta.view);
        }
      })
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
