(function () {
    'use script';

    angular.module('MenuApp').controller('ItemsTabController', ItemsTabController);

    ItemsTabController.$inject = ['$stateParams', 'items'];
    function ItemsTabController($stateParams, items) {
        var $ctrl = this;

        $ctrl.items = items.menu_items.map(function (i) {
            return {name: i.name, shortName: i.short_name, description: i.description, show: false}
        });

        $ctrl.category = $stateParams.shortName;

        $ctrl.toggleDescription = function (index) {
            let state = $ctrl.items[index].active;
            $ctrl.items[index].active = !state;
        };
    }
})();