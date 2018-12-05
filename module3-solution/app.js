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
                items: '<',
                message: '<',
                onRemove: '&'
            },
            templateUrl: 'foundItems.html',
            controller: NarrowItDownController,
            controllerAs: 'menu',
            bindToController: true
        };

        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController (MenuSearchService) {
        var menu = this;
        menu.searchTerm = '';
        menu.message = '';
        menu.found = [];

        menu.narrowDown = function () {
            var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

            promise.then(function (response) {
                if (!response.length)
                    menu.message = "Nothing found";
                menu.found = response;
            });
        };

        menu.removeItem = function (index) {
            if (index < 0 || index >= menu.found.length)
                return;
            menu.found.splice(index, 1);
        }
    }

    MenuSearchService.$inject = ['$q', '$http', 'menuUrl'];
    function MenuSearchService ($q, $http, menuUrl) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            if (searchTerm === '')
                return $q(function (resolve, reject) {
                    resolve([]);
                });

            let promise = $http.get(menuUrl);

            function searchInDescription(item) {
                return item['description'].toLowerCase().includes(searchTerm);
            }

            return promise.then(function (response) {
                let items = response.data['menu_items'];
                return items.filter(searchInDescription);
            });
        }
    }
})();