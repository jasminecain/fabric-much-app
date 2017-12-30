'use strict';

fabricmuch.component('loginComponent', {

  templateUrl: 'app/scripts/components/login/login.html',
  controller: function($scope, $state, authFactory) {

    // $scope.loginData = {
    //   email: '',
    //   password: '',
    //   name: ''
    // };

    $scope.submitLogin = function(formData) {
      authFactory.submitLogin(formData)
        .then((res) => {
          debugger;
          if (res) {
            $state.go('fabrics.items');
          }
        });
    };

    // $scope.logIn = () => {
    //   authFactory.logIn($scope.account)
    //     .then(() => {
    //       $state.go('fabric.items')
    //     });
    // };

  }
});
