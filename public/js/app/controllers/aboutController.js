'use strict';

angular.module('PanelApp').
  controller('aboutController', [
    '$scope','angularFire',
    function($scope, angularFire) {
      $scope.name = "Alarm Panel";
      var socket = io.connect('http://localhost:3000');
      socket.on('my other event', function(data){
        console.log(data);
      });
    }
  ])