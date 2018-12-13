(function() {
    'use strict';
    angular
        .module('phoneList')
        .component('phoneList', {
            //Definición del template
            templateUrl:'phone-list/phone-list.template.html',
            controller: PhoneListController
        });
        
    function PhoneListController($http) {
        var self = this;
        $http.get('phones/phones.json').then(function(response) {
            self.phones = response.data;
        });
        self.nombre = 'Listado de teléfonos',
        self.query = '';
        self.orderProp = "age";
    };
    // Como pasar parámetros a una función.
    PhoneListController.$inject = ['$http'];
})();
