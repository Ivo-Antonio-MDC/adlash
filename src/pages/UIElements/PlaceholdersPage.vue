<template>
  <BreadCrumb PageTitle="Placeholders" />
  <PlaceholdersContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import PlaceholdersContent from "../../components/UIElements/Placeholders/PlaceholdersContent.vue";

export default defineComponent({
  name: "PlaceholdersPage",
  components: {
    BreadCrumb,
    PlaceholdersContent,
  },
});
</script>