<template>
  <BreadCrumb PageTitle="Close Button" />
  <CloseButton />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import CloseButton from "../../components/UIElements/CloseButton/CloseButton.vue";

export default defineComponent({
  name: "CloseButtonPage",
  components: {
    BreadCrumb,
    CloseButton,
  },
});
</script>