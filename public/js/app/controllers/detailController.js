'use strict';

angular.module('PanelApp').
  controller('detailController', [
    '$scope','angularFire',
    function($scope, angularFire) {
      $scope.name = "Alarm Panel";
      var promise = angularFire('https://tdj-notification-panel.firebaseio.com/Panel', $scope, "firePanel", {});
      var socket = io.connect('http://localhost:3000');
      socket.emit('tellDotNetToDoSomething', 411);
      
      $scope.getPanelStatus = function()
      {
        socket.emit('tellDotNetToDoSomething', 411);
      }
    }
  ])