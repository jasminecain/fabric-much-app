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

  // function getOneFabric() {
  //   return apiFactory.get('fabricId')
  //     .then(function(fabricId) {
  //       return fabricId;
  //     });
  // };

});
