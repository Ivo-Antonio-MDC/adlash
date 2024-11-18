<template>
  <div class="flex-grow-1"></div>
  <footer
    class="footer-area text-center text-md-start bg-white ps-15 pe-15 pt-20 pb-20 ps-md-40 pe-md-40 pt-md-25 pb-md-25"
  >
    <div class="row align-items-center">
      <div class="col-md-6 col-lg-6">
        <p class="text-body-secondary fw-medium mb-0">
          © <span class="fw-bold text-primary">Adlash</span>. All rights
          reserved by
          <a
            href="https://envytheme.com/"
            class="text-decoration-none fw-bold transition"
            target="_blank"
            >EnvyTheme</a
          >
        </p>
      </div>
      <div class="col-md-6 col-lg-6 text-md-end">
        <ul class="footer-menu ps-0 mb-0 list-unstyled fw-medium">
          <li class="d-inline-block">
            <router-link
              to="/privacy-policy"
              class="text-decoration-none text-body-secondary transition"
            >
              Privacy Policy
            </router-link>
          </li>
          <li class="d-inline-block">
            <router-link
              to="/terms-conditions"
              class="text-decoration-none text-body-secondary transition"
            >
              Terms & Conditions
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "MainFooter",
};
</script>