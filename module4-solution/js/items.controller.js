(function () {
    'use script';

    angular.module('MenuApp').controller('ItemsTabController', ItemsTabController);

    ItemsTabController.$inject = ['$state', 'BreadcrumbsService', 'items'];
    function ItemsTabController($state, BreadcrumbsService, items) {
        var $ctrl = this;
        $ctrl.items = items.menu_items;
        BreadcrumbsService.setPath($state.$current.path);
        console.log($state.$current);
    }
})();