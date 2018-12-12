(function () {
    'use strict';

    angular.module('MenuApp').component('items', {
        templateUrl: 'templates/categoryitems.template.html',
        bindings: {
            list: '<'
        }
    });

})();