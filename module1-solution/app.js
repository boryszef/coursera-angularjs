(function () {
    'use strict';

    var LunchCheckApp = angular.module('LunchCheck', []);

    LunchCheckApp.value('config', {
        'threshold': 3
    });

    LunchCheckApp.controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope', 'config'];

    function LunchCheckController($scope, config) {
        $scope.display_items = "";
        $scope.check_output = "";

        $scope.runUpdate = function () {
            var items = updateItems($scope.display_items);
            var check_text = calculateCheckText(items);
            $scope.check_output = check_text;
        };

        function updateItems(text) {
            var words = text.split(',');
            return words.filter(w => w.length);
        };

        function calculateCheckText(items) {
            console.log(items);
            if (items.length == 0) {
                return "Please enter data first.";
            }
            if (items.length <= config.threshold)
                return "Enjoy!";
            else
                return "Too much!";
        };

    };
})();