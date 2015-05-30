'use strict';

describe('Controller: ViewPostCtrl', function () {

  // load the controller's module
  beforeEach(module('blogpianApp'));

  var ViewPostCtrl, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    scope = $rootScope.$new();
    ViewPostCtrl = $controller('ViewPostCtrl', {
      $scope: scope
    });
  }));

});
