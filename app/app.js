'use strict';

/**
 * @ngdoc overview
 * @name appServiceRegirty
 * @description
 * # appServiceRegirty
 *
 * Main module of the application.
 */
angular
  .module('appServiceRegirty', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider , $locationProvider) {
    $routeProvider
      .when('/computer_service_registry', {
        templateUrl: 'components/service_registry/srView.html',
        controller: 'SeriveRegisty'
      })

      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });
