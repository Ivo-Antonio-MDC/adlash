<template>
  <BreadCrumb PageTitle="Icon Link" />
  <IconLink />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import IconLink from "../../components/UIElements/IconLink/IconLink.vue";

export default defineComponent({
  name: "IconLinkPage",
  components: {
    BreadCrumb,
    IconLink,
  },
});
</script>