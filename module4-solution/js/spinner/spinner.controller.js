(function () {
    'use strict';

    angular.module('spinner').controller('SpinnerController', SpinnerController);

    SpinnerController.$inject = ['$rootScope'];
    function SpinnerController($rootScope) {
        var $ctrl = this;
        $ctrl.show = false;

        var cancelListener = $rootScope.$on('spinner:toggle', function (event, data) {
            if (data.on)
                $ctrl.show = true;
            else
                $ctrl.show = false
        });

        $ctrl.$onDestroy = function () {
            cancelListener();
        }
    }
})();