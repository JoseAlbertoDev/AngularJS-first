(function() {
    // Tests del componente
    'use strict';

    // Usamos el nombre del componente con guión en documentos HTML o en este punto, pero 
    // por norma general usaremos camelCase phoneList
    describe('phone-list', function() {
        
        beforeEach(module('phoneList'));

        describe('PhoneListController', function() {
            it('comprobando longitud', inject(function($componentController) {
                // Referencia al componente con camelCase
                var ctrl = $componentController('phoneList');
                expect(ctrl.phones.length).toBe(3);
            }));
        });
    });
})();