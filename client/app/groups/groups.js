'use strict';

angular.module('worksppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/groups', {
        templateUrl: 'app/groups/groups.html',
        controller: 'GroupsCtrl',
        authenticate: true
      });
  });
