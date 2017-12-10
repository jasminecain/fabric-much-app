'use strict';

fabricmuch.factory('fabricFactory', function($q, $http, apiFactory) {

  return {
    getAllFabrics
  };

  function getAllFabrics() {
    return apiFactory.get('fabrics')
      .then(function(fabrics) {
        return fabrics;
      });
    // return $q((resolve, reject) => {
    //   $http.get(`http://localhost:3000/fabrics`)
    //     .then((inventory) => {
    //       console.log('fabricInv', inventory)
    //       resolve(inventory);
    //     })
    //     .catch((error) => {
    //       console.log('fabricInvErr', error);
    //       reject(error);
    //     });
    // });
  };

  // const getAllBolts = function() {
  //   return $q((resolve, reject) => {
  //     $http.get(`http://localhost:3000/bolts`)
  //     .then((boltInventory) => {
  //       // debugger
  //       console.log('boltInventory', boltInventory);
  //       resolve(boltInventory);
  //     })
  //     .catch((error) => {
  //       // debugger
  //       console.log('boltInvErr', error);
  //       reject(error);
  //     });
  //   });
  // };

  // const getAllSwatches = function() {
  //   return $q((resolve, reject) => {
  //     $http.get(`http://localhost:3000/swatches`)
  //       .then((swatchInv) => {
  //         console.log('swatchInv', swatchInv);
  //         resolve(swatchInv);
  //       })
  //       .catch((error) => {
  //         console.log('swatchInvErr', error);
  //         reject(error);
  //       });
  //   });
  // };

  // const getAllFabricTypes = function() {
  //   return $q((resolve, reject) => {
  //     $http.get(`http://localhost:3000/fabric_types`)
  //       .then((fabricTypeInv) => {
  //         console.log('fabricTypeInv', fabricTypeInv);
  //         resolve(fabricTypeInv);
  //       })
  //       .catch((error) => {
  //         console.log('fabricTypeInv', error);
  //         reject(error)
  //       });
  //   });
  // };

  // const getOneFabric = function(fabricId) {
  //   return $q
  // }
});
