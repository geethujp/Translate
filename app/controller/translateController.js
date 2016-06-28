(function() {
    'use strict';
    angular.module('translateApp')
        .controller('translateCtrl', translateCtrl);
    translateCtrl.$inject = ["$scope", "$rootScope","$translate"];

    function translateCtrl($scope, $rootScope) {
        $scope.names = [
            { name: 'Jani', country: 'Norway' },
            { name: 'Hege', country: 'Sweden' },
            { name: 'Kai', country: 'Denmark' }
        ];
        console.log($scope.names);
    }

 $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
})();
