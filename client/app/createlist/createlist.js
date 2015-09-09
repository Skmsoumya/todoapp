'use strict';

angular.module('worksppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/createlist', {
        templateUrl: 'app/createlist/createlist.html',
        controller: 'CreatelistCtrl'
      });
  });
