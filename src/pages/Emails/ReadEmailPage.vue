<template>
  <BreadCrumb PageTitle="Read Email" />
  <ReadEmail />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ReadEmail from "../../components/Emails/ReadEmail/ReadEmail.vue";

export default defineComponent({
  name: "ReadEmailPage",
  components: {
    BreadCrumb,
    ReadEmail,
  },
});
</script>