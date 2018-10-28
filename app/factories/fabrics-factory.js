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
    editFabricWithImg,
    cleanFabricObj,
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
        // console.log('inventoryTypes:', inventoryTypes);
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
        // console.log('addFabErr', errCode, errMsg);
      });
  }

  function addFabricWithImg(fabric) {
    return Upload.upload({
      method: 'POST',
      // url: 'http://localhost:3000/fabrics',
      url: 'https://git.heroku.com/fabric-much-api.git/fabrics'
      data: { fabric },
      headers: {
        // 'Authorization': 'Token token=' + link ,
        'Authentication-Token': apiFactory.getAuthToken()
      }
    }).then((data) => {
      return data;
    }, (error) => {
      let errCode = error.code;
      let errMsg = error.message;
      // console.log('addFabErr', errCode, errMsg);
    });
  }

  function cleanFabricObj(fabric) {
    delete fabric.fabric_image;
    delete fabric.fabric_image_file_name;
    delete fabric.fabric_image_content_type;
    delete fabric.fabric_image_file_size;
    delete fabric.fabric_image_updated_at;
    delete fabric.fabric_type;
    return fabric;
  }

  function editFabric(fabric) {
    return apiFactory.patch(`fabrics/${fabric.id}`, fabric)
      .then((data) => {
        fabric = cleanFabricObj(data.data);
        // console.log('editFabric', data.data);
        return data;
      }, (error) => {
        let errCode = error.code;
        let errMsg = error.message;
        // console.log('editFabricErr', errCode, errMsg);
      });
  }

  function editFabricWithImg(fabric) {
    return Upload.upload({
      method: 'PATCH',
      // url: `http://localhost:3000/fabrics/${fabric.id}`,
      url: `https://git.heroku.com/fabric-much-api.git/fabrics/${fabric.id}`,
      data: { fabric },
      headers: {
        // 'Authorization': 'Token token=' + link ,
        'Authentication-Token': apiFactory.getAuthToken()
      }
    }).then((data) => {
      fabric = cleanFabricObj(data.data);
      return data;
    }, (error) => {
      let errCode = error.code;
      let errMsg = error.message;
      // console.log('addFabErr', errCode, errMsg);
    });
  }


  function getOneFabric(fabricId) {
    return apiFactory.get(`fabrics/${fabricId}`, fabricId)
      .then((data) => {
        return data;
      }, (error) => {
        let errCode = error.code;
        let errMsg = error.message;
        // console.log('getOneFabricErr', errCode, errMsg);
      });
  }

  function deleteFabric(fabricId) {
    return apiFactory.destroy(`fabrics/${fabricId}`, fabricId)
      .then((data) => {
        return data;
      }, (error) => {
        let errCode = error.code;
        let errMsg = error.message;
        // console.log('deleteFabricErr', errCode, errMsg);
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
