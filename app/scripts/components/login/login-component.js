'use strict';

fabricmuch.component('loginComponent', {

  templateUrl: 'app/scripts/components/login/login.html',
  controller: function($scope, $state, authFactory) {

    $scope.submitLogin = function(formData) {
      authFactory.submitLogin(formData)
        .then((res) => {
          debugger;
          if (res) {
            $state.go('fabrics.items');
          }
        });
    };

    $scope.submitSignup = function(formData) {
      authFactory.submitSignup(formData)
        .then((res) => {
          debugger;
          if (res) {
            $state.go('fabrics.items');
            // $route.reload();
          }
        });
    };

  }
});
