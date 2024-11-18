<template>
  <BreadCrumb PageTitle="To-Do List" />
  <ToDoList />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ToDoList from "../../components/Projects/ToDoList/ToDoList.vue";

export default defineComponent({
  name: "ToDoListPage",
  components: {
    BreadCrumb,
    ToDoList,
  },
});
</script>