<template>
  <BreadCrumb PageTitle="Accordion" />
  <AccordionContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import AccordionContent from "../../components/UIElements/Accordion/AccordionContent.vue";

export default defineComponent({
  name: "AccordionPage",
  components: {
    BreadCrumb,
    AccordionContent,
  },
});
</script>