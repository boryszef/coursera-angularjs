(function () {
    'use strict';

    angular.module('public').controller('signUpController', signUpController);

    signUpController.$inject = ['newsletterService', 'MenuService'];
    function signUpController(newsletterService, MenuService) {
        var ctrl = this;
        ctrl.dataSaved = false;
        ctrl.favouriteValid = true;

        ctrl.submit = function () {
            newsletterService.saveRecipient({
                firstName: ctrl.firstName,
                lastName: ctrl.lastName,
                email: ctrl.email,
                phone: ctrl.phone,
                favourite: ctrl.favourite
            });

            MenuService.getSingleItem(ctrl.favourite).then(function () {
                ctrl.favouriteValid = true;
            }, function (x) {
                ctrl.favouriteValid = false;
            });

            ctrl.dataSaved = true;
        };
    }
})();