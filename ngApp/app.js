var weekFour;
(function (weekFour) {
    angular.module('week-four', ['ngResource', 'ui.router', 'ngMaterial'])
        .config(function ($resourceProvider, $stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            template: '<boxer-list></boxer-list>'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-purple')
            .accentPalette('orange')
            .backgroundPalette('pink')
            .dark();
    })
        .run(function () { });
})(weekFour || (weekFour = {}));
