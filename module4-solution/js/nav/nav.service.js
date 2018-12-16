(function () {
    'use strict';

    angular.module('nav').service('NavService', NavService);

    function NavService() {
        var service = this;

        service.setPath = function (path) {
            service.tabs = path.map(function(node) { return node['name'] });
        };

        service.getTabs = function (state) {
            return state.get().filter(function (s) {
                return s.name !== '';
            }).map(function (s) {
                return {name: s.name, url: s.url, active: false};
            });
        }
    }

})();