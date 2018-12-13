(function() {
    // Tests del componente
    'use strict';

    // Usamos el nombre del componente con guión en documentos HTML o en este punto, pero 
    // por norma general usaremos camelCase phoneList
    describe('phone-list', function() {
        
        beforeEach(module('phoneList'));

        describe('PhoneListController', TestPhoneListController);
    });

    function TestPhoneListController() {
        var ctrl;

        beforeEach(inject(function($componentController){
            ctrl = $componentController('phoneList');
        }));

        it('lista con 3 teléfonos', function () {
            expect(ctrl.phones.length).toBe(3);
        });

        it('order tiene que ser age', function() {
            expect(ctrl.orderProp).toBe('age');
        });
    }
    
})();