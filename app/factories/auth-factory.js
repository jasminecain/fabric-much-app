'use strict';

fabricmuch.component('authFactory', function($http) {


  return {
    addUser,
    logIn
  };


  function logIn(userCreds) {
    return
  }

  function storeUserData(user) {
    localStorage.setItem('fmUser', user);
  }

  function addUser(userCreds) {
    return $http.post()
      return res;
  };

});
