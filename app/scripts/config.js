(function() {
    'use strict';

    var Config = function($translateProvider) {
        $translateProvider.translations('en', {
            'TITLE': 'Hello',
            'FOO': 'This is a paragraph'
        });

        $translateProvider.translations('de', {
            'TITLE': 'Hallo',
            'FOO': 'Dies ist ein Absatz'
        });

        $translateProvider.preferredLanguage('en');
    };
    angular.module('translateApp')
        .config(Config);
})();
