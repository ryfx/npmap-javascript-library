﻿/**
 * NPMap.Layer.Xml module.
 */
define([
  'Layer/Layer'
], function(Layer) {
  return NPMap.Layer.Zoomify = {
    /**
     * Adds a Zoomify layer.
     ** @param {Object} config.
     */
    add: function(config) {
      var layer;

      //NPMap.Event.trigger('NPMap.Layer', 'beforeadd', config);

      if (!config.height) {
        throw new Error('"height" is required.');
      }
      
      if (!config.width) {
        throw new Error('"width" is required.');
      }

      layer = NPMap.Map.createZoomifyLayer(config);
      
      NPMap.Map.addTileLayer(layer);
      //NPMap.Event.trigger('NPMap.Layer', 'added', config);
    }
  };
});