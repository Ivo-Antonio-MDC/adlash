<template>
  <BreadCrumb PageTitle="Chat" />
  <ChatContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../components/Common/BreadCrumb.vue";
import ChatContent from "../components/Chat/ChatContent.vue";

export default defineComponent({
  name: "ChatPage",
  components: {
    BreadCrumb,
    ChatContent,
  },
});
</script>