'use strict';

angular.module('advisorLinkApp')
.config(function ($stateProvider) {
  $stateProvider
  .state('client', {
    url: '/client',
    templateUrl: 'app/main/client/client.html',
    controller: 'ClientCtrl'
  });
});
