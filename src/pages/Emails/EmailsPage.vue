<template>
  <BreadCrumb PageTitle="Emails" />
  <EmailsContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import EmailsContent from "../../components/Emails/Inbox/EmailsContent.vue";

export default defineComponent({
  name: "EmailsPage",
  components: {
    BreadCrumb,
    EmailsContent,
  },
});
</script>