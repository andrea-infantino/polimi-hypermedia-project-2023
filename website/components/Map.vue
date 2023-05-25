<template>
  <div id="map" ref="map"></div>
</template>
  
<script>
  import 'ol/ol.css';
  import { Map, View, Feature } from 'ol';
  import { fromLonLat } from 'ol/proj';
  import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
  import { OSM, Vector as VectorSource } from 'ol/source';
  import { Style, Icon } from 'ol/style';
  import { Point } from 'ol/geom';

  export default {
    name: 'Map',
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        const map = new Map({
          target: this.$refs.map,
          layers: [
            new TileLayer({
              source: new OSM(),
            }),
          ],
          view: new View({
            center: fromLonLat([9.227090817264186, 45.47896101516622]), // set the initial center coordinates
            zoom: 14, // set the initial zoom level
          }),
        });
  
        // Create a vector source and layer for the pin
        const pinSource = new VectorSource({
          features: [
            new Feature({
              geometry: new Point(fromLonLat([9.227090817264186, 45.47896101516622])), // longitude and latitude for the pin's location
            }),
          ],
        });
  
        const pinLayer = new VectorLayer({
            source: pinSource,
            style: new Style({
            image: new Icon({
                anchor: [422, 758],
                width: 50,
                anchorXUnits: 'pixels',
                anchorYUnits: 'pixels',
                src: 'https://www.freepnglogos.com/uploads/pin-png/location-pin-connectsafely-37.png', // find a way to do it locally ??
            }),
            }),
        });
  
        map.addLayer(pinLayer);
        //console.log(pinLayer.getSource().getFeatures());
      },
    },
  };
</script>
  
<style scoped>
  #map {
    width: 50%;
    height: 400px; /* Adjust the height as needed */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>
  