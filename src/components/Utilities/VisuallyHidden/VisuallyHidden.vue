<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15">Visually Hidden</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Use these helpers to visually hide elements but keep them accessible to
        assistive technologies.
      </p>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Visually hide an element while still allowing it to be exposed to
        assistive technologies (such as screen readers) with
        <code>.visually-hidden</code>. Use
        <code>.visually-hidden-focusable</code> to visually hide an element by
        default, but to display it when it’s focused (e.g. by a keyboard-only
        user). <code>.visually-hidden-focusable</code> can also be applied to a
        container–thanks to <code>:focus-within</code>, the container will be
        displayed when any child element of the container receives focus.
      </p>
      <div class="position-relative mt-15 mt-md-20">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#visuallyHiddenCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="visuallyHiddenCode">
<div>&lt;h2 class="visually-hidden"&gt;Title for screen readers&lt;/h2&gt;</div>
<div>&lt;a class="visually-hidden-focusable" href="#content"&gt;Skip to main content&lt;/a&gt;</div>
<div>&lt;div class="visually-hidden-focusable"&gt;A container with a &lt;a href="#"&gt;focusable element&lt;/a&gt;.&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VisuallyHidden",
};
</script>