(function() {
    'use strict';

    describe('hello-all', function() {
        
        beforeEach(module('helloAll'));

        describe('HelloAllController', function() {
            it('Comprobandoe hello all', inject(function($componentController) {
                var ctrl = $componentController('helloAll');
                expect(ctrl.numero).toBe(2);
            }));
        })
    })
})();