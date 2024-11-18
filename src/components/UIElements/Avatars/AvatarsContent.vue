<template>
  <div class="row">
    <div class="col-xxl-6">
      <ImageRoundedCircle />
    </div>
    <div class="col-xxl-6">
      <ImageSquareCircle />
    </div>
    <div class="col-xxl-6">
      <AvatarRoundedCircle />
    </div>
    <div class="col-xxl-6">
      <AvatarSquareCircle />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageRoundedCircle from "./ImageRoundedCircle.vue";
import ImageSquareCircle from "./ImageSquareCircle.vue";
import AvatarRoundedCircle from "./AvatarRoundedCircle.vue";
import AvatarSquareCircle from "./AvatarSquareCircle.vue";

export default defineComponent({
  name: "AvatarsContent",
  components: {
    ImageRoundedCircle,
    ImageSquareCircle,
    AvatarRoundedCircle,
    AvatarSquareCircle,
  },
});
</script>