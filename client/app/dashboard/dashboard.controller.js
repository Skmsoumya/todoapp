'use strict';

angular.module('worksppApp')
  .controller('DashboardCtrl', function ($scope, Auth) {
    $scope.username = Auth.getCurrentUser().name;
  });
