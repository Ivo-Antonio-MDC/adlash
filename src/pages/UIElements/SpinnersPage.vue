<template>
  <BreadCrumb PageTitle="Spinners" />
  <SpinnersContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import SpinnersContent from "../../components/UIElements/Spinners/SpinnersContent.vue";

export default defineComponent({
  name: "SpinnersPage",
  components: {
    BreadCrumb,
    SpinnersContent,
  },
});
</script>