<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Use our low-level <code>z-index</code> utilities to quickly change the
        stack level of an element or component.
      </p>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        Use <code>z-index</code> utilities to stack elements on top of one
        another. Requires a <code>position</code> value other than
        <code>static</code>, which can be set with custom styles or using our
        <a
          href="https://getbootstrap.com/docs/5.3/utilities/position/"
          target="_blank"
        >
          position utilities
        </a>
        .
      </p>
      <div class="border p-2 p-lg-4">
        <div style="min-height: 6rem">
          <div
            class="z-3 position-absolute text-white fw-medium bg-primary border p-4 rounded-3"
          >
            <span class="position-absolute end-0 bottom-0">z-3</span>
          </div>
          <div
            class="z-2 position-absolute text-white fw-medium ms-20 mt-20 bg-primary border p-4 rounded-3"
          >
            <span class="position-absolute end-0 bottom-0">z-2</span>
          </div>
          <div
            class="z-1 position-absolute text-white fw-medium ms-35 mt-35 bg-primary border p-4 rounded-3"
          >
            <span class="position-absolute end-0 bottom-0">z-1</span>
          </div>
          <div
            class="z-0 position-absolute text-white fw-medium ms-45 mt-45 bg-primary border p-4 rounded-3"
          >
            <span class="position-absolute end-0 bottom-0">z-0</span>
          </div>
          <div
            class="z-n1 position-absolute text-white fw-medium ms-50 mt-50 bg-primary border p-4 rounded-3"
          >
            <span class="position-absolute end-0 bottom-0">z-n1</span>
          </div>
        </div>
      </div>
      <div class="position-relative mt-20">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#zIndexCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="zIndexCode">
&lt;div class="z-3 position-absolute p-5 rounded-3"&gt;&lt;span&gt;z-3&lt;/span&gt;&lt;/div&gt;
&lt;div class="z-2 position-absolute p-5 rounded-3"&gt;&lt;span&gt;z-2&lt;/span&gt;&lt;/div&gt;
&lt;div class="z-1 position-absolute p-5 rounded-3"&gt;&lt;span&gt;z-1&lt;/span&gt;&lt;/div&gt;
&lt;div class="z-0 position-absolute p-5 rounded-3"&gt;&lt;span&gt;z-0&lt;/span&gt;&lt;/div&gt;
&lt;div class="z-n1 position-absolute p-5 rounded-3"&gt;&lt;span&gt;z-n1&lt;/span&gt;&lt;/div&gt;
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZIndex",
};
</script>