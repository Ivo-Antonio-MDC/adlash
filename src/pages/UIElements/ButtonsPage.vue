<template>
  <BreadCrumb PageTitle="Buttons" />
  <ButtonsContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ButtonsContent from "../../components/UIElements/Buttons/ButtonsContent.vue";

export default defineComponent({
  name: "ButtonsPage",
  components: {
    BreadCrumb,
    ButtonsContent,
  },
});
</script>