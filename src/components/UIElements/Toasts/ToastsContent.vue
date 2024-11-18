<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">
            Basic Toasts
          </h5>
          <div
            class="toast fade show"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div class="toast-header">
              <svg
                class="rounded me-2"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="#726eed"></rect>
              </svg>
              <strong class="me-auto text-black">Bootstrap</strong>
              <small class="text-muted">11 mins ago</small>
              <button
                type="button"
                class="btn-close shadow-none"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
            <div class="toast-body fs-md-15 fs-lg-16 text-paragraph lh-base">
              Hello, world! This is a toast message.
            </div>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#basicToastsCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicToastsCode">
<div>&lt;div class="toast fade" role="alert" aria-live="assertive" aria-atomic="true"&gt;</div>
    <div>&lt;div class="toast-header"&gt;</div>
        <div>&lt;svg class="rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"&gt;&lt;rect width="100%" height="100%" fill="#726eed"&gt;&lt;/rect&gt;&lt;/svg&gt;</div>
        <div>&lt;strong class="me-auto text-black"&gt;Bootstrap&lt;/strong&gt;</div>
        <div>&lt;small class="text-muted"&gt;11 mins ago&lt;/small&gt;</div>
        <div>&lt;button type="button" class="btn-close shadow-none" data-bs-dismiss="toast" aria-label="Close"&gt;&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="toast-body fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;</div>
        <div>Hello, world! This is a toast message.</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">
            Stracking Toasts
          </h5>
          <div class="toast-container position-static">
            <div
              class="toast show"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div class="toast-header">
                <svg
                  class="rounded me-2"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <rect width="100%" height="100%" fill="#726eed"></rect>
                </svg>
                <strong class="me-auto text-black">Bootstrap</strong>
                <small class="text-muted">just now</small>
                <button
                  type="button"
                  class="btn-close shadow-none"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </div>
              <div class="toast-body fs-md-15 fs-lg-16 text-paragraph lh-base">
                See? Just like this.
              </div>
            </div>
            <div
              class="toast show"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div class="toast-header">
                <svg
                  class="rounded me-2"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <rect width="100%" height="100%" fill="#726eed"></rect>
                </svg>
                <strong class="me-auto text-black">Bootstrap</strong>
                <small class="text-muted">2 seconds ago</small>
                <button
                  type="button"
                  class="btn-close shadow-none"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </div>
              <div class="toast-body fs-md-15 fs-lg-16 text-paragraph lh-base">
                Heads up, toasts will stack automatically
              </div>
            </div>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#strackingToastsCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="strackingToastsCode">
<div>&lt;div class="toast-container position-static"&gt;</div>
    <div>&lt;div class="toast" role="alert" aria-live="assertive" aria-atomic="true"&gt;</div>
        <div>&lt;div class="toast-header"&gt;</div>
            <div>&lt;svg class="rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"&gt;&lt;rect width="100%" height="100%" fill="#726eed"&gt;&lt;/rect&gt;&lt;/svg&gt;</div>
            <div>&lt;strong class="me-auto text-black"&gt;Bootstrap&lt;/strong&gt;</div>
            <div>&lt;small class="text-muted"&gt;just now&lt;/small&gt;</div>
            <div>&lt;button type="button" class="btn-close shadow-none" data-bs-dismiss="toast" aria-label="Close"&gt;&lt;/button&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;div class="toast-body fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;</div>
            <div>See? Just like this.</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>

    <div>&lt;div class="toast" role="alert" aria-live="assertive" aria-atomic="true"&gt;</div>
        <div>&lt;div class="toast-header"&gt;</div>
            <div>&lt;svg class="rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"&gt;&lt;rect width="100%" height="100%" fill="#726eed"&gt;&lt;/rect&gt;&lt;/svg&gt;</div>
            <div>&lt;strong class="me-auto text-black"&gt;Bootstrap&lt;/strong&gt;</div>
            <div>&lt;small class="text-muted"&gt;2 seconds ago&lt;/small&gt;</div>
            <div>&lt;button type="button" class="btn-close shadow-none" data-bs-dismiss="toast" aria-label="Close"&gt;&lt;/button&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;div class="toast-body fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;</div>
            <div>Heads up, toasts will stack automatically</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">
            Color Schemes Toasts
          </h5>
          <div
            class="toast show align-items-center text-bg-primary border-0"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div class="d-flex">
              <div class="toast-body fs-md-15 fs-lg-16">
                Hello, world! This is a toast message.
              </div>
              <button
                type="button"
                class="btn-close shadow-none btn-close-white me-2 m-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#colorSchemesToastsCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="colorSchemesToastsCode">
