'use strict';

fabricmuch.component('fabricComponent', {

  templateUrl: 'app/scripts/components/fabric/fabric.html',
  controller: function(fabricFactory, $scope) {

    // let user = authFactory.getCurrentUser();


    // $scope.init = function() {
    //   $scope.showAllFabrics();
    // };

    $scope.showAllFabrics = function() {
      // console.log('working?')
      fabricFactory.getAllFabrics()
        .then((fabric) => {
          // console.log('fabric', fabric);
          $scope.fabrics = fabric.data;
        });
    };

    $scope.showAllBolts = function() {
      fabricFactory.getAllBolts()
        .then((bolt) => {
          $scope.bolts = bolt.data;
        });
    };

    $scope.showAllSwatches = function() {
      fabricFactory.getAllSwatches()
        .then((swatches) => {
          // console.log(swatches);
          $scope.swatches = swatches.data;
        });
    };

    $scope.showAllFabricTypes = function() {
      fabricFactory.getAllFabricTypes()
        .then((fabricTypes) => {
          // console.log('fabricTypes', fabricTypes);
          $scope.fabricTypes = fabricTypes.data;
        });
    };


    $scope.showAllFabrics();
    $scope.showAllBolts();
    $scope.showAllSwatches();
    $scope.showAllFabricTypes();

  }
});
