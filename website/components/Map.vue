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
            center: fromLonLat([-0.12384846823434997, 51.53220785612703]), // set the initial center coordinates
            zoom: 14, // set the initial zoom level
          }),
        });
  
        // Create a vector source and layer for the pin
        const pinSource = new VectorSource({
          features: [
            new Feature({
              geometry: new Point(fromLonLat([-0.12384846823434997, 51.53220785612703])), // longitude and latitude for the pin's location
            }),
          ],
        });
  
        const pinLayer = new VectorLayer({
            source: pinSource,
            style: new Style({
            image: new Icon({
                anchor: [186, 593],
                width: 40,
                anchorXUnits: 'pixels',
                anchorYUnits: 'pixels',
                src: 'https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Assets/pin.png?t=2023-06-05T14%3A54%3A27.626Z', // or find a way to do it locally
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
  