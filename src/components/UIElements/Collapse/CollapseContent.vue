<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">Basic Collapse</h5>
      <ul class="nav nav-tabs mb-5 mb-md-10" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="basicCollapsePreview-tab"
            data-bs-toggle="tab"
            data-bs-target="#basicCollapsePreview-tab-pane"
            type="button"
            role="tab"
            aria-controls="basicCollapsePreview-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="basicCollapseCode-tab"
            data-bs-toggle="tab"
            data-bs-target="#basicCollapseCode-tab-pane"
            type="button"
            role="tab"
            aria-controls="basicCollapseCode-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="basicCollapsePreview-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <a
            class="btn btn-primary me-10 mt-10"
            data-bs-toggle="collapse"
            href="#basicCollapse"
            role="button"
            aria-expanded="false"
            aria-controls="basicCollapse"
          >
            Link with href
          </a>
          <button
            class="btn btn-primary me-10 mt-10"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#basicCollapse"
            aria-expanded="false"
            aria-controls="basicCollapse"
          >
            Button with data-bs-target
          </button>
          <div class="collapse" id="basicCollapse">
            <div class="card card-body">
              <p class="mb-0 text-paragraph fs-md-15 fs-lg-16 lh-base">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
              </p>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade position-relative"
          id="basicCollapseCode-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <!-- <button
            class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
            data-clipboard-target="#basicCollapseCode"
          >
            Copy
          </button> -->
          <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicCollapseCode">
<div>&lt;a class="btn btn-primary me-10" data-bs-toggle="collapse" href="#basicCollapse" role="button" aria-expanded="false" aria-controls="basicCollapse"&gt;</div>
    <div>Link with href</div>
<div>&lt;/a&gt;</div>
<div>&lt;button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#basicCollapse" aria-expanded="false" aria-controls="basicCollapse"&gt;</div>
    <div>Button with data-bs-target</div>
<div>&lt;/button&gt;</div>
<div>&lt;div class="mt-12"&gt;&lt;/div&gt;</div>
<div>&lt;div class="collapse" id="basicCollapse"&gt;</div>
    <div>&lt;div class="card card-body"&gt;</div>
        <div>&lt;p class="mb-0 text-paragraph fs-md-15 fs-lg-16 lh-base"&gt;Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.&lt;/p&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
        </div>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
        Horizontal Collapse
      </h5>
      <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="horizontalCollapsePreview-tab"
            data-bs-toggle="tab"
            data-bs-target="#horizontalCollapsePreview-tab-pane"
            type="button"
            role="tab"
            aria-controls="horizontalCollapsePreview-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="horizontalCollapseCode-tab"
            data-bs-toggle="tab"
            data-bs-target="#horizontalCollapseCode-tab-pane"
            type="button"
            role="tab"
            aria-controls="horizontalCollapseCode-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="horizontalCollapsePreview-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#horizontalCollapse"
            aria-expanded="false"
            aria-controls="horizontalCollapse"
          >
            Toggle width collapse
          </button>
          <div class="mt-12"></div>
          <div style="min-height: 120px">
            <div class="collapse collapse-horizontal" id="horizontalCollapse">
              <div class="card card-body" style="width: 300px">
                <p class="mb-0 text-paragraph fs-md-15 fs-lg-16 lh-base">
                  This is some placeholder content for a horizontal collapse.
                  It's hidden by default and shown when triggered.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade position-relative"
          id="horizontalCollapseCode-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <!-- <button
            class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
            data-clipboard-target="#horizontalCollapseCode"
          >
            Copy
          </button> -->
          <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicCollapseCode">
<div>&lt;button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#horizontalCollapse" aria-expanded="false" aria-controls="horizontalCollapse"&gt;</div>
    <div>Toggle width collapse</div>
