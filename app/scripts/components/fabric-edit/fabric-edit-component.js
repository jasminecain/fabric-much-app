'use strict';

fabricmuch.component('fabricEditComponent', {

  templateUrl: 'app/scripts/components/fabric-edit/fabric-edit.html',
  controller: function($scope, fabricFactory, $state) {

    $scope.init = function() {
      $scope.getOneFabric($state.params.fabricId);
      $scope.showInventoryTypes();
      $scope.getStores();
      $scope.showAllFabricTypes();
    };

    $scope.updateFabric = function(fabric) {
      debugger;
      fabricFactory.editFabric(fabric)
      .then((data) => {
        debugger;
          console.log('updateFabric', data);
          $state.go('fabrics.items');
        });
    };

    $scope.getOneFabric = function(fabricId) {
      fabricFactory.getOneFabric(fabricId)
        .then((getOneFabric) => {
          console.log(getOneFabric.data);
          $scope.fabric = getOneFabric.data;
        });
    };

    $scope.showInventoryTypes = function() {
      fabricFactory.getInventoryTypes()
        .then((inventoryTypes) => {
          $scope.inventoryTypes = inventoryTypes.data;
        });
    };

    $scope.getStores = function() {
      fabricFactory.getStores()
        .then((stores) => {
          $scope.stores = stores.data;
        });
    };

    $scope.showAllFabricTypes = function() {
      fabricFactory.getAllFabricTypes()
        .then((allFabricTypes) => {
          $scope.allFabricTypes = allFabricTypes.data;
        });
    };

    $scope.clearForm = function() {
      $scope.fabric = {};
    };
  }
});
