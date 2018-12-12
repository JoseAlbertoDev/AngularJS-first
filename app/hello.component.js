angular
    .module('phonecatApp')
    .component('helloAll',{
        template: '<p>Hi ! componente helloAll {{$ctrl.usuario}}',
        controller: function HelloAllController() {
            this.usuario = 'Alberto';
            this.numero = 2;
        } 
    });