<template>
  <BreadCrumb PageTitle="Chat" />
  <ChatContact />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../components/Common/BreadCrumb.vue";
import ChatContact from "../components/ChatContact/ChatContact.vue";

export default defineComponent({
  name: "ChatContactPage",
  components: {
    BreadCrumb,
    ChatContact,
  },
});
</script>