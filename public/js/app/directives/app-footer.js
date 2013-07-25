'use strict';

angular.module('PanelApp').
  directive('appFooter', ['$location', function($location) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/directives/footer'
    };
  }]);