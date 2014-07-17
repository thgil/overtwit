'use strict'

angular.module('overtwitApp').config ($stateProvider) ->
  $stateProvider.state 'demo',
    url: '/demo'
    templateUrl: 'app/demo/demo.html'
    controller: 'DemoCtrl'
