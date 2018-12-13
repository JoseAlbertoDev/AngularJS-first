(function() {
    'use strict';

    angular
        .module('phoneDetails')
        .component('phoneDetails', {
            templateUrl:'phone-details/phone-details.template.html',
            controller: PhoneDetailsController
        });

    PhoneDetailsController.$inject = ['$routeParams'];
    function PhoneDetailsController($routeParams) {
        self = this;
        self.phoneId = $routeParams.phoneId;
    }


})();