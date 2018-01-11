'use strict';

fabricmuch.component('fabricsComponent', {

  templateUrl: 'app/scripts/components/fabrics/fabrics.html',
  controller: function(fabricFactory, $scope, $state, Upload) {

    // let user = authFactory.getCurrentUser();

    $scope.init = function() {
      $scope.showAllFabrics();
      $scope.showInventoryTypes();
      $scope.showAllFabricTypes();
      $scope.getStores();
      $scope.getFabricTypes();
    };

    $scope.submitFabric = function(fabric) {
      if (fabric.fabric_image) {
        fabricFactory.addFabricWithImg(fabric)
          .then((fabric) => {
            console.log('New Fabric Response: ', fabric);
            $scope.showAllFabrics();
            $scope.clearForm();
          });
      } else {
        fabricFactory.addFabric(fabric)
          .then((data) => {
            // $scope.newFabric = data.data;
            console.log('submitFabric', data);
            $scope.showAllFabrics();
            $scope.clearForm();
          });
      }
    };

    $scope.showAllFabrics = function() {
      // console.log('working?')
      fabricFactory.getAllFabrics()
        .then((fabrics) => {
          // debugger;
          console.log('fabrics', fabrics);
          $scope.fabrics = fabrics.data;
        });
    };

    $scope.showInventoryTypes = function() {
      fabricFactory.getInventoryTypes()
        .then((inventoryTypes) => {
          // debugger
          $scope.inventoryTypes = inventoryTypes.data;
        });
    };

    $scope.showAllFabricTypes = function() {
      fabricFactory.getAllFabricTypes()
        .then((allFabricTypes) => {
          $scope.allFabricTypes = allFabricTypes.data;
        });
    };

    $scope.getOneFabric = function(fabricId) {
      fabricFactory.getOneFabric('fabricId')
        .then((getOneFabric) => {
         $scope.getOneFabric = getOneFabric.data;
        });
    };

    $scope.clearForm = function() {
      $scope.fabric = {};
    };

    $scope.getStores = function() {
      fabricFactory.getStores()
        .then((stores) => {
          console.log('stores', stores);
          $scope.stores = stores.data;
        });
    };

    $scope.getFabricTypes = function() {
      fabricFactory.getFabricTypes()
        .then((fabricTypes) => {
          console.log('fabricTypes', fabricTypes);
          $scope.fabricTypes = fabricTypes.data;
        });
    };

    $scope.editFabric = function(fabricId) {
      fabricFactory.editFabric(fabricId)
        .then((res) => {
          // debugger;
          $scope.showAllFabrics();
        });
    };

    $scope.deleteFabric = function(fabricId) {
        fabricFactory.deleteFabric(fabricId)
        .then((res) => {
          $scope.showAllFabrics();
        });
    };

  }
});
