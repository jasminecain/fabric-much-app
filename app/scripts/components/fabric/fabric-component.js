'use strict';

fabricmuch.component('fabricComponent', {

  templateUrl: 'app/scripts/components/fabric/fabric.html',
  controller: function( fabricFactory, $scope) {

    // let user = authFactory.getCurrentUser();


    // $scope.init = function() {
    //   $scope.showAllFabrics();
    // };

    $scope.showAllFabrics = function() {
      console.log('working?')
      fabricFactory.getAllFabrics()
        .then((fabric) => {
          // debugger
          console.log('fabric', fabric);
          $scope.fabrics = fabric.data;
        });
    };

    $scope.showAllFabrics();

  }
});
