<template>
  <BreadCrumb PageTitle="Contacts List" />
  <ContactsList />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ContactsList from "../../components/CRM/ContactsList/ContactsList.vue";

export default defineComponent({
  name: "ContactsListPage",
  components: {
    BreadCrumb,
    ContactsList,
  },
});
</script>