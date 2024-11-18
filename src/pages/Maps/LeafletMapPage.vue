<template>
  <BreadCrumb PageTitle="Leaflet Map" />
  <LeafletMaps />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import LeafletMaps from "../../components/Maps/LeafletMaps/LeafletMaps.vue";

export default defineComponent({
  name: "LeafletMapPage",
  components: {
    BreadCrumb,
    LeafletMaps,
  },
});
</script>