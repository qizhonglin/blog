(function() {
    'use strict';

    angular
        .module('blogApp')
        .controller('EntryDetailController', EntryDetailController);

    EntryDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Entry', 'Blog', 'Tag'];

    function EntryDetailController($scope, $rootScope, $stateParams, entity, Entry, Blog, Tag) {
        var vm = this;
        vm.entry = entity;
        
        var unsubscribe = $rootScope.$on('blogApp:entryUpdate', function(event, result) {
            vm.entry = result;
        });
        $scope.$on('$destroy', unsubscribe);

    }
})();
