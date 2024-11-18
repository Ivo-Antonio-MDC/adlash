<template>
  <BreadCrumb PageTitle="Users List" />
  <UsersList />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import UsersList from "../../components/Users/UsersList/UsersList.vue";

export default defineComponent({
  name: "UsersListPage",
  components: {
    BreadCrumb,
    UsersList,
  },
});
</script>