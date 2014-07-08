'use strict'

angular.module('overtwitApp')
  .config ($stateProvider) ->
    $stateProvider
    .state('admin',
      url: '/admin',
      templateUrl: 'app/admin/admin.html'
      controller: 'AdminCtrl'
    )