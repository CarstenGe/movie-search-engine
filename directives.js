// DIRECTIVE
movieApp.directive('movieResults',function(){
    return {
        templateUrl: 'directive/movieResults.html',
        replace: true,
        scope: {
            movieRating: '='
        }
    }
});