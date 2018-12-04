(function () {
    'use strict';

    var app = angular.module('NarrowItDownApp', []);
    app.controller('NarrowItDownController', NarrowItDownController);
    app.service('MenuSearchService', MenuSearchService);
    app.directive('foundItems', FoundItemsDirective);
    app.value('menuUrl', "https://davids-restaurant.herokuapp.com/menu_items.json");

    function FoundItemsDirective () {
        var ddo = {
            scope: {
                foundItems: '<'
            },
            restrict: 'E',
            templateUrl: 'foundItems.html',
            controller: NarrowItDownController,
            controlerAs: 'menu',
            bindToController: true
        };

        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController (service) {
        var menu = this;

        var promise = service.getMatchedMenuItems('');
        promise.then(function (result) {
            menu.found = result;
            console.log(menu);
        });
    }

    MenuSearchService.$inject = ['$http', 'menuUrl'];
    function MenuSearchService ($http, menuUrl) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http.get(menuUrl).then(function (response) {
                return response.data['menu_items'];
            });
        }
    }
})();