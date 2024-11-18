<template>
  <div class="row">
    <div class="col-xxxl-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-xl-25">
            Iframe Ratio
          </h5>
          <div class="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/qPMOPiCUWkA"
              title="How to Create a Double Exposure Effect in Affinity Photo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#iframeRatioCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="iframeRatioCode">
<div>&lt;div class="ratio ratio-16x9"&gt;</div>
    <div>&lt;iframe src="https://www.youtube.com/embed/qPMOPiCUWkA" title="How to Create a Double Exposure Effect in Affinity Photo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxxl-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-5 mb-md-10 mb-xl-15">
            Aspect Ratios
          </h5>
          <div
            class="ratio ratio-1x1 bg-gray border d-inline-block me-10 mt-10"
            style="width: 10rem"
          >
            <div
              class="d-flex justify-content-center align-items-center fw-medium"
            >
              1x1
            </div>
          </div>
          <div
            class="ratio ratio-4x3 bg-gray border d-inline-block me-10 mt-10"
            style="width: 10rem"
          >
            <div
              class="d-flex justify-content-center align-items-center fw-medium"
            >
              4x3
            </div>
          </div>
          <div
            class="ratio ratio-16x9 bg-gray border d-inline-block me-10 mt-10"
            style="width: 10rem"
          >
            <div
              class="d-flex justify-content-center align-items-center fw-medium"
            >
              16x9
            </div>
          </div>
          <div
            class="ratio ratio-21x9 bg-gray border d-inline-block me-10 mt-10"
            style="width: 10rem"
          >
            <div
              class="d-flex justify-content-center align-items-center fw-medium"
            >
              21x9
            </div>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#aspectRatiosCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="aspectRatiosCode">
&lt;div class="ratio ratio-1x1"&gt;
    &lt;div&gt;1x1&lt;/div&gt;
&lt;/div&gt;
&lt;div class="ratio ratio-4x3"&gt;
    &lt;div&gt;4x3&lt;/div&gt;
&lt;/div&gt;
&lt;div class="ratio ratio-16x9"&gt;
    &lt;div&gt;16x9&lt;/div&gt;
&lt;/div&gt;
&lt;div class="ratio ratio-21x9"&gt;
    &lt;div&gt;21x9&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RatioContent",
};
</script>