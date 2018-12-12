(function (){
    'use strict';

    angular.module('data').service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http', 'config'];
    function MenuDataService($http, config) {
        var service = this;

        service.getAllCategories = function () {
            let url = config.baseUrl + config.categoriesSuffix;
            return $http.get(url).then(function (response) {
                return response.data;
            });
        };

        service.getItemsForCategory = function (short) {
            let url = config.baseUrl + config.itemsSuffix;
            let params = {
                category: short
            };
            return $http.get(url, {params: params}).then(function (response) {
                console.log(short, url, params);
                return response.data;
            });
        }
    }
})();