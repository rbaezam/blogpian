'use strict';

var RESPONSE = [
  {
    "title": "first post",
    "body": "body of first post",
    "created_at": new Date(),
    "active": true,
    "user": "test@email.com"
  }
];

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('blogpianApp'));
  beforeEach(module('socketMock'));

  var MainCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/posts')
      .respond(RESPONSE);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of posts to the scope', function () {
    $httpBackend.flush();
    expect(scope.posts.length).toBe(1);
  });
});
