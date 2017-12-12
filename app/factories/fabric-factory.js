'use strict';

fabricmuch.factory('fabricFactory', function($q, $http, apiFactory) {

  return {
    getAllFabrics,
    getAllBolts,
    getAllSwatches,
    getAllFabricTypes,
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


  function getAllBolts() {
    return apiFactory.get('bolts')
      .then(function(bolts) {
        debugger
        return bolts;
      });
  };


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

  function getAllSwatches() {
    return apiFactory.get('swatches')
      .then(function(swatches) {
        debugger
        return swatches;
      });
  };


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

  function getAllFabricTypes() {
    return apiFactory.get('fabric_types')
      .then(function(fabric_types) {
        return fabric_types;
      });
  };


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

  // function getOneFabric() {
  //   return apiFactory.get('fabricId')
  //     .then(function(fabricId) {
  //       return fabricId;
  //     });
  // };

  // const getOneFabric = function(fabricId) {
  //   return $q
  // }
});
