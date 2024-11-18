<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
        Image Size Rounded-Circle
      </h5>
      <ul class="nav nav-tabs mb-md-5" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="imageCirclePreview-tab"
            data-bs-toggle="tab"
            data-bs-target="#imageCirclePreview-tab-pane"
            type="button"
            role="tab"
            aria-controls="imageCirclePreview-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="imageCircleCode-tab"
            data-bs-toggle="tab"
            data-bs-target="#imageCircleCode-tab-pane"
            type="button"
            role="tab"
            aria-controls="imageCircleCode-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="imageCirclePreview-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <div class="d-md-flex align-items-center">
            <img
              src="../../../assets/images/user/user2.jpg"
              width="130"
              height="130"
              class="rounded-circle me-15 mt-15"
              alt="image"
            />
            <img
              src="../../../assets/images/user/user2.jpg"
              width="110"
              height="110"
              class="rounded-circle me-15 mt-15"
              alt="image"
            />
            <img
              src="../../../assets/images/user/user2.jpg"
              width="90"
              height="90"
              class="rounded-circle me-15 mt-15"
              alt="image"
            />
            <img
              src="../../../assets/images/user/user2.jpg"
              width="70"
              height="70"
              class="rounded-circle me-15 mt-15"
              alt="image"
            />
            <img
              src="../../../assets/images/user/user2.jpg"
              width="50"
              height="50"
              class="rounded-circle mt-15"
              alt="image"
            />
          </div>
        </div>
        <div
          class="tab-pane fade position-relative"
          id="imageCircleCode-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <button
            class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
            data-clipboard-target="#imageCircleCode"
          >
            Copy
          </button>
          <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="imageCircleCode">
<div>&lt;img src="../../../assets/images/user/user2.jpg" width="130" height="130" class="rounded-circle" alt="image"&gt;</div>
<div>&lt;img src="../../../assets/images/user/user2.jpg" width="110" height="110" class="rounded-circle" alt="image"&gt;</div>
<div>&lt;img src="../../../assets/images/user/user2.jpg" width="90" height="90" class="rounded-circle" alt="image"&gt;</div>
<div>&lt;img src="../../../assets/images/user/user2.jpg" width="70" height="70" class="rounded-circle" alt="image"&gt;</div>
<div>&lt;img src="../../../assets/images/user/user2.jpg" width="50" height="50" class="rounded-circle" alt="image"&gt;</div>
</code>
</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageRoundedCircle",
};
</script>