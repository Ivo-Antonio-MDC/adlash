<template>
  <div class="row justify-content-center">
    <div
      class="col-sm-6 col-xl-4 col-xxxl-3"
      v-for="card in cards"
      :key="card.id"
    >
      <div class="card mb-25 border-0 rounded-0">
        <div
          class="card-body p-15 p-sm-20 p-md-25 p-lg-30 bg-image letter-spacing"
          :style="{
            'background-image':
              'url(' + require(`../../../../assets/images/${card.image}`) + ')',
          }"
        >
          <h5 class="text-white fw-bold mb-10">{{ card.title }}</h5>
          <p class="mb-15 fs-md-15 fs-lg-16 text-white lh-base">
            {{ card.shortDesc }}
          </p>
          <router-link
            to="/cards"
            class="default-btn d-inline-block bg-white text-black text-decoration-none fw-medium pt-10 pb-10 pt-md-12 pb-md-12 ps-25 pe-25 rounded-1 transition"
          >
            View More
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import cardsStyleFour from "./cardsStyleFour.json";

export default defineComponent({
  name: "CardsStyleFour",
  data() {
    return {
      cards: cardsStyleFour,
    };
  },
});
</script>