<div>&lt;/button&gt;</div>
<div>&lt;div class="mt-12"&gt;&lt;/div&gt;</div>
<div>&lt;div style="min-height: 120px;"&gt;</div>
    <div>&lt;div class="collapse collapse-horizontal" id="horizontalCollapse"&gt;</div>
        <div>&lt;div class="card card-body" style="width: 300px;"&gt;</div>
            <div>&lt;p class="mb-0 text-paragraph fs-md-15 fs-lg-16 lh-base"&gt;This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.&lt;/p&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
        </div>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
        Multiple Toggles & Targets Collapse
      </h5>
      <ul class="nav nav-tabs mb-5 mb-md-10" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="multipleCollapsePreview-tab"
            data-bs-toggle="tab"
            data-bs-target="#multipleCollapsePreview-tab-pane"
            type="button"
            role="tab"
            aria-controls="multipleCollapsePreview-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="multipleCollapseCode-tab"
            data-bs-toggle="tab"
            data-bs-target="#multipleCollapseCode-tab-pane"
            type="button"
            role="tab"
            aria-controls="multipleCollapseCode-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="multipleCollapsePreview-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <a
            class="btn btn-primary me-10 mt-10"
            data-bs-toggle="collapse"
            href="#multiCollapse1"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapse1"
          >
            Toggle first element
          </a>
          <button
            class="btn btn-primary me-10 mt-10"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapse2"
            aria-expanded="false"
            aria-controls="multiCollapse2"
          >
            Toggle second element
          </button>
          <button
            class="btn btn-primary me-10 mt-10"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".multi-collapse"
            aria-expanded="false"
            aria-controls="multiCollapse1 multiCollapse2"
          >
            Toggle both elements
          </button>
          <div class="row">
            <div class="col">
              <div class="collapse multi-collapse" id="multiCollapse1">
                <div class="card card-body">
                  <p class="text-paragraph fs-md-15 fs-lg-16 lh-base mb-0">
                    Some placeholder content for the first collapse component of
                    this multi-collapse example. This panel is hidden by default
                    but revealed when the user activates the relevant trigger.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="collapse multi-collapse" id="multiCollapse2">
                <div class="card card-body">
                  <p class="text-paragraph fs-md-15 fs-lg-16 lh-base mb-0">
                    Some placeholder content for the first collapse component of
                    this multi-collapse example. This panel is hidden by default
                    but revealed when the user activates the relevant trigger.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade position-relative"
          id="multipleCollapseCode-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <!-- <button
            class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
            data-clipboard-target="#multipleCollapseCode"
          >
            Copy
          </button> -->
          <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicCollapseCode">
<div>&lt;a class="btn btn-primary me-10" data-bs-toggle="collapse" href="#multiCollapse1" role="button" aria-expanded="false" aria-controls="multiCollapse1"&gt;</div>
    <div>Toggle first element</div>
<div>&lt;/a&gt;</div>
<div>&lt;button class="btn btn-primary me-10" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapse2" aria-expanded="false" aria-controls="multiCollapse2"&gt;</div>
    <div>Toggle second element</div>
<div>&lt;/button&gt;</div>
<div>&lt;button class="btn btn-primary me-10" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapse1 multiCollapse2"&gt;</div>
    <div>Toggle both elements</div>
<div>&lt;/button&gt;</div>
<div>&lt;div class="mt-12"&gt;&lt;/div&gt;</div>
<div>&lt;div class="row"&gt;</div>
    <div>&lt;div class="col"&gt;</div>
        <div>&lt;div class="collapse multi-collapse" id="multiCollapse1"&gt;</div>
            <div>&lt;div class="card card-body"&gt;</div>
                <div>&lt;p class="text-paragraph fs-md-15 fs-lg-16 lh-base mb-0"&gt;Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.&lt;/p&gt;</div>
            <div>&lt;/div&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="col"&gt;</div>
        <div>&lt;div class="collapse multi-collapse" id="multiCollapse2"&gt;</div>
            <div>&lt;div class="card card-body"&gt;</div>
                <div>&lt;p class="text-paragraph fs-md-15 fs-lg-16 lh-base mb-0"&gt;Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.&lt;/p&gt;</div>
            <div>&lt;/div&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollapseContent",
};
</script>