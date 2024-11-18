<template>
  <BreadCrumb PageTitle="Popovers" />
  <PopoversContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import PopoversContent from "../../components/UIElements/Popovers/PopoversContent.vue";

export default defineComponent({
  name: "PopoversPage",
  components: {
    BreadCrumb,
    PopoversContent,
  },
});
</script>