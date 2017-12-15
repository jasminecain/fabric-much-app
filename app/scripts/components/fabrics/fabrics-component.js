'use strict';

fabricmuch.component('fabricsComponent', {

  templateUrl: 'app/scripts/components/fabrics/fabrics.html',
  controller: function(fabricFactory, $scope, $state) {

    // let user = authFactory.getCurrentUser();

    $scope.init = function() {
      $scope.showAllFabrics();
      $scope.showInventoryTypes();
      $scope.showAllFabricTypes();
      $scope.getStores();
      $scope.getFabricTypes();
      // $scope.deleteFabric();
    };

    // let user = { user: 1 }

    // $scope.getFabricTypes = [];

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
          console.log('fabricTypes', fabricTypes);
          $scope.fabricTypes = fabricTypes.data;
        });
    };

    $scope.editFabric = function(fabricId) {
      fabricFactory.editFabric(fabricId)
        .then((res) => {
          debugger
          $scope.showAllFabrics();
        });
    };

    $scope.deleteFabric = function(fabricId) {
        debugger;
        fabricFactory.deleteFabric(fabricId)
        .then((res) => {
          debugger
          $scope.showAllFabrics();
        });
    };

    $scope.toEditFabricView = function() {
      $state.go('editFabric.view', fabricId);
    };

  }
});
