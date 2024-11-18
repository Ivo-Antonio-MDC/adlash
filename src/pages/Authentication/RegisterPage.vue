<template>
  <BreadCrumb PageTitle="Register" />
  <RegisterContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import RegisterContent from "../../components/Authentication/Register/RegisterContent.vue";

export default defineComponent({
  name: "RegisterPage",
  components: {
    BreadCrumb,
    RegisterContent,
  },
});
</script>