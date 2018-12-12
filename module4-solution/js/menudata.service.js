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

        service.getItemsForCategory = function () {
            let url = config.base
        }
    }
})();