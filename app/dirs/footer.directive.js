 angular.module('amelia')
    .directive('footer', function() {
        return {
            restrict: 'A',
            scope: false,
            templateUrl: 'app/attrs/footer.html'
        };
    });
