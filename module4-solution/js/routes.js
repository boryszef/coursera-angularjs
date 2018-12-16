(function () {
    'use strict';

    angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
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
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('items', {
                url: '/categories/{shortName:[A-Z0-9]{1,4}}',
                templateUrl: 'templates/items-tab.template.html',
                controller: 'ItemsTabController',
                controllerAs: '$ctrl',
                resolve: {
                    items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.shortName);
                    }]
                }
            });
    }
})();