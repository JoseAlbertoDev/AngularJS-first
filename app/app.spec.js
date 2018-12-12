describe('PhoneListController', function() {
    beforeEach(module('phonecatApp'));

    it('cantidad de teléfonos', inject(function($controller) {
        // Va a almacenar las variables declaradas en el controlador PhoneListController
        var scope = {};
        // Cargando la variables scope y asignándole un nombre de variable a $scope
        var ctrl = $controller('PhoneListController', {$scope:scope});

        // Accediendo a las variables
        expect(scope.phones.length).toBe(2);
    }));

    it('nombre app', inject(function($controller) {
        var scope = {};
        var ctrl = $controller('PhoneListController', {$scope:scope});

        expect(scope.nombre).toBe('Lista de teléfonos');        
    }));

    it('fallando', inject(function($controller) {
        var scope = {};
        var ctrl = $controller('PhoneListController', {$scope:scope});

        expect(scope.nombre).toBe('Lista de tel');        
    }));
});