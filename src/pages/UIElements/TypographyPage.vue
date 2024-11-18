<template>
  <BreadCrumb PageTitle="Typography" />
  <TypographyContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import TypographyContent from "../../components/UIElements/Typography/TypographyContent.vue";

export default defineComponent({
  name: "TypographyPage",
  components: {
    BreadCrumb,
    TypographyContent,
  },
});
</script>