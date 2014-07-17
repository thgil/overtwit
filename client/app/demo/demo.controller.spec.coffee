'use strict'

describe 'Controller: DemoCtrl', ->

  # load the controller's module
  beforeEach module('overtwitApp')
  DemoCtrl = undefined
  scope = undefined

  # Initialize the controller and a mock scope
  beforeEach inject(($controller, $rootScope) ->
    scope = $rootScope.$new()
    DemoCtrl = $controller('DemoCtrl',
      $scope: scope
    )
  )
  it 'should ...', ->
    expect(1).toEqual 1
