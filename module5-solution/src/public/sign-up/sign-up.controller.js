(function () {
    'use strict';

    angular.module('public').controller('signUpController', signUpController);

    signUpController.$inject = ['newsletterService'];
    function signUpController(newsletterService) {
        var ctrl = this;

        ctrl.submit = function () {
            newsletterService.saveRecipient({
                firstName: ctrl.firstName,
                lastName: ctrl.lastName,
                email: ctrl.email,
                phone: ctrl.phone,
                favourite: ctrl.favourite
            });
        };
    }
})();