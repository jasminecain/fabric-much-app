'use strict';

fabricmuch.factory('authFactory', function($http, apiFactory, $window) {

  return {
    submitLogin,
    submitSignup,
    storeUserData,
    getAuthToken,
    logOut

  };

  // $scope.loginData = {
  //   email: '',
  //   password: '',
  //   name: ''
  // };

  function storeUserData(token) {
    $window.localStorage.setItem('fmUser', JSON.stringify({ authToken: token }));
  }

  function getAuthToken() {
    return $window.localStorage.getItem('fmUser').auth_token;
  }

  // function deleteAuthToken() {
  //   return $window.localStorage.removeItem('fmUser').auth_token;
  // }

  // function isAuthenticated() {
  //   return apiFactory.get('users')
  //     .then(function(users) {
  //       return users;
  //     });
  // }

  function submitSignup(userData) {
    return apiFactory.get('users')
      .then(function(users) {
        return users;
      });
  }

  // hit curl url resource
  function submitLogin(authentication) {
    return apiFactory.post('authentications', authentication)
      .then(function(res) {
        storeUserData(res.data.auth_token);
        return res;
      });
  }

  function logOut() {
    return apiFactory.destroy('authentications')
      .then(function(users) {
        return users;
      });
  }

  // function getCurrentUser(users) {
  //   return apiFactory.get('users')
  //     .then(function(users) {
  //       return users;
  //     });
  // }

  // function authWithProvider(users) {
  //   return apiFactory.get('users')
  //     .then(function(users) {
  //       return users;
  //     });
  // }

});
