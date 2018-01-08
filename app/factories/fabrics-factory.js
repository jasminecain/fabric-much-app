'use strict';

fabricmuch.factory('fabricFactory', function($q, $http, apiFactory, Upload) {

  return {
    getAllFabrics,
    getInventoryTypes,
    getAllFabricTypes,
    getStores,
    getFabricTypes,
    addFabric,
    getOneFabric,
    editFabric,
    deleteFabric,
    addFabricWithImg,
    editFabricWithImg
  };

  function getAllFabrics() {
    return apiFactory.get('fabrics')
      .then(function(fabrics) {
        return fabrics;
      });
  }

  function getInventoryTypes() {
    return apiFactory.get('inventory_types')
      .then(function(inventoryTypes) {
        // debugger
        return inventoryTypes;
      });
  }

  function getAllFabricTypes() {
    return apiFactory.get('fabric_types')
      .then(function(allFabricTypes) {
        return allFabricTypes;
      });
  }

  function addFabric(fabric) {
    return apiFactory.post('fabrics', { fabric })
      .then((data) => {
        return data;
      }, (error) => {
        let errCode = error.code;
        let errMsg = error.message;
        console.log('addFabErr', errCode, errMsg);
      });
  }

  function addFabricWithImg(fabric) {
    return Upload.upload({
      method: 'POST',
      url: 'http://localhost:3000/fabrics',
      data: { fabric }
    }).then((data) => {
      return data;
    }, (error) => {
      let errCode = error.code;
      let errMsg = error.message;
      console.log('addFabErr', errCode, errMsg);
    });
  }

  function editFabric(fabric) {
    return apiFactory.patch(`fabrics/${fabric.id}`, fabric)
      .then((data) => {
        return data;
      }, (error) => {
        let errCode = error.code;
        let errMsg = error.message;
        console.log('editFabricErr', errCode, errMsg);
      });
  }

  function editFabricWithImg(fabric) {
    return Upload.upload({
      method: 'PATCH',
      url: `http://localhost:3000/fabrics/${fabric.id}`,
      data: { fabric }
    }).then((data) => {
      return data;
    }, (error) => {
      let errCode = error.code;
      let errMsg = error.message;
      console.log('addFabErr', errCode, errMsg);
    });
  }

  function getOneFabric(fabricId) {
    return apiFactory.get(`fabrics/${fabricId}`, fabricId)
      .then((data) => {
        return data;
      }, (error) => {
        let errCode = error.code;
        let errMsg = error.message;
        console.log('getOneFabricErr', errCode, errMsg);
      });
  }

  function deleteFabric(fabricId) {
    return apiFactory.destroy(`fabrics/${fabricId}`, fabricId)
      .then((data) => {
        return data;
      }, (error) => {
        let errCode = error.code;
        let errMsg = error.message;
        console.log('deleteFabricErr', errCode, errMsg);
      });
  }

  function getStores() {
    return apiFactory.get('fabrics/stores')
      .then(function(stores) {
        return stores;
      });
  }

  function getFabricTypes() {
    return apiFactory.get('fabrics/fabric_types')
      .then(function(fabricTypes) {
        return fabricTypes;
      });
  }

});
