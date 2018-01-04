'use strict';

fabricmuch.component('profileViewComponent', {

  templateUrl: 'app/scripts/components/profile-view/profile-view.html',
  controller: function(authFactory, $scope, $state, $window) {


    $scope.init = function() {
      $scope.user = authFactory.getCurrentUser();
      console.log($scope.user);
    };

    $scope.logOut = (user) => {
      // need to grab user
      authFactory.logOut($scope.user)
        .then(() => {
          $window.localStorage.removeItem('fmUser');
          $state.go('root');
        });
    };

    $scope.getUserData = (user) => {
      return authFactory.getCurrentUser(user)
        .then((data) => {
          return data;
        });
    };

  }
});
