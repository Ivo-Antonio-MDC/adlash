<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <div id="leafletjs-map-panes">
            <l-map ref="map" :zoom="4" :center="[47.41322, -1.219482]">
              <l-tile-layer
                url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap"
              ></l-tile-layer>
              <l-tile-layer
                url="http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap"
              ></l-tile-layer>
            </l-map>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <div id="leafletjs-map-choropleth">
            <l-map ref="map" :zoom="4" :center="[47.41322, -1.219482]">
              <l-tile-layer
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap"
              ></l-tile-layer>
            </l-map>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <div id="leafletjs-map-layers">
            <l-map ref="map" :zoom="10" :center="[39.73, -104.99]">
              <l-tile-layer
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap"
              ></l-tile-layer>
            </l-map>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default defineComponent({
  name: "LeafletMap",
  components: {
    LMap,
    LTileLayer,
  },
});
</script>