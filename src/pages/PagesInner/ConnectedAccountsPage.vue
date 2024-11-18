<template>
  <BreadCrumb PageTitle="Connected Accounts" />
  <ConnectedAccounts />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ConnectedAccounts from "../../components/PagesInner/ConnectedAccounts/ConnectedAccounts.vue";

export default defineComponent({
  name: "ConnectedAccountsPage",
  components: {
    BreadCrumb,
    ConnectedAccounts,
  },
});
</script>