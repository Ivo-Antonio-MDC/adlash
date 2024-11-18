<template>
  <BreadCrumb PageTitle="Google Maps" />
  <GoogleMaps />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import GoogleMaps from "../../components/Maps/GoogleMaps/GoogleMaps.vue";

export default defineComponent({
  name: "GoogleMapsPage",
  components: {
    BreadCrumb,
    GoogleMaps,
  },
});
</script>