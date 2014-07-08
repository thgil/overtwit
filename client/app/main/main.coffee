'use strict'

angular.module('overtwitApp')
  .config ($stateProvider) ->
    $stateProvider
    .state('main',
      url: '/',
      templateUrl: 'app/main/main.html'
      controller: 'MainCtrl'
    )