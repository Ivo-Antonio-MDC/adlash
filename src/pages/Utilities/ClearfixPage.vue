<template>
  <BreadCrumb PageTitle="Clearfix" />
  <ClearfixContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ClearfixContent from "../../components/Utilities/Clearfix/ClearfixContent.vue";

export default defineComponent({
  name: "ClearfixPage",
  components: {
    BreadCrumb,
    ClearfixContent,
  },
});
</script>