<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15">Shadows</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Add or remove shadows to elements with box-shadow utilities.
      </p>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        While shadows on components are disabled by default in Bootstrap and can
        be enabled via <code>$enable-shadows</code>, you can also quickly add or
        remove a shadow with our <code>box-shadow</code> utility classes.
        Includes support for <code>.shadow-none</code> and three default sizes
        (which have associated variables to match).
      </p>
      <div class="border p-2 p-lg-4">
        <div
          class="shadow-none p-3 mb-5 bg-body-tertiary rounded fs-md-15 fs-lg-16 fw-medium mb-10"
        >
          No shadow
        </div>
        <div
          class="shadow-sm p-3 mb-5 bg-body-tertiary rounded fs-md-15 fs-lg-16 fw-medium mb-10"
        >
          Small shadow
        </div>
        <div
          class="shadow p-3 mb-5 bg-body-tertiary rounded fs-md-15 fs-lg-16 fw-medium mb-10"
        >
          Regular shadow
        </div>
        <div
          class="shadow-lg p-3 mb-5 bg-body-tertiary rounded fs-md-15 fs-lg-16 fw-medium"
        >
          Larger shadow
        </div>
      </div>
      <div class="position-relative mt-20">
        <!-- <button class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0" data-clipboard-target="#shadowsCode">
                            Copy
                        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="shadowsCode">
&lt;div class="shadow-none p-3 mb-5 bg-body-tertiary rounded"&gt;No shadow&lt;/div&gt;
&lt;div class="shadow-sm p-3 mb-5 bg-body-tertiary rounded"&gt;Small shadow&lt;/div&gt;
&lt;div class="shadow p-3 mb-5 bg-body-tertiary rounded"&gt;Regular shadow&lt;/div&gt;
&lt;div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded"&gt;Larger shadow&lt;/div&gt;
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShadowsContent",
};
</script>