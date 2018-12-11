(function () {
    'use strict';

    angular.module('data').value('config', {
        baseUrl: 'https://davids-restaurant.herokuapp.com',
        categoriesSuffix: '/categories.json',
        itemsSuffix: '/menu_items.json'
    });
})();