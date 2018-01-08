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

    // $scope.cleanFabricObj = function(fabric) {
    //   delete fabric.fabric_type.id;
    //   delete fabric.fabric_type.created_at;
    //   delete fabric.fabric_type.updated_at;
    //   delete fabric.fabric_image_file_name;
    //   delete fabric.fabric_image_content_type;
    //   delete fabric.fabric_image_file_size;
    //   delete fabric.fabric_image_updated_at;
    //   delete fabric.fabric_type;
    //   return fabric;
    // };

    $scope.updateFabric = function(fabric) {
      if (fabric.fabric_image) {
        fabricFactory.editFabricWithImg(fabric)
          .then((fabric) => {
            console.log('Update Fabric: ', fabric);
            $state.go('fabrics.items');
            // $scope.showAllFabrics();
            // $scope.clearForm();
          });
      } else {
        debugger;
        fabricFactory.editFabric(fabric)
          // fabricFactory.cleanFabricObj(fabric)
          .then((data) => {
            debugger;
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
        // console.log('working?')
        fabricFactory.getAllFabrics()
          .then((fabric) => {
            console.log('fabric', fabric);
            // debugger;
            $scope.fabrics = fabric.data;
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
