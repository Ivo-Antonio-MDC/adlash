<template>
  <BreadCrumb PageTitle="Contacts" />
  <ContactsContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ContactsContent from "../../components/SupportDesk/Contacts/ContactsContent.vue";

export default defineComponent({
  name: "ContactsPage",
  components: {
    BreadCrumb,
    ContactsContent,
  },
});
</script>