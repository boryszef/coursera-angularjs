(function () {
    'use strict';

    angular.module('public').service('newsletterService', newsletterService);

    function newsletterService() {
        var service = this;
        service.recipient = undefined;

        service.saveRecipient = function (customer) {
            service.recipient = customer;
        };

        service.getRecipient = function () {
            return service.recipient;
        }
    }
})();