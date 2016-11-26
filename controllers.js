// CONTROLLERS  
movieApp.controller('inputController',['$scope','$location','movieService',function($scope,$location,movieService){
    $scope.movies = movieService.movies;
    $scope.$watch('movies', function(){
        movieService.movies = $scope.movies
    });
    $scope.submit = function(){
        $location.path('/movies');
    };
}]);

movieApp.controller('movieController',['$scope','$resource','$routeParams','movieService','movieAPIService',function($scope,$resource,$routeParams,movieService,movieAPIService){
    $scope.movies = movieService.movies;
    
    $scope.movieOutput = movieAPIService.GetMovie($scope.movies);
  

}]);
