(function () {
    'use script';

    angular.module('MenuApp').controller('CategoryItemsTabController', CategoryItemsTabController);

    CategoryItemsTabController.$inject = ['items'];
    function CategoryItemsTabController(items) {
        var $ctrl = this;

        console.log(items);
    }
})();