'use strict';

fabricmuch.component('headerComponent', {

  templateUrl: 'app/scripts/components/header/header.html',
  controller: function($scope, authFactory, $state, $window) {

    // $scope.fmUser = $window.localStorage.getItem('fmUser');

    $scope.logOut = function() {
      authFactory.logOut()
        .then((res) => {
          debugger;
          if(res) {
            $window.localStorage.removeItem('fmUser');
            $state.go('root');
          }
        });
    };

    // $scope.submitLogin = function(formData) {
    //   authFactory.submitLogin(formData)
    //     .then((res) => {
    //       debugger;
    //       if (res) {
    //         $state.go('fabrics.items');
    //       }
    //     });
    // };

     // console.log('authFactory: isAuthenticated');

    // $scope.logOut = () => {
    //   authFactory.logOut($scope.account)
    //     .then(() => {
    //       $window.localStorage.removeItem('currentUser');
    //       $state.go('root');
    //     });
    // };

    // function logOut(userCreds) {
    //   return apiFactory.get('users')
    //     .then(function(users) {
    //       $window.localStorage.removeItem('fmUser');
    //       return users;
    //     });
    // };

  }
});
