<template>
  <div class="dark-swtich-btn">
    <button
      class="switch-toggle transition d-inline-block position-relative border-0 rounded-circle"
      id="switch-toggle"
      @click="toggleDarkMode"
    >
      <i class="flaticon-moon"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LightDarkSwtichBtn",

  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle("dark", this.isDarkMode);
      localStorage.setItem("dark", this.isDarkMode.toString());
    },
  },
  mounted() {
    const storedDarkMode = localStorage.getItem("dark");
    if (storedDarkMode) {
      this.isDarkMode = storedDarkMode === "true";
      document.body.classList.toggle("dark", this.isDarkMode);
    }
  },
});
</script>