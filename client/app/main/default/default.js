'use strict';

angular.module('advisorLinkApp')
.config(function ($stateProvider) {
  $stateProvider
  .state('default', {
    url: '/default',
    templateUrl: 'app/main/default/default.html',
    controller: 'DefaultCtrl'
  });
});
