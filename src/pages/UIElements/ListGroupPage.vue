<template>
  <BreadCrumb PageTitle="Editors" />
  <ListGroup />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import ListGroup from "../../components/UIElements/ListGroup/ListGroup.vue";

export default defineComponent({
  name: "ListGroupPage",
  components: {
    BreadCrumb,
    ListGroup,
  },
});
</script>