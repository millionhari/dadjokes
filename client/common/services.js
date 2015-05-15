var chuckServices = angular.module('chuckMe.services', []);

chuckServices.factory('Jokes', function($http){
  
  // Get Joke
  var getJoke = function(){
    return $http({
      method: "GET",
      url: '/api/jokes'
    }).then(function(response){
      return response;
    }).catch(function(error){
      console.error('getJoke error', error);
    });
  };

  return {
    getJoke: getJoke
  };
});