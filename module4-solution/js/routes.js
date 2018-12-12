(function () {
    'use strict';

    angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            // Home page
            .state('home', {
                url: '/',
                templateUrl: 'templates/home-tab.template.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'templates/categories-tab.template.html',
                controller: 'CategoriesTabController',
                controllerAs: '$ctrl',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            });
    }
})();