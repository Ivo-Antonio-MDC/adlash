<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Enable Flex Behaviors</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Apply <code>display</code> utilities to create a flexbox container and
        transform <strong>direct children elements</strong> into flex items.
        Flex containers and items are able to be modified further with
        additional flex properties.
      </p>
      <div class="d-flex p-2 fw-medium bg-gray border">
        I'm a flexbox container!
      </div>
      <div class="position-relative mt-25 mb-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#flexboxContainerCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="flexboxContainerCode">
&lt;div class="d-flex p-2"&gt;I'm a flexbox container!&lt;/div&gt;
</code>
</pre>
      </div>
      <div class="d-inline-flex p-2 fw-medium bg-gray border">
        I'm an inline flexbox container!
      </div>
      <div class="position-relative mt-25 mb-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#inlineFlexboxContainerCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="inlineFlexboxContainerCode">
&lt;div class="d-inline-flex p-2"&gt;I'm an inline flexbox container!&lt;/div&gt;
</code>
</pre>
      </div>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Responsive variations also exist for <code>.d-flex</code> and
        <code>.d-inline-flex</code>.
      </p>
      <ul>
        <li class="fs-md-15 fs-lg-16 text-paragraph"><code>.d-flex</code></li>
        <li class="fs-md-15 fs-lg-16 text-paragraph">
          <code>.d-inline-flex</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph">
          <code>.d-sm-flex</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph">
          <code>.d-sm-inline-flex</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph">
          <code>.d-md-flex</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph">
          <code>.d-md-inline-flex</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph">
          <code>.d-lg-flex</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph">
          <code>.d-lg-inline-flex</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph">
          <code>.d-xl-flex</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph">
          <code>.d-xl-inline-flex</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph">
          <code>.d-xxl-flex</code>
        </li>
        <li class="fs-md-15 fs-lg-16 text-paragraph">
          <code>.d-xxl-inline-flex</code>
        </li>
      </ul>
      <a
        href="https://getbootstrap.com/docs/5.3/utilities/flex/#direction"
        class="card-link-btn text-decoration-none text-primary fw-medium position-relative d-inline-block mt-5"
        target="_blank"
      >
        More About Flex
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlexContent",
};
</script>