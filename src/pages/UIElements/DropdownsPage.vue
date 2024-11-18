<template>
  <BreadCrumb PageTitle="Dropdowns" />
  <DropdownsContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import DropdownsContent from "../../components/UIElements/Dropdowns/DropdownsContent.vue";

export default defineComponent({
  name: "DropdownsPage",
  components: {
    BreadCrumb,
    DropdownsContent,
  },
});
</script>