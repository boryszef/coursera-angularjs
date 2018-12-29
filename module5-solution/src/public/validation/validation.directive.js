(function () {
    'use strict';

    angular.module('validation').directive('validItem', validItemDirective);

    validItemDirective.$inject = ['$q', 'MenuService'];
    function validItemDirective($q, MenuService) {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$asyncValidators.validItem = function (modelValue, viewValue) {
                    if (ctrl.$isEmpty(viewValue)) {
                        return $q.resolve();
                    }
                    return MenuService.getSingleItem(viewValue);
                }
            }
        };
    }

})();