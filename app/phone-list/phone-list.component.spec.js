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
        var $httpBackend, ctrl;

        beforeEach(inject(function($componentController, _$httpBackend_){
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/phones.json')
                    .respond([{name:'Nexus S'}, {name: 'Motorola DROID'}]);
            ctrl = $componentController('phoneList');
        }));

        it('- phones undefined test - ', function() {
            expect(ctrl.phones).toBeUndefined();
            
            $httpBackend.flush();
            expect(ctrl.phones).toEqual([{name:'Nexus S'}, {name: 'Motorola DROID'}]);
        });

        it('lista con 3 teléfonos', function () {
            $httpBackend.flush();
            expect(ctrl.phones.length).toBe(2);
        });

        it('order tiene que ser age', function() {
            expect(ctrl.orderProp).toBe('age');
        });
    }
    
})();