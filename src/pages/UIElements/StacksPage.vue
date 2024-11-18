<template>
  <BreadCrumb PageTitle="Stacks" />
  <StacksContant />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import StacksContant from "../../components/UIElements/Stacks/StacksContant.vue";

export default defineComponent({
  name: "StacksPage",
  components: {
    BreadCrumb,
    StacksContant,
  },
});
</script>