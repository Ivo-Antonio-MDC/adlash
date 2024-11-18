<template>
  <BreadCrumb PageTitle="Vertical Rule" />
  <VerticalRule />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import VerticalRule from "../../components/Utilities/VerticalRule/VerticalRule.vue";

export default defineComponent({
  name: "VerticalRulePage",
  components: {
    BreadCrumb,
    VerticalRule,
  },
});
</script>