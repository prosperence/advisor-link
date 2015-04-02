'use strict';

angular.module('advisorLinkApp')
.controller('NavbarCtrl', function ($scope, $location, Auth) {
  $scope.menu = [{
    'title': 'Advisor Link',
    'link': 'main',
    'style': 'font-size:18px;',
    'shown': '!isLoggedIn()'
  }, {
    'title': 'Find an Advisor',
    'link': 'search',
    'shown': true
  }, {
    'title': 'Forum',
    'link': 'forum',
    'shown': true
  }];

  $scope.isCollapsed = true;
  $scope.isLoggedIn = Auth.isLoggedIn;
  $scope.isAdmin = Auth.isAdmin;
  $scope.getCurrentUser = Auth.getCurrentUser;

  $scope.logout = function() {
    Auth.logout();
    $location.path('/login');
  };

  $scope.isActive = function(route) {
    return route === $location.path();
  };
});
