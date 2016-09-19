angular.module('amelia')
    .controller('HomeController', function($scope, ngDialog) {

        $scope.currentIndex = 0;

        //Array of imgs for Portfolio Section
        $scope.portImages = [{
        		loc: '/assets/img/portImgs/newSet1.jpg',
        		photog: 'Logan Grey'
        	},{ 
        		loc: '/assets/img/portImgs/newSet2.jpg',
        		photog: 'Logan Grey'
        	},{
        		loc: '/assets/img/portImgs/newSet3.jpg',
        		photog: 'Logan Grey'
        	},{
        		loc: '/assets/img/portImgs/newSet4.jpg',
        		photog: 'Logan Grey'
        	},{
        		loc: '/assets/img/portImgs/newSet5.jpg',
        		photog: 'Matthew Freed'
        	},{
        		loc: '/assets/img/portImgs/newSet6.jpg',
        		photog: 'Tim Bracey'
        	},{
                loc: '/assets/img/portImgs/newSet7.jpg',
                photog: 'Logan Grey'
            },{
                loc: '/assets/img/portImgs/newSet8.jpg',
                photog: 'Logan Grey'
            }];

        

        $scope.openSlider= function(index){
            $scope.currentIndex = index;
            ngDialog.open({ template: 'photoSlider' });
        }

        $scope.setCurrentSlideIndex = function(index){
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function(index){
            return $scope.currentIndex === index;
        };
            
        $scope.prevSlide = function(){
            $scope.currentIndex = ($scope.currentIndex < $scope.portImages.length -1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function(){
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.portImages.length - 1;
        };

        /* Eventually this will load images from BLOBS in DB
        $scope.getImages = function() {
            return ContentService.getImages();
        };
        */

        /* Eventually this will collapse mobile sections by clicking the up arrow. Maybe
        $scope.collapse = function(){
            console.log("clicked");
        };
        */

    })
