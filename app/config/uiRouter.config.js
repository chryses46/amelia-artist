angular.module('amelia')
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                controller: 'HomeController',
                title: 'Home',
                templateUrl: 'app/pgs/home.html'
            })
            .state('portfolio', {
                url: '/portfolio',
                title: 'Portfolio',
                templateUrl: 'app/pgs/portfolio.html'
            })
    })
