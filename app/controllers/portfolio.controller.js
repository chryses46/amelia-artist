angular.module('amelia')
    .controller('PortfolioController', function($rootScope, $scope, ngDialog) {

    	$scope.currentIndex = 0;
        

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

        $scope.changeStyle = function(){
            if ($('#cssId').attr('href') == 'assets/css/style.css'){
                $('#cssId').attr('href', 'assets/css/bright-style.css');
                console.log($('#cssId').attr('href'));
            } else {
                $('#cssId').attr('href', 'assets/css/style.css');
                console.log($('#cssId').attr('href'));
            }
            
        }

    })