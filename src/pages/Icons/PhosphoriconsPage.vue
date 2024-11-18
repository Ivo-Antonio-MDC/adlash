<template>
  <BreadCrumb PageTitle="Phosphoricons" />
  <PhosphoriconsContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import PhosphoriconsContent from "../../components/Icons/Phosphoricons/PhosphoriconsContent.vue";

export default defineComponent({
  name: "PhosphoriconsPage",
  components: {
    BreadCrumb,
    PhosphoriconsContent,
  },
});
</script>