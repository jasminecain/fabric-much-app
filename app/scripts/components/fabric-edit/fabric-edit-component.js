'use strict';

fabricmuch.component('fabricEditComponent', {

  templateUrl: 'app/scripts/components/fabric-edit/fabric-edit.html',
  controller: function($scope, fabricFactory, $state, Upload) {

    $scope.init = function() {
      $scope.getOneFabric($state.params.fabricId);
      $scope.showInventoryTypes();
      $scope.getStores();
      $scope.showAllFabricTypes();
      $scope.showAllFabrics();
    };

    $scope.updateFabric = function(fabric) {
      if (typeof fabric.fabric_image === 'object') {
        fabricFactory.editFabricWithImg(fabric)
        .then((fabric) => {
            // console.log('Update Fabric: ', fabric);
            $state.go('fabrics.items');
          });
      } else if (typeof fabric.fabric_image === 'string') {
        delete fabric.fabric_image;
        fabricFactory.editFabric(fabric)
          .then((data) => {
            console.log('updateFabric', data);
            $state.go('fabrics.items');
            });
          }
    };

    // $scope.deletePhoto = function(formData, index) {
    //   debugger;
    //   fabric.fabric_image.splice(index, 1);
    // };

      $scope.showAllFabrics = function() {
        fabricFactory.getAllFabrics()
          .then((fabric) => {
            // console.log('fabric', fabric);
            $scope.fabrics = fabric.data;
          });
      };

    $scope.getOneFabric = function(fabricId) {
      fabricFactory.getOneFabric(fabricId)
        .then((getOneFabric) => {
          // console.log(getOneFabric.data);
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
