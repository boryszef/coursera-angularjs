(function () {
    'use strict';

    angular.module('MenuApp').controller('CategoriesTabController', CategoriesTabController);

    CategoriesTabController.$inject = ['categories'];
    function CategoriesTabController(categories) {
        var $ctrl = this;
        $ctrl.categories = categories;
    }
})();