'use strict';

angular.module('worksppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard/:username', {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        activetab: 'dashboard',
        authenticated: true
      });
  });
