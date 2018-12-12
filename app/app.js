var phonecatApp = angular.module('phonecatApp',[]);

phonecatApp.controller('PhoneListController',function PhoneListController($scope) {
    $scope.nombre = 'Lista de teléfonos',
    $scope.phones = [
        {
            name: 'Nexus 5',
            snippet: 'Fast just got faster with Nexus S'
        },
        {
            name: 'Huawei Mate 10e',
            snippet: 'Best mobile ever'
        }
    ];
});