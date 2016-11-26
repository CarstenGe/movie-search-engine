// SERVICES
movieApp.service('movieService', function(){
    this.movies='';

});
movieApp.service('movieAPIService',['$resource', function($resource){
	this.GetMovie=function(movies){
		var movieAPI = $resource("https://api.themoviedb.org/3/search/movie",{
        	callback: "JSON_CALLBACK" }, { get: {method:"JSONP"}});
    	return movieAPI.get({api_key: "47cf1809eb93d680dda39d936c589f68", query: movies });
	};
}]);

