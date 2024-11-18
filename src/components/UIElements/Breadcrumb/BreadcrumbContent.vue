<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Basic Breadcrumb
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="basicBreadcrumbPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#basicBreadcrumbPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="basicBreadcrumbPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="basicBreadcrumbCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#basicBreadcrumbCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="basicBreadcrumbCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="basicBreadcrumbPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li
                    class="breadcrumb-item fw-medium active"
                    aria-current="page"
                  >
                    Home
                  </li>
                </ol>
              </nav>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item fw-medium">
                    <a href="#" class="text-decoration-none">Home</a>
                  </li>
                  <li
                    class="breadcrumb-item fw-medium active"
                    aria-current="page"
                  >
                    Library
                  </li>
                </ol>
              </nav>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item fw-medium">
                    <a href="#" class="text-decoration-none">Home</a>
                  </li>
                  <li class="breadcrumb-item fw-medium">
                    <a href="#" class="text-decoration-none">Library</a>
                  </li>
                  <li
                    class="breadcrumb-item fw-medium active"
                    aria-current="page"
                  >
                    Data
                  </li>
                </ol>
              </nav>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="basicBreadcrumbCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#basicBreadcrumbCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicBreadcrumbCode">
<div>&lt;nav aria-label="breadcrumb"&gt;</div>
    <div>&lt;ol class="breadcrumb"&gt;</div>
        <div>&lt;li class="breadcrumb-item fw-medium active"aria-current="page"&gt;Home&lt;/li&gt;</div>
    <div>&lt;/ol&gt;</div>
<div>&lt;/nav&gt;</div>
<div>&lt;nav aria-label="breadcrumb"&gt;</div>
    <div>&lt;ol class="breadcrumb"&gt;</div>
        <div>&lt;li class="breadcrumb-item fw-medium"&gt;&lt;a href="#" class="text-decoration-none"&gt;Home&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="breadcrumb-item fw-medium active"aria-current="page"&gt;Library&lt;/li&gt;</div>
    <div>&lt;/ol&gt;</div>
<div>&lt;/nav&gt;</div>
<div>&lt;nav aria-label="breadcrumb"&gt;</div>
    <div>&lt;ol class="breadcrumb"&gt;</div>
        <div>&lt;li class="breadcrumb-item fw-medium"&gt;&lt;a href="#" class="text-decoration-none"&gt;Home&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="breadcrumb-item fw-medium"&gt;&lt;a href="#" class="text-decoration-none"&gt;Library&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="breadcrumb-item fw-medium active"aria-current="page"&gt;Data&lt;/li&gt;</div>
    <div>&lt;/ol&gt;</div>
<div>&lt;/nav&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Dividers Breadcrumb
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="dividersBreadcrumbPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#dividersBreadcrumbPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="dividersBreadcrumbPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="dividersBreadcrumbCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#dividersBreadcrumbCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="dividersBreadcrumbCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="dividersBreadcrumbPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>'">
                <ol class="breadcrumb style-two">
                  <li
                    class="breadcrumb-item fw-medium active"
                    aria-current="page"
                  >
                    Home
                  </li>
                </ol>
              </nav>
              <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>'">
                <ol class="breadcrumb style-two">
                  <li class="breadcrumb-item fw-medium">
                    <a href="#" class="text-decoration-none">Home</a>
                  </li>
                  <li
                    class="breadcrumb-item fw-medium active"
                    aria-current="page"
                  >
                    Library
                  </li>
                </ol>
              </nav>
              <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>'">
                <ol class="breadcrumb style-two mb-0">
                  <li class="breadcrumb-item fw-medium">
                    <a href="#" class="text-decoration-none">Home</a>
                  </li>
                  <li class="breadcrumb-item fw-medium">
                    <a href="#" class="text-decoration-none">Library</a>
                  </li>
                  <li
                    class="breadcrumb-item fw-medium active"
                    aria-current="page"
                  >
                    Data
                  </li>
                </ol>
              </nav>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="dividersBreadcrumbCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#dividersBreadcrumbCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="dividersBreadcrumbCode">
<div>&lt;nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '&gt;';"&gt;</div>
    <div>&lt;ol class="breadcrumb style-two"&gt;</div>
        <div>&lt;li class="breadcrumb-item fw-medium active"aria-current="page"&gt;Home&lt;/li&gt;</div>
    <div>&lt;/ol&gt;</div>
<div>&lt;/nav&gt;</div>
<div>&lt;nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '&gt;';"&gt;</div>
    <div>&lt;ol class="breadcrumb style-two"&gt;</div>
        <div>&lt;li class="breadcrumb-item fw-medium"&gt;&lt;a href="#" class="text-decoration-none"&gt;Home&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="breadcrumb-item fw-medium active"aria-current="page"&gt;Library&lt;/li&gt;</div>
    <div>&lt;/ol&gt;</div>
<div>&lt;/nav&gt;</div>
<div>&lt;nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '&gt;';"&gt;</div>
    <div>&lt;ol class="breadcrumb style-two"&gt;</div>
        <div>&lt;li class="breadcrumb-item fw-medium"&gt;&lt;a href="#" class="text-decoration-none"&gt;Home&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="breadcrumb-item fw-medium"&gt;&lt;a href="#" class="text-decoration-none"&gt;Library&lt;/a&gt;&lt;/li&gt;</div>
        <div>&lt;li class="breadcrumb-item fw-medium active"aria-current="page"&gt;Data&lt;/li&gt;</div>
    <div>&lt;/ol&gt;</div>
<div>&lt;/nav&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadcrumbContent",
};
</script>