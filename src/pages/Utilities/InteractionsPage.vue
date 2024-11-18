<template>
  <BreadCrumb PageTitle="Interactions" />
  <InteractionsContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import InteractionsContent from "../../components/Utilities/Interactions/InteractionsContent.vue";

export default defineComponent({
  name: "InteractionsPage",
  components: {
    BreadCrumb,
    InteractionsContent,
  },
});
</script>