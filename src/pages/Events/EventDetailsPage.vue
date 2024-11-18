<template>
  <BreadCrumb PageTitle="Event Details" />
  <EventDetails />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import EventDetails from "../../components/Events/EventsDetails/EventDetails.vue";

export default defineComponent({
  name: "EventDetailsPage",
  components: {
    BreadCrumb,
    EventDetails,
  },
});
</script>