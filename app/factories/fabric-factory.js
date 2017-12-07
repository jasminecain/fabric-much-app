'use strict';

fabricmuch.factory('fabricFactory', function($q, $http) {

  const getAllFabrics = function(user) {
    return $q ((resolve, reject) => {
      $http.get(`http://localhost:3000/fabrics`)
        .then((inventory) => {
          // debugger
          console.log(inventory)
          resolve(inventory);
        })
        .catch((error) => {
          console.log(error);
          // debugger
          reject(error);
        });
      });
  };

  return { getAllFabrics };

});
