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
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.'
            }, {
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.'
            }, {
                name: 'MOTOROLA XOOM™',
                snippet: 'The Next, Next Generation tablet.'
            }
        ],
        this.nombre = 'Listado de teléfonos',
        this.query = '';
    }
})();
