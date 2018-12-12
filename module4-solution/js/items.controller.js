(function () {
    'use script';

    angular.module('MenuApp').controller('ItemsTabController', ItemsTabController);

    ItemsTabController.$inject = ['items'];
    function ItemsTabController(items) {
        var $ctrl = this;

        $ctrl.items = items.menu_items;
    }
})();