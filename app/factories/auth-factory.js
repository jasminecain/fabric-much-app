'use strict';

fabricmuch.factory('authFactory', function($http, apiFactory, $window) {

  return {
    submitLogin,
    submitSignup,
    storeUserData,
    getAuthToken,
    logOut,
    getCurrentUser
  };

  function storeUserData(user) {
    $window.localStorage.setItem('fmUser', JSON.stringify({ user: user }));
  }

  function getAuthToken() {
    return JSON.parse($window.localStorage.getItem('fmUser')).user.authentication_token;
  }

  function cleanUserObj(user) {
    // remove unnecessary properties
    delete user.updated_at;
    delete user.password_digest;
    return user;
  }

  function submitSignup(user) {
    return apiFactory.post('users', { user })
      .then(function(user) {
        user = cleanUserObj(user.data);
        storeUserData(user);
        return user;
      });
  }

  // hit curl url resource
  function submitLogin(authentication) {
    return apiFactory.post('authentications', authentication)
      .then(function(user) {
        user = cleanUserObj(user.data);
        storeUserData(user);
        return user;
      });
  }

  function logOut() {
    return apiFactory.destroy('authentications')
      .then(function(users) {
        return users;
      });
  }

  function getCurrentUser() {
    return JSON.parse($window.localStorage.getItem('fmUser')).user;
  }

});
