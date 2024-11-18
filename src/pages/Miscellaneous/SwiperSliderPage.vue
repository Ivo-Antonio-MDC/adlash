<template>
  <BreadCrumb PageTitle="Swiper Slider" />
  <SwiperSlider />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import SwiperSlider from "../../components/Miscellaneous/SwiperSlider/SwiperSlider.vue";

export default defineComponent({
  name: "SwiperSliderPage",
  components: {
    BreadCrumb,
    SwiperSlider,
  },
});
</script>