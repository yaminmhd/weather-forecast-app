//CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){
  $scope.city = cityService.city;
  //create a watch to check for changes to the input
  $scope.$watch('city', function(){
    cityService.city = $scope.city;
  });

  $scope.submit = function(){
    $location.path("/forecast");
  }

}]);

weatherApp.controller('forecastController',['$scope', 'cityService', '$resource', '$routeParams',function($scope, cityService, $resource, $routeParams){
  $scope.city = cityService.city;
  $scope.days = $routeParams.days || '2';
  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?appid=aa8a2a3fc38a1705a64b1f1286f9db88", {get:{method: "JSONP"}});

  $scope.weatherResult = $scope.weatherAPI.get({q:$scope.city, cnt: $scope.days});

  //create a conversion function for temp kelvins to celsius
  $scope.convertToCelcius = function(degK){
    return Math.round(degK - 273.15);
  };

  //create a date formatter function
  $scope.convertToDate = function(dt){
    return new Date(dt * 1000);
  }

}]);
