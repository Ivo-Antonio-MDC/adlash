<template>
  <BreadCrumb PageTitle="Add User" />
  <AddUser />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import AddUser from "../../components/Users/AddUser/AddUser.vue";

export default defineComponent({
  name: "AddUserPage",
  components: {
    BreadCrumb,
    AddUser,
  },
});
</script>