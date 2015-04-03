'use strict';

angular.module('advisorLinkApp')
.config(function ($stateProvider) {
  $stateProvider
  .state('advisor', {
    url: '/advisor',
    templateUrl: 'app/main/advisor/advisor.html',
    controller: 'AdvisorCtrl'
  });
});
