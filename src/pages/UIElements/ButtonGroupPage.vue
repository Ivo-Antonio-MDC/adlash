<template>
  <BreadCrumb PageTitle="Button Group" />
  <ButtonGroup />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ButtonGroup from "../../components/UIElements/ButtonGroup/ButtonGroup.vue";

export default defineComponent({
  name: "ButtonGroupPage",
  components: {
    BreadCrumb,
    ButtonGroup,
  },
});
</script>