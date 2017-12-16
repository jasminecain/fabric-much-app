'use strict';

fabricmuch.component('fabricEditComponent', {

  templateUrl: 'app/scripts/components/fabric-edit/fabric-edit.html',
  controller: function($scope, fabricFactory) {

    $scope.init = function() {
      $scope.getOneFabric($state.params.fabricId);
      $scope.submitFabric();
      $scope.showAllFabrics();
      $scope.clearForm();
      $scope.showInventoryTypes();
      $scope.getStores();
    };

    $scope.submitFabric = function(formData) {
      // fabricForm.uid = user.uid;
      // formData.user_id = 1

      fabricFactory.addFabric(formData)
      .then((data) => {
          // $scope.newFabric = data.data;
          console.log('submitFabric', data);
          $scope.showAllFabrics();
          $scope.clearForm();
        });
    };

    $scope.getOneFabric = function(fabricId) {
      fabricFactory.getOneFabric('fabricId')
        .then((getOneFabric) => {
          debugger
         $scope.getOneFabric = getOneFabric.data;
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

    $scope.showInventoryTypes = function() {
      fabricFactory.getInventoryTypes()
        .then((inventoryTypes) => {
          // debugger
          $scope.inventoryTypes = inventoryTypes.data;
        });
    };

    $scope.getStores = function() {
      fabricFactory.getStores()
        .then((stores) => {
          $scope.stores = stores.data;
        });
    };

    $scope.clearForm = function() {
      $scope.fabric = {};
    }

  }
});
