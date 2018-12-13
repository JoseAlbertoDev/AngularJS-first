(function() {
    angular
        .module('helloAll')
        .component('helloAll',{
            templateUrl: 'hello/hello.template.html',
            controller: HelloAllController
        });

    function HelloAllController() {
        self = this;
        self.usuario = 'Alberto';
        self.numero = 2;
    }
})();