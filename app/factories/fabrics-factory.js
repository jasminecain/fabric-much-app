'use strict';

fabricmuch.factory('fabricFactory', function($q, $http, apiFactory) {

  return {
    getAllFabrics,
    getAllBolts,
    getAllSwatches,
    getAllFabricTypes,
    getStores,
    getFabricTypes,
    addFabric
  };

  function getAllFabrics() {
    return apiFactory.get('fabrics')
      .then(function(fabrics) {
        return fabrics;
      });
  };

  function getAllBolts() {
    return apiFactory.get('bolts')
      .then(function(bolts) {
        // debugger
        return bolts;
      });
  };

  function getAllSwatches() {
    return apiFactory.get('swatches')
      .then(function(swatches) {
        // debugger
        return swatches;
      });
  };

  function getAllFabricTypes() {
    return apiFactory.get('fabric_types')
      .then(function(fabric_types) {
        return fabric_types;
      });
  };

  function addFabric(fabricForm) {
    // let newFabric = JSON.stringify(fabricForm);
    return apiFactory.post('fabrics', fabricForm)
      .then((data) => {
        return data;
      }, (error) => {
        let errCode = error.code;
        let errMsg = error.message;
        console.log('addFabErr', errCode, errMsg);
      });
  };

  function editFabric() {

  }

  // function getOneFabric() {
  //   return apiFactory.get('fabricId')
  //     .then(function(fabricId) {
  //       return fabricId;
  //     });
  // };

  function deleteFabric() {

  }

  function getStores() {
    return apiFactory.get('fabrics/stores')
      .then(function(stores) {
        return stores;
      });
  };

  function getFabricTypes() {
    return apiFactory.get('fabrics/fabric_types')
      .then(function(fabricTypes) {
        debugger;
        return fabricTypes;
      });
  };
});
