angular.module('amelia')
    .controller('HomeController', function($stateParams, $location, $rootScope, $scope, ngDialog) {

        
        if ($stateParams.id > 0 ){
            $scope.currentIndex = $stateParams.id;
            console.log($stateParams.id);
        }else $scope.currentIndex = 0;
        
        console.log($scope.currentIndex)

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
        }

        $scope.setCurrentSlideIndex = function(index){
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function(index){
            return $scope.currentIndex == index;
        };
            
        $scope.prevSlide = function(){
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.portImages.length - 1;
        };

        $scope.nextSlide = function(){
            $scope.currentIndex = ($scope.currentIndex < $scope.portImages.length -1) ? ++$scope.currentIndex : 0;
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

        $scope.changeStyle = function(){
            if ($('#cssId').attr('href') == 'assets/css/style.css'){
                $('#cssId').attr('href', 'assets/css/bright-style.css');
                console.log($('#cssId').attr('href'));
            } else {
                $('#cssId').attr('href', 'assets/css/style.css');
                console.log($('#cssId').attr('href'));
            }
            
        }

         //Scroll to specific div
        $scope.gotoAnchor = function(div_id) {
            var old = $location.hash();
            $location.hash(div_id);
            anchorSmoothScroll.scrollTo(div_id);
            $location.hash(old);
        };

        //Go to Portfolio page w/image index
        $scope.portNav = function(index){
            $location.path('/portfolio' + index);
        }

    })
