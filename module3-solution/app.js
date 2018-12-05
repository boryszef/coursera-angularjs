(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .value('config', {
            menuUrl: 'https://davids-restaurant.herokuapp.com/menu_items.json',
            searchButtonText: 'Narrow It Down For Me!',
            progressText: 'In progress',
            notFoundText: 'Nothing found',
            rejectButtonText: 'Don\'t want this one!'
        });


    function FoundItemsDirective () {
        var ddo = {
            scope: {
                items: '<',
                message: '<',
                buttonText: '<',
                onRemove: '&'
            },
            templateUrl: 'foundItems.html',
            controller: NarrowItDownController,
            controllerAs: 'menu',
            bindToController: true
        };

        return ddo;
    }


    NarrowItDownController.$inject = ['MenuSearchService', 'config'];
    function NarrowItDownController (MenuSearchService, config) {
        var menu = this;
        menu.spinner = false;
        menu.buttonText = config.searchButtonText;
        menu.rejectText = config.rejectButtonText;
        menu.searchTerm = '';
        menu.message = '';
        menu.found = [];

        menu.updateMessage = function () {
            menu.message = menu.found.length ? '' : config.notFoundText;
        };

        menu.narrowDown = function () {
            menu.spinner = true;
            menu.buttonText = config.progressText;
            var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

            promise.then(function (response) {
                menu.found = response;
                menu.updateMessage();
                menu.spinner = false;
                menu.buttonText = config.searchButtonText;
            });
        };

        menu.removeItem = function (index) {
            if (index < 0 || index >= menu.found.length)
                return;
            menu.found.splice(index, 1);
            menu.updateMessage();
        }
    }


    MenuSearchService.$inject = ['$q', '$http', 'config'];
    function MenuSearchService ($q, $http, config) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            if (searchTerm === '')
                return $q(function (resolve, reject) {
                    resolve([]);
                });

            let promise = $http.get(config.menuUrl);

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