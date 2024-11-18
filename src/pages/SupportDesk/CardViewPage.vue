<template>
  <BreadCrumb PageTitle="Card View" />
  <CardView />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import CardView from "../../components/SupportDesk/CardView/CardView.vue";

export default defineComponent({
  name: "CardViewPage",
  components: {
    BreadCrumb,
    CardView,
  },
});
</script>