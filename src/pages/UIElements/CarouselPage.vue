<template>
  <BreadCrumb PageTitle="Carousel" />
  <CarouselContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import CarouselContent from "../../components/UIElements/Carousel/CarouselContent.vue";

export default defineComponent({
  name: "CarouselPage",
  components: {
    BreadCrumb,
    CarouselContent,
  },
});
</script>