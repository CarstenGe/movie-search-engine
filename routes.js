// ROUTES
movieApp.config(function($routeProvider){
    $routeProvider

    .when('/',{
        templateUrl:'pages/home.html',
        controller:'inputController'
    })
    .when('/movies',{
        templateUrl:'pages/movies.html',
        controller:'movieController'
    })
});