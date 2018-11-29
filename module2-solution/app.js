(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListService', ShoppingListService);

    ToBuyController.$inject = ['ShoppingListService'];
    function ToBuyController(ShoppingListService) {
        var buy_list = this;

        buy_list.data = ShoppingListService.getItems('buyme');
        buy_list.tickItem = ShoppingListService.tickItem;
    }

    AlreadyBoughtController.$inject = ['ShoppingListService'];
    function AlreadyBoughtController(ShoppingListService) {
        var bought_list = this;

        bought_list.data = ShoppingListService.getItems('bought');
    }

    function ShoppingListService() {
        var service = this;

        service.buyme = [
            {name: "Bread", quantity: 1},
            {name: "Butter", quantity: 0},
            {name: "Lettuce", quantity: 2},
            {name: "Yogurt", quantity: 3},
            {name: "Apple", quantity: 2},
        ];
        service.bought = [
        ];

        service.getItems = function (list_name) {
            return service[list_name];
        }

        service.isEmpty = function (list_name) {
            return service[list_name].length === 0;
        }

        service.tickItem = function (item_id) {
            var item = service.buyme.splice(item_id, 1);
            service.bought.push(item[0]);
        }
    }

})();