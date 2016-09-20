angular.module('amelia')
	.factory('HomeService', function($rootScope){
		var service = {
			currentIndex: 0,
			
			
			SaveState: function(){
				sessionStorage.homeService = currentIndex
			},

			RestoreState: function(){
				currentIndex = sessionStorage.homeService
			}
		}

		$rootScope.on("savestate", service.SaveState);
		$rootScope.on("restorestate", service.RestoreState);

		return service;

	})
