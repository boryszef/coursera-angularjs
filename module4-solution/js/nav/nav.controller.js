(function () {
    'use strict';

    angular.module('nav').controller('NavController', NavController);

    NavController.$inject = ['NavService', '$state'];
    function NavController(NavService, $state) {
        var $ctrl = this;
        $ctrl.tabs = NavService.getTabs($state);
    }
})();