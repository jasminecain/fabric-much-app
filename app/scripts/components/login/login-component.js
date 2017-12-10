'use strict';

fabricmuch.component('loginComponent', {

  templateUrl: 'app/scripts/components/login/login.html',
  controller: function($scope) {

    $scope.account = {
      email: '',
      password: '',
      name: ''
    };

    $scope.logIn = () => {
      authFactory.logIn($scope.account)
        .then(() => {
          $state.go('fabric.items')
        });
    };

  }
});
