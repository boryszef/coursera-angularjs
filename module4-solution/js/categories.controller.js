(function () {
    'use strict';

    angular.module('MenuApp').controller('CategoriesTabController', CategoriesTabController);

    CategoriesTabController.$inject = ['$state', 'BreadcrumbsService', 'categories'];
    function CategoriesTabController($state, BreadcrumbsService, categories) {
        var $ctrl = this;
        $ctrl.categories = categories;
        BreadcrumbsService.setPath($state.$current.path);
    }
})();