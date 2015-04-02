'use strict';

angular.module('advisorLinkApp')
.config(function ($stateProvider) {
  $stateProvider
  .state('admin', {
    url: '/admin',
    templateUrl: 'app/admin/admin.html',
    controller: 'AdminCtrl'
  });
});
