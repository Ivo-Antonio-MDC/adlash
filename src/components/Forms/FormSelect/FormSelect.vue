<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">Default</h5>
          <div class="border p-2 p-lg-4 border-dark border-opacity-10">
            <select class="form-select shadow-none text-black fs-md-15">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#defaultCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="defaultCode">
<div>&lt;select class="form-select shadow-none text-black fs-md-15"&gt;</div>
    <div>&lt;option selected&gt;Open this select menu&lt;/option&gt;</div>
    <div>&lt;option value="1"&gt;One&lt;/option&gt;</div>
    <div>&lt;option value="2"&gt;Two&lt;/option&gt;</div>
    <div>&lt;option value="3"&gt;Three&lt;/option&gt;</div>
<div>&lt;/select&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">Sizing</h5>
          <div class="border p-2 p-lg-4 border-dark border-opacity-10">
            <select
              class="form-select form-select-lg shadow-none fs-16 text-black mb-15 mb-md-20"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select
              class="form-select form-select-sm shadow-none fs-14 text-black"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#sizingCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="sizingCode">
<div>&lt;select class="form-select form-select-lg shadow-none fs-16 text-black mb-15 mb-md-20"&gt;</div>
    <div>&lt;option selected&gt;Open this select menu&lt;/option&gt;</div>
    <div>&lt;option value="1"&gt;One&lt;/option&gt;</div>
    <div>&lt;option value="2"&gt;Two&lt;/option&gt;</div>
    <div>&lt;option value="3"&gt;Three&lt;/option&gt;</div>
<div>&lt;/select&gt;</div>

<div>&lt;select class="form-select form-select-sm shadow-none fs-14 text-black"&gt;</div>
    <div>&lt;option selected&gt;Open this select menu&lt;/option&gt;</div>
    <div>&lt;option value="1"&gt;One&lt;/option&gt;</div>
    <div>&lt;option value="2"&gt;Two&lt;/option&gt;</div>
    <div>&lt;option value="3"&gt;Three&lt;/option&gt;</div>
<div>&lt;/select&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-lg-20 mb-xl-25">Disabled</h5>
          <div class="border p-2 p-lg-4 border-dark border-opacity-10">
            <select
              class="form-select fs-md-15 text-black shadow-none"
              disabled
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#disabledCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="disabledCode">
<div>&lt;select class="form-select fs-md-15 text-black shadow-none" disabled&gt;</div>
    <div>&lt;option selected&gt;Open this select menu&lt;/option&gt;</div>
    <div>&lt;option value="1"&gt;One&lt;/option&gt;</div>
    <div>&lt;option value="2"&gt;Two&lt;/option&gt;</div>
    <div>&lt;option value="3"&gt;Three&lt;/option&gt;</div>
<div>&lt;/select&gt;</div>
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
  name: "FormSelect",
};
</script>