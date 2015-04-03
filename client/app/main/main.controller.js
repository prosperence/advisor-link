'use strict';

angular.module('advisorLinkApp')
.controller('MainCtrl', function ($scope, $http, socket, Auth) {
  $scope.user = Auth.getCurrentUser();
});
