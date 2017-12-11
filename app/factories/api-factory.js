'use strict';

fabricmuch.factory('apiFactory', function($q, $http) {

  return {
    getBaseUrl,
    getUserToken,
    getAuthToken,
    get
  }

  function getBaseUrl() {
    return 'http://localhost:3000/'
  }

  function getAuthToken() {
    if (localStorage.getItem('fmUser')) {
      return localStorage.getItem('fmUser').authentication_token;
    }
  }

  function getUserToken() {
    return $q((resolve, reject) => {
      $http.get(`${self.getBaseUrl()} + users`, {
        headers: {
        'Authorization': 'Token token=' + link ,
        'Authentication-Token': getAuthToken()
        }
      }).then(function(results) {
        resolve(results.data);
      });
    });
  };

  function call(opts, data) {
    let url = `${getBaseUrl()}${opts.uri}`;

    return $q((resolve, reject) => {
      $http({
        method: opts.method,
        url: url,
        data: data,
        headers: {
          // 'Authorization': 'Token token=' + link ,
          'Authentication-Token': getAuthToken()
        }
      })
      .then((inventory) => {
        console.log('fabricInv', inventory)
        resolve(inventory);
      })
      .catch((error) => {
        console.log('fabricInvErr', error);
        reject(error);
      });
    });
  };

  function get(uri, data) {
    return call({uri: uri, method: 'GET'}, data);
  }

  function put(uri, data) {
    return call({uri: uri, method: 'PUT'}, data);
  }

  function patch(uri, data) {
    return call({uri: uri, method: 'PATCH'}, data);
  }

  function post(uri, data) {
    return call({uri: uri, method: 'POST'}, data);
  }

  function delete(uri, data) {
    return call({uri: uri, method: 'DELETE'}, data);
  }

});
