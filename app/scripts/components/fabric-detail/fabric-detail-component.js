'use strict';

fabricmuch.component('fabricDetailComponent', {

  templateUrl: 'app/scripts/components/fabric-detail/fabric-detail.html',
  controller: function() {


    $scope.init = function() {
      $scope.getFabric(fabricId);
    };

    $scope.getFabric = function(fabricId) {
      fabricFactory.getOneFabric(fabricId)
        .then((data) => {
          console.log('OneFabric: ', data);
          $scope.getFabric = getFabric.data;
        });
    };

  }
});
