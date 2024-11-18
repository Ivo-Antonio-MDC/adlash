<template>
  <BreadCrumb PageTitle="Scrollspy" />
  <ScrollspyContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ScrollspyContent from "../../components/UIElements/Scrollspy/ScrollspyContent.vue";

export default defineComponent({
  name: "ScrollspyPage",
  components: {
    BreadCrumb,
    ScrollspyContent,
  },
});
</script>