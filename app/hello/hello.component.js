(function() {
    angular
        .module('helloAll')
        .component('helloAll',{
            templateUrl: 'hello/hello.template.html',
            controller: HelloAllController
        });

    function HelloAllController() {
        this.usuario = 'Alberto';
        this.numero = 2;
    }
})();