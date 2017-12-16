'use strict';

fabricmuch.component('fabricDetailComponent', {

  templateUrl: 'app/scripts/components/fabric-detail/fabric-detail.html',
  controller: function($scope, $state, fabricFactory) {

    $scope.init = function() {
      $scope.getFabric($state.params.fabricId);
    };

    $scope.getFabric = function(fabricId) {
      fabricFactory.getOneFabric(fabricId)
        .then((data) => {
          console.log('OneFabric: ', data);
          $scope.fabric = data.data;
        });
    };

  }
});
