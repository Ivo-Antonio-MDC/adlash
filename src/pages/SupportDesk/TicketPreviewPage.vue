<template>
  <BreadCrumb PageTitle="Ticket Preview" />
  <TicketPreview />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import TicketPreview from "../../components/SupportDesk/TicketPreview/TicketPreview.vue";

export default defineComponent({
  name: "TicketPreviewPage",
  components: {
    BreadCrumb,
    TicketPreview,
  },
});
</script>