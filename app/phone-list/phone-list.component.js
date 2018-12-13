(function() {
    'use strict';
    angular
        .module('phoneList')
        .component('phoneList', {
            //Definición del template
            templateUrl:'phone-list/phone-list.template.html',
            controller: PhoneListController
        });
        
    function PhoneListController() {
        this.phones = [
            {
                name: 'Huawei P20',
                snippet: 'Fast just got faster with Nexus S.',
                age: 1
            }, {
                name: 'IPhone 9',
                snippet: 'The Next, Next Generation tablet.',
                age: 2
            }, {
                name: 'Nokia 300',
                snippet: 'The Next, Next Generation tablet.',
                age: 3
            }
        ],
        this.nombre = 'Listado de teléfonos',
        this.query = '';
        this.orderProp = "age";
    }
})();
