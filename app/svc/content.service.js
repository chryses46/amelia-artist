angular.module('amelia')
	.factory('ContentService', function($rootScope){
		var service = {};

		service.getImages = getImages;

		function getImages(){
			return http.get('/api/index.php/images').then(handleSuccess, handleError);
		};

		function getInsta(){
			return http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS-TOKEN').then(handleSuccess, handleError);
		}

		return service;



	})