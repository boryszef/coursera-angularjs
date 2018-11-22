(function () {
    'use strict';

    var LunchCheckApp = angular.module('LunchCheck', []);

    LunchCheckApp.value('config', {
        'threshold': 3,
        'messages': {
            'init': ['', 'text-body'],
            'nodata': ['Please enter data first.', 'text-danger'],
            'enjoy': ['Enjoy!', 'text-success'],
            'toomuch': ['Too much!', 'text-success'],
        }
    });

    LunchCheckApp.controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope', 'config'];

    function LunchCheckController($scope, config) {
        $scope.display_items = "";
        $scope.check_output = config.messages.init[0];
        $scope.message_type = config.messages.init[1];

        $scope.runUpdate = function () {
            var items = updateItems($scope.display_items);
            var message = calculateMessage(items);
            $scope.check_output = message[0];
            $scope.message_type = message[1];
        };

        function updateItems(text) {
            var words = text.split(',');
            return words.filter(w => w.length);
        };

        function calculateMessage(items) {
            if (items.length == 0) {
                return config.messages['nodata'];
            }
            if (items.length <= config.threshold)
                return config.messages['enjoy'];
            else
                return config.messages['toomuch'];
        };

    };
})();