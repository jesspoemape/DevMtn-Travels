angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv) {
    $scope.package = mainSrv.getPackage($stateParams.id);
})