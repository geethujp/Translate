(function() {
    'use strict';
    var Routes = function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'app/partials/header.html'
                    },
                    'content': {
                        templateUrl: 'app/partials/content.html',
                        controller: 'translateCtrl'
                    },
                    'map': {
                        templateUrl: 'app/partials/map.html',
                        controller: 'mapCtrl'
                    },
                    'footer': {
                        templateUrl: 'app/partials/footer.html'
                    }
                }
            })
    }
    angular.module('translateApp')
        .config(Routes);
})();
