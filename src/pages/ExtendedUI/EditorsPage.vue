<template>
  <BreadCrumb PageTitle="Editors" />
  <EditorsContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import EditorsContent from "../../components/ExtendedUI/Editors/EditorsContent.vue";

export default defineComponent({
  name: "EditorsPage",
  components: {
    BreadCrumb,
    EditorsContent,
  },
});
</script>