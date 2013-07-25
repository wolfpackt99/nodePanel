'use strict';

angular.module('PanelApp').
  controller('appController', [
    '$scope','angularFire',
    function($scope, angularFire) {
      $scope.name = "Alarm Panel";
      var promise = angularFire('https://tdj-notification-panel.firebaseio.com/Panel', $scope, "firePanel", {});
      var socket = io.connect('http://localhost:3000');
      socket.on('news', function(data){
        console.log(data);
      });
      
      $scope.doSomethingParticular = function(){
        $scope.firePanel.IsArmed = !$scope.firePanel.IsArmed;
        socket.emit('tellDotNetToDoSomething', { IsArmed:  $scope.firePanel.IsArmed});
      }
    }

  ])