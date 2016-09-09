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

        //Future Blog Post object - need JSON and data extraction for links

   /*     $scope.blogEntries = [{
            title: 'Publication!',
            date: '9/2/2016',
            post: 'I'm very excited and proud to announce that I have been published in the August/ September issue of <a href="http://imagesmagazine.net/aug-sept-2016/">Images Magazine</a>! Take a look at the amazing work that Logan Grey did on the featured shoots!'
        }]
    */
    
        //Eventually this will load images from BLOBS in DB
        $scope.getImages = function() {
        	return ContentService.getImages();
        };

        $scope.collapse = function(){
            console.log("clicked");
        };

        $scope.photoslider = function(){
            
        }
 

    })
