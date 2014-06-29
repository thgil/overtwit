'use strict'

angular.module('overtwitApp')
  .factory 'Session', ($resource) ->
    $resource '/api/session/'
