<template>
  <BreadCrumb PageTitle="Badges" />
  <BadgesContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import BadgesContent from "../../components/UIElements/Badges/BadgesContent.vue";

export default defineComponent({
  name: "BadgesPage",
  components: {
    BreadCrumb,
    BadgesContent,
  },
});
</script>