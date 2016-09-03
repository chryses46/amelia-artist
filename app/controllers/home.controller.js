angular.module('amelia')
    .controller('HomeController', function($scope, ContentService) {

        //Array of imgs for Portfolio Section
        $scope.portImages = [{
        		loc: '/assets/img/portImgs/set1.jpg',
        		photog: 'Logan Grey'
        	},{ 
        		loc: '/assets/img/portImgs/set2.jpg',
        		photog: 'Logan Grey'
        	},{
        		loc: '/assets/img/portImgs/set3.jpg',
        		photog: 'Logan Grey'
        	},{
        		loc: '/assets/img/portImgs/set4.jpg',
        		photog: 'Logan Grey'
        	},{
        		loc: '/assets/img/portImgs/set5.jpg',
        		photog: 'Logan Grey'
        	},{
        		loc: '/assets/img/portImgs/set6.jpg',
        		photog: 'Logan Grey'
        	}];

        //Eventually this will load images from BLOBS in DB
        $scope.getImages = function() {
        	return ContentService.getImages();
        };

        $scope.collapse = function(){
            console.log("clicked");
        };
 

    })
