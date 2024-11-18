<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15">Overflow</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0">
        Adjust the <code>overflow</code> property on the fly with four default
        values and classes. These classes are not responsive by default.
      </p>
      <div
        class="overflow-auto d-inline-block fw-md-15 fs-lg-16 p-3 me-10 mt-15 bg-body-tertiary"
        style="max-width: 260px; max-height: 100px"
      >
        This is an example of using <code>.overflow-auto</code> on an element
        with set width and height dimensions. By design, this content will
        vertically scroll.
      </div>
      <div
        class="overflow-hidden d-inline-block fw-md-15 fs-lg-16 p-3 me-10 mt-15 bg-body-tertiary"
        style="max-width: 260px; max-height: 100px"
      >
        This is an example of using <code>.overflow-hidden</code> on an element
        with set width and height dimensions. By design, this content will
        vertically scroll.
      </div>
      <div
        class="overflow-visible d-inline-block fw-md-15 fs-lg-16 p-3 me-10 mt-15 bg-body-tertiary"
        style="max-width: 260px; max-height: 100px"
      >
        This is an example of using <code>.overflow-visible</code> on an element
        with set width and height dimensions. By design, this content will
        vertically scroll.
      </div>
      <div
        class="overflow-scroll d-inline-block fw-md-15 fs-lg-16 p-3 me-10 mt-15 bg-body-tertiary"
        style="max-width: 260px; max-height: 100px"
      >
        This is an example of using <code>.overflow-scroll</code> on an element
        with set width and height dimensions. By design, this content will
        vertically scroll.
      </div>
      <div class="position-relative mt-20">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#overflowCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="overflowCode">
&lt;div class="overflow-auto"&gt;...&lt;/div&gt;
&lt;div class="overflow-hidden"&gt;...&lt;/div&gt;
&lt;div class="overflow-visible"&gt;...&lt;/div&gt;
&lt;div class="overflow-scroll"&gt;...&lt;/div&gt;
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15">Overflow-x</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0">
        Adjust the <code>overflow-x</code> property to affect the overflow of
        content horizontally.
      </p>
      <div
        class="overflow-x-auto p-3 me-10 mt-15 bg-body-tertiary w-100 fs-md-15 fs-lg-16 d-inline-block"
        style="max-width: 200px; max-height: 100px; white-space: nowrap"
      >
        <div><code>.overflow-x-auto</code> example on an element</div>
        <div>with set width and height dimensions.</div>
      </div>
      <div
        class="overflow-x-hidden p-3 me-10 mt-15 bg-body-tertiary w-100 fs-md-15 fs-lg-16 d-inline-block"
        style="max-width: 200px; max-height: 100px; white-space: nowrap"
      >
        <div><code>.overflow-x-hidden</code> example on an element</div>
        <div>with set width and height dimensions.</div>
      </div>
      <div
        class="overflow-x-visible p-3 me-10 mt-15 bg-body-tertiary w-100 fs-md-15 fs-lg-16 d-inline-block"
        style="max-width: 200px; max-height: 100px; white-space: nowrap"
      >
        <div><code>.overflow-x-visible</code> example on an element</div>
        <div>with set width and height dimensions.</div>
      </div>
      <div
        class="overflow-x-scroll p-3 me-10 mt-15 bg-body-tertiary w-100 fs-md-15 fs-lg-16 d-inline-block"
        style="max-width: 200px; max-height: 100px; white-space: nowrap"
      >
        <div><code>.overflow-x-scroll</code> example on an element</div>
        <div>with set width and height dimensions.</div>
      </div>
      <div class="position-relative mt-20">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#overflowXCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="overflowXCode">
&lt;div class="overflow-x-auto"&gt;...&lt;/div&gt;
&lt;div class="overflow-x-hidden"&gt;...&lt;/div&gt;
&lt;div class="overflow-x-visible"&gt;...&lt;/div&gt;
&lt;div class="overflow-x-scroll"&gt;...&lt;/div&gt;
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15">Overflow-y</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0">
        Adjust the <code>overflow-y</code> property to affect the overflow of
        content vertically.
      </p>
      <div
        class="overflow-y-auto p-3 me-10 mt-15 d-inline-block fs-md-15 fs-lg-16 bg-body-tertiary w-100"
        style="max-width: 200px; max-height: 100px"
      >
        <code>.overflow-y-auto</code> example on an element with set width and
        height dimensions.
      </div>
      <div
        class="overflow-y-hidden p-3 me-10 mt-15 d-inline-block fs-md-15 fs-lg-16 bg-body-tertiary w-100"
        style="max-width: 200px; max-height: 100px"
      >
        <code>.overflow-y-hidden</code> example on an element with set width and
        height dimensions.
      </div>
      <div
        class="overflow-y-visible p-3 me-10 mt-15 d-inline-block fs-md-15 fs-lg-16 bg-body-tertiary w-100"
        style="max-width: 200px; max-height: 100px"
      >
        <code>.overflow-y-visible</code> example on an element with set width
        and height dimensions.
      </div>
      <div
        class="overflow-y-scroll p-3 me-10 mt-15 d-inline-block fs-md-15 fs-lg-16 bg-body-tertiary w-100"
        style="max-width: 200px; max-height: 100px"
      >
        <code>.overflow-y-scroll</code> example on an element with set width and
        height dimensions.
      </div>
      <div class="position-relative mt-20">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#overflowYCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="overflowYCode">
&lt;div class="overflow-y-auto"&gt;...&lt;/div&gt;
&lt;div class="overflow-y-hidden"&gt;...&lt;/div&gt;
&lt;div class="overflow-y-visible"&gt;...&lt;/div&gt;
&lt;div class="overflow-y-scroll"&gt;...&lt;/div&gt;
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OverflowContent",
};
</script>