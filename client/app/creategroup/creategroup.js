'use strict';

angular.module('worksppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/creategroup', {
        templateUrl: 'app/creategroup/creategroup.html',
        controller: 'CreategroupCtrl'
      });
  });
