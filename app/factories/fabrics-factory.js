'use strict';

fabricmuch.factory('fabricFactory', function($q, $http, apiFactory) {

  return {
    getAllFabrics,
    getAllBolts,
    getAllSwatches,
    getAllFabricTypes,
    getStores,
    getFabricTypes,
    addFabric,
    getOneFabric,
    editFabric,
    deleteFabric
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
      .then(function(allFabricTypes) {
        return allFabricTypes;
      });
  };

  function addFabric(fabric) {
    return apiFactory.post('fabrics', { fabric })
      .then((data) => {
        return data;
      }, (error) => {
        let errCode = error.code;
        let errMsg = error.message;
        console.log('addFabErr', errCode, errMsg);
      });
  };

  function editFabric(fabricId) {
    return apiFactory.patch(`fabrics/${fabricId}`, fabricId)
      .then((data) => {
        return data;
      }, (error) => {
        let errCode = error.code;
        let errMsg = error.message;
        console.log('editFabricErr', errCode, errMsg);
      });
  };

  function getOneFabric(fabricId) {
    return apiFactory.get('fabricId')
      .then((data) => {
        return data;
      }, (error) => {
        let errCode = error.code;
        let errMsg = error.message;
        console.log('getOneFabricErr', errCode, errMsg);
      });
  };

  function deleteFabric(fabricId) {
    debugger;
    return apiFactory.destroy(`fabrics/${fabricId}`, fabricId)
      .then((data) => {
        return data;
      }, (error) => {
        let errCode = error.code;
        let errMsg = error.message;
        console.log('deleteFabricErr', errCode, errMsg);
      });
  };

  function getStores() {
    return apiFactory.get('fabrics/stores')
      .then(function(stores) {
        return stores;
      });
  };

  function getFabricTypes() {
    return apiFactory.get('fabrics/fabric_types')
      .then(function(fabricTypes) {
        return fabricTypes;
      });

  };
});
