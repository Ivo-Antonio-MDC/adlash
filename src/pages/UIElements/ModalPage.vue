<template>
  <BreadCrumb PageTitle="Modal" />
  <ModalContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ModalContent from "../../components/UIElements/Modal/ModalContent.vue";

export default defineComponent({
  name: "ModalPage",
  components: {
    BreadCrumb,
    ModalContent,
  },
});
</script>