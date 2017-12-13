'use strict';

fabricmuch.factory('apiFactory', function($q, $http) {

  return {
    getBaseUrl,
    get,
    put,
    patch,
    post,
    destroy
  };

  // getUserToken,
  // getAuthToken,

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
      $http.get(`${self.getBaseUrl()} + items`, {
        headers: {
        'Authentication-Token': localStorage.getItem('fmUser').authToken
        }
      }).then(function(results) {
        resolve(results.data);
      });
    });
  };

  function call(opts, data) {
    let url = `${getBaseUrl()}${opts.uri}`;
    // debugger

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
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        console.log(error);
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
    return call({ uri: uri, method: 'POST' }, data);
  }

  function destroy(uri, data) {
    return call({uri: uri, method: 'DELETE'}, data);
  }
});
