<template>
  <BreadCrumb PageTitle="Email Confirmation" />
  <EmailConfirmation />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import EmailConfirmation from "../../components/Authentication/EmailConfirmation/EmailConfirmation.vue";

export default defineComponent({
  name: "EmailConfirmationPage",
  components: {
    BreadCrumb,
    EmailConfirmation,
  },
});
</script>