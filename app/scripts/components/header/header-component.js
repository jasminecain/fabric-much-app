'use strict';

fabricmuch.component('headerComponent', {

  templateUrl: 'app/scripts/components/header/header.html',
  controller: function($scope, authFactory, $state, $window) {

    $scope.currentUser = $window.localStorage.getItem('fmUser');

    $scope.logOut = function() {
      authFactory.logOut()
        .then((res) => {
          debugger;
          $window.localStorage.removeItem('fmUser');
          $state.go('root');
          // $route.reload();
        });
    };

  }
});
