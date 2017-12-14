'use strict';

fabricmuch.component('fabricsComponent', {

  templateUrl: 'app/scripts/components/fabrics/fabrics.html',
  controller: function(fabricFactory, $scope) {

    // let user = authFactory.getCurrentUser();

    $scope.init = function() {
      $scope.showAllFabrics();
      $scope.showAllBolts();
      $scope.showAllSwatches();
      $scope.showAllFabricTypes();
      $scope.getStores();
      $scope.getFabricTypes();
    };

    $scope.saveFabric = function(formData) {
      // fabricForm.uid = user.uid;
      debugger

      fabricFactory.addFabric(formData)
        .then((data) => {
          debugger
          console.log('saveFabric', data);
          $scope.showAllFabrics();
          $scope.clearForm();
        });
    };

    $scope.showAllFabrics = function() {
      // console.log('working?')
      fabricFactory.getAllFabrics()
        .then((fabric) => {
          console.log('fabric', fabric);
          // debugger;
          $scope.fabrics = fabric.data;
        });
    };

    $scope.showAllBolts = function() {
      fabricFactory.getAllBolts()
        .then((bolt) => {
          // debugger
          $scope.bolts = bolt.data;
        });
    };

    $scope.showAllSwatches = function() {
      fabricFactory.getAllSwatches()
        .then((swatches) => {
          // console.log(swatches);
          // debugger
          $scope.swatches = swatches.data;
        });
    };

    $scope.showAllFabricTypes = function() {
      fabricFactory.getAllFabricTypes()
        .then((fabricTypes) => {
          // debugger
          console.log('fabricTypes', fabricTypes);
          $scope.fabricTypes = fabricTypes.data;
        });
    };

    $scope.clearForm = function() {
      $scope.fabricForm = {};
    }

    $scope.getStores = function() {
      fabricFactory.getStores()
        .then((stores) => {
          $scope.stores = stores.data;
        });
    };

    $scope.getFabricTypes = function() {
      fabricFactory.getFabricTypes()
        .then((fabricTypes) => {
          debugger;
          $scope.fabricTypes = fabricTypes.data;
        });
    };
  }
});
