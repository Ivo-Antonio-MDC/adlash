<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Examples</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0">
        Add the <code>object-fit-{value}</code> class to the
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element"
          target="_blank"
          >replaced element</a
        >:
      </p>
      <img
        src="../../../assets/images/gallery/gallery7.jpg"
        width="140"
        height="120"
        class="me-10 mt-15 object-fit-contain border rounded"
        alt="image"
      />
      <img
        src="../../../assets/images/gallery/gallery7.jpg"
        width="140"
        height="120"
        class="me-10 mt-15 object-fit-cover border rounded"
        alt="image"
      />
      <img
        src="../../../assets/images/gallery/gallery7.jpg"
        width="140"
        height="120"
        class="me-10 mt-15 object-fit-fill border rounded"
        alt="image"
      />
      <img
        src="../../../assets/images/gallery/gallery7.jpg"
        width="140"
        height="120"
        class="me-10 mt-15 object-fit-scale border rounded"
        alt="image"
      />
      <img
        src="../../../assets/images/gallery/gallery7.jpg"
        width="140"
        height="120"
        class="me-10 mt-15 object-fit-none border rounded"
        alt="image"
      />
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#objectFitCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="objectFitCode">
&lt;img src="..." class="object-fit-contain border rounded" alt="..."&gt;
&lt;img src="..." class="object-fit-cover border rounded" alt="..."&gt;
&lt;img src="..." class="object-fit-fill border rounded" alt="..."&gt;
&lt;img src="..." class="object-fit-scale border rounded" alt="..."&gt;
&lt;img src="..." class="object-fit-none border rounded" alt="..."&gt;
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Responsive</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0">
        Responsive variations also exist for each <code>object-fit</code> value
        using the format <code>.object-fit-{breakpoint}-{value}</code>, for the
        following breakpoint abbreviations: <code>sm</code>, <code>md</code>,
        <code>lg</code>, <code>xl</code>, and <code>xxl</code>. Classes can be
        combined for various effects as you need.
      </p>
      <img
        src="../../../assets/images/gallery/gallery7.jpg"
        width="140"
        height="80"
        class="me-10 mt-15 object-fit-sm-contain border rounded"
        alt="image"
      />
      <img
        src="../../../assets/images/gallery/gallery7.jpg"
        width="140"
        height="80"
        class="me-10 mt-15 object-fit-md-contain border rounded"
        alt="image"
      />
      <img
        src="../../../assets/images/gallery/gallery7.jpg"
        width="140"
        height="80"
        class="me-10 mt-15 object-fit-lg-contain border rounded"
        alt="image"
      />
      <img
        src="../../../assets/images/gallery/gallery7.jpg"
        width="140"
        height="80"
        class="me-10 mt-15 object-fit-xl-contain border rounded"
        alt="image"
      />
      <img
        src="../../../assets/images/gallery/gallery7.jpg"
        width="140"
        height="80"
        class="me-10 mt-15 object-fit-xxl-contain border rounded"
        alt="image"
      />
      <div class="position-relative mt-25">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#resoonsiveObjectFitCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="resoonsiveObjectFitCode">
&lt;img src="..." class="object-fit-sm-contain border rounded" alt="..."&gt;
&lt;img src="..." class="object-fit-md-contain border rounded" alt="..."&gt;
&lt;img src="..." class="object-fit-lg-contain border rounded" alt="..."&gt;
&lt;img src="..." class="object-fit-xl-contain border rounded" alt="..."&gt;
&lt;img src="..." class="object-fit-xxl-contain border rounded" alt="..."&gt;
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-10">Video</h5>
      <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
        The <code>.object-fit-{value}</code> and responsive
        <code>.object-fit-{breakpoint}-{value}</code> utilities also work on
        <code>&lt;video&gt;</code> elements.
      </p>
      <div class="position-relative">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#videoObjectFitCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="videoObjectFitCode">
&lt;video src="..." class="object-fit-contain" autoplay&gt;&lt;/video&gt;
&lt;video src="..." class="object-fit-cover" autoplay&gt;&lt;/video&gt;
&lt;video src="..." class="object-fit-fill" autoplay&gt;&lt;/video&gt;
&lt;video src="..." class="object-fit-scale" autoplay&gt;&lt;/video&gt;
&lt;video src="..." class="object-fit-none" autoplay&gt;&lt;/video&gt;
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ObjectFit",
};
</script>