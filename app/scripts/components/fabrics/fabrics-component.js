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
      // $scope.deleteFabric();
    };

    // let user = { user: 1 }

    // $scope.getFabricTypes = [];

    $scope.submitFabric = function(formData) {
      // fabricForm.uid = user.uid;
      // formData.user_id = 1
      debugger

      fabricFactory.addFabric(formData)
      .then((data) => {
          // $scope.newFabric = data.data;
          debugger
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
        .then((allFabricTypes) => {
          $scope.allFabricTypes = allFabricTypes.data;
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


  }
});
