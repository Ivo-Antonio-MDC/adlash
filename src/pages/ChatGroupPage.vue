<template>
  <BreadCrumb PageTitle="Chat" />
  <ChatGroup />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../components/Common/BreadCrumb.vue";
import ChatGroup from "../components/ChatGroup/ChatGroup.vue";

export default defineComponent({
  name: "ChatGroupPage",
  components: {
    BreadCrumb,
    ChatGroup,
  },
});
</script>