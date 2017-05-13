//DECLARE MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//CONFIG FOR OPENWEATHERMAPS
weatherApp.config(['$sceDelegateProvider', function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://api.openweathermap.org/**'
    ]);
}])
