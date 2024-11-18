<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Text Truncation</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        For longer content, you can add a <code>.text-truncate</code> class to
        truncate the text with an ellipsis.
        <strong>
          Requires
          <code>display: inline-block</code>
          or
          <code>display: block</code>.
        </strong>
      </p>
      <div class="border p-2 p-xl-4">
        <div class="row">
          <div class="col-2 text-truncate fs-md-15 fs-lg-16">
            This text is quite long, and will be truncated once displayed.
          </div>
        </div>
        <span
          class="d-inline-block text-truncate fs-md-15 fs-lg-16"
          style="max-width: 150px"
        >
          This text is quite long, and will be truncated once displayed.
        </span>
      </div>
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#textTruncationCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="textTruncationCode">
&lt;!-- Block level --&gt;
&lt;div class="row"&gt;
    &lt;div class="col-2 text-truncate"&gt;
        This text is quite long, and will be truncated once displayed.
    &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Inline level --&gt;
&lt;span class="d-inline-block text-truncate" style="max-width: 150px;"&gt;
    This text is quite long, and will be truncated once displayed.
&lt;/span&gt;
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextTruncation",
};
</script>