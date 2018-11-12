'use strict';

fabricmuch.component('fabricDetailComponent', {

  templateUrl: 'app/scripts/components/fabric-detail/fabric-detail.html',
  controller: function($scope, $state, fabricFactory) {

    $scope.fabricId = $state.params.fabricId;

    $scope.init = function() {
      $scope.getFabric($scope.fabricId);
      // console.log('$scope.fabricId: ', $scope.fabricId);
    };

    $scope.getFabric = function(fabricId) {
      fabricFactory.getOneFabric(fabricId)
        .then((data) => {
          // console.log('fabricDetail: ', data);
          $scope.fabric = data.data;

        });
    };

    $scope.deleteFabric = function(fabricId) {
      fabricFactory.deleteFabric(fabricId)
      .then((fabricId) => {
        $state.go('fabrics.items');
      });
  };

  }
});
