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
            .state('privacy', {
                url: '/privacy-policy',
                title: 'Privacy Policy',
                templateUrl: 'app/pgs/privacy-policy.html'
            })
    })
