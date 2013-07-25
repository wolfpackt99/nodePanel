'use strict';

angular.module('PanelApp').
  directive('appNavigation', ['$location', function($location) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/directives/navigation'
    };
  }]);