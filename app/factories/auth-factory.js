'use strict';

fabricmuch.factory('authFactory', function($http, apiFactory) {


  return {
    submitLogin,
    submitSignup
  };

  // $scope.loginData = {
  //   email: '',
  //   password: '',
  //   name: ''
  // };

  function storeUserData(token) {
    localStorage.setItem('fmUser', JSON.stringify({ authToken: token }));
  }

  function getAuthToken() {
    return localStorage.getItem('fmUser').auth_token;
  }

  localStorage

  function isAuthenticated() {
    return apiFactory.get('users')
      .then(function(users) {
        return users;
      })
  };

  // hit curl url resource
  function submitLogin(formData) {
    return apiFactory.post('authenticate', formData)
      .then(function(res) {
        storeUserData(res.data.auth_token);
        return res;
      });
  };

  function submitSignup(userData) {
    return apiFactory.get('users')
      .then(function(users) {
        return users;
      })
  }

  function logOut(userCreds) {
    return apiFactory.get('users')
      .then(function(users) {
        localStorage.removeItem('fmUser');
        return users;
      })
  };


  function getCurrentUser(users) {
    return apiFactory.get('users')
      .then(function(users) {
        return users;
      })
  };

  function authWithProvider(users) {
    return apiFactory.get('users')
      .then(function(users) {
        return users;
      })
  };

});
