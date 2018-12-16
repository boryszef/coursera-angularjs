(function () {
    'use script';

    angular.module('MenuApp').controller('ItemsTabController', ItemsTabController);

    ItemsTabController.$inject = ['$state', 'items'];
    function ItemsTabController($state, items) {
        var $ctrl = this;
        $ctrl.items = items.menu_items;
        //BreadcrumbsService.setPath($state.$current.path);
    }
})();