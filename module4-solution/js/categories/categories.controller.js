(function () {
    'use strict';

    angular.module('MenuApp').controller('CategoriesTabController', CategoriesTabController);

    CategoriesTabController.$inject = ['$state', 'categories'];
    function CategoriesTabController($state, categories) {
        var $ctrl = this;
        $ctrl.categories = categories;
        //BreadcrumbsService.setPath($state.$current.path);
    }
})();