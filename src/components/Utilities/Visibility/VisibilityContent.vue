<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Control the visibility of elements, without modifying their display,
        with visibility utilities.
      </p>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Set the <code>visibility</code> of elements with our visibility
        utilities. These utility classes do not modify the
        <code>display</code> value at all and do not affect layout –
        <code>.invisible</code> elements still take up space in the page.
      </p>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Apply <code>.visible</code> or <code>.invisible</code> as needed.
      </p>
      <div class="position-relative mt-20">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#visibilityCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="visibilityCode">
&lt;div class="visible"&gt;...&lt;/div&gt;
&lt;div class="invisible"&gt;...&lt;/div&gt;
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VisibilityContent",
};
</script>