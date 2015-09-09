'use strict';

angular.module('worksppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/lists', {
        templateUrl: 'app/lists/lists.html',
        controller: 'ListsCtrl',
        authenticate: true
      });
  });
