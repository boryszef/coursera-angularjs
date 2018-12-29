(function () {
    'use strict';

    angular.module('public').controller('myInfoController', myInfoController);

    myInfoController.$inject = ['newsletterService', 'MenuService'];
    function myInfoController(newsletterService, MenuService) {
        var ctrl = this;
        ctrl.favourite = undefined;

        ctrl.customer = newsletterService.getRecipient();

        if (ctrl.customer !== undefined) {
            MenuService.getSingleItem(ctrl.customer.favourite).then(function (data) {
                ctrl.favourite = data;
            });
        }
    }
})();