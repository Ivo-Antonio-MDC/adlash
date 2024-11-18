<template>
  <BreadCrumb PageTitle="Avatars" />
  <AvatarsContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import AvatarsContent from "../../components/UIElements/Avatars/AvatarsContent.vue";

export default defineComponent({
  name: "AvatarsPage",
  components: {
    BreadCrumb,
    AvatarsContent,
  },
});
</script>