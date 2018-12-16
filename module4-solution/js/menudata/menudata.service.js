(function (){
    'use strict';

    angular.module('data').service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http', '$rootScope', 'config'];
    function MenuDataService($http, $rootScope, config) {
        var service = this;

        service.getAllCategories = function () {
            let url = config.baseUrl + config.categoriesSuffix;
            $rootScope.$broadcast('spinner:toggle', {on: true});
            return $http.get(url).then(function (response) {
                $rootScope.$broadcast('spinner:toggle', {on: false});
                return response.data;
            });
        };

        service.getItemsForCategory = function (short) {
            let url = config.baseUrl + config.itemsSuffix;
            let params = {
                category: short
            };
            $rootScope.$broadcast('spinner:toggle', {on: true});
            return $http.get(url, {params: params}).then(function (response) {
                $rootScope.$broadcast('spinner:toggle', {on: false});
                return response.data;
            });
        }
    }
})();