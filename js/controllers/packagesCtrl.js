angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $stateParams, mainSrv) {
    $scope.packages = mainSrv.getPackages($stateParams.country)
})