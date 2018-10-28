'use strict';

fabricmuch.factory('apiFactory', function($q, $http, $window) {

  return {
    getBaseUrl,
    get,
    put,
    patch,
    post,
    destroy,
    getAuthToken
  };

  function getBaseUrl() {
    // return 'http://localhost:3000/';
    return 'https://git.heroku.com/fabric-much-api.git/';
  }

  function getAuthToken() {
    if ($window.localStorage.getItem('fmUser')) {
      return JSON.parse($window.localStorage.getItem('fmUser')).user.authentication_token;
    }
  }

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
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
    });
  }

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

  function destroy(uri, data=null) {
    return call({uri: uri, method: 'DELETE'}, data);
  }
});