<div>&lt;div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true"&gt;</div>
    <div>&lt;div class="d-flex"&gt;</div>
        <div>&lt;div class="toast-body fs-md-15 fs-lg-16"&gt;</div>
            <div>Hello, world! This is a toast message.</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;button type="button" class="btn-close shadow-none btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"&gt;&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">
            Live Toasts
          </h5>
          <button type="button" class="btn btn-primary" @click="showToast">
            Show live toast
          </button>
          <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div
              id="liveToast"
              class="toast hide"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div class="toast-header">
                <svg
                  class="rounded me-2"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <rect width="100%" height="100%" fill="#726eed"></rect>
                </svg>
                <strong class="me-auto text-black">Bootstrap</strong>
                <small class="text-muted">11 mins ago</small>
                <button
                  type="button"
                  class="btn-close shadow-none"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </div>
              <div class="toast-body fs-md-15 fs-lg-16 text-paragraph lh-base">
                Hello, world! This is a toast message.
              </div>
            </div>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#liveToastsCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="liveToastsCode">
<div>&lt;button type="button" class="btn btn-primary" id="liveToastBtn"&gt;Show live toast&lt;/button&gt;</div>

<div>&lt;div class="toast-container position-fixed bottom-0 end-0 p-3"&gt;</div>
    <div>&lt;div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true"&gt;</div>
        <div>&lt;div class="toast-header"&gt;</div>
            <div>&lt;svg class="rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"&gt;&lt;rect width="100%" height="100%" fill="#726eed"&gt;&lt;/rect&gt;&lt;/svg&gt;</div>
            <div>&lt;strong class="me-auto text-black"&gt;Bootstrap&lt;/strong&gt;</div>
            <div>&lt;small class="text-muted"&gt;11 mins ago&lt;/small&gt;</div>
            <div>&lt;button type="button" class="btn-close shadow-none" data-bs-dismiss="toast" aria-label="Close"&gt;&lt;/button&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;div class="toast-body fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;</div>
            <div>Hello, world! This is a toast message.</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">
            Custom Content Toasts
          </h5>
          <div
            class="toast show align-items-center"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div class="d-flex">
              <div class="toast-body fs-md-15 fs-lg-16 text-paragraph lh-base">
                Hello, world! This is a toast message.
              </div>
              <button
                type="button"
                class="btn-close shadow-none me-2 m-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
          </div>
          <div class="position-relative mt-25 mb-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#customContentToastsCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="customContentToastsCode">
<div>&lt;div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true"&gt;</div>
    <div>&lt;div class="d-flex"&gt;</div>
        <div>&lt;div class="toast-body fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;</div>
            <div>Hello, world! This is a toast message.</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;button type="button" class="btn-close shadow-none me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"&gt;&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
          <p class="text-paragraph fs-md-15 fs-lg-16 text-paragraph lh-base">
            Alternatively, you can also add additional controls and components
            to toasts.
          </p>
          <div
            class="toast show"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div class="toast-body">
              <span class="d-block fs-md-15 fs-lg-16 text-paragraph lh-base"
                >Hello, world! This is a toast message.</span
              >
              <div class="mt-2 pt-2 border-top">
                <button type="button" class="btn btn-primary btn-sm">
                  Take action
                </button>
                <button
                  type="button"
                  class="btn btn-secondary btn-sm"
                  data-bs-dismiss="toast"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#customContent2ToastsCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="customContent2ToastsCode">
<div>&lt;div class="toast" role="alert" aria-live="assertive" aria-atomic="true"&gt;</div>
    <div>&lt;div class="toast-body"&gt;</div>
        <div>&lt;span class="d-block fs-md-15 fs-lg-16 text-paragraph lh-base"&gt;Hello, world! This is a toast message.&lt;/span&gt;</div>
        <div>&lt;div class="mt-2 pt-2 border-top"&gt;</div>
            <div>&lt;button type="button" class="btn btn-primary btn-sm"&gt;Take action&lt;/button&gt;</div>
            <div>&lt;button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast"&gt;Close&lt;/button&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const showToast = () => {
  const toastElement = document.getElementById("liveToast");
  if (toastElement) {
    const toastBootstrap = new window.bootstrap.Toast(toastElement);
    toastBootstrap.show();
  }
};
onMounted(() => {
  if (typeof window.bootstrap === "undefined") {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5/dist/js/bootstrap.bundle.min.js";
    script.onload = () => {
      showToast();
    };
    document.head.appendChild(script);
  }
});

// export default defineComponent({
//   name: "ToastsContent",
// });
</script>