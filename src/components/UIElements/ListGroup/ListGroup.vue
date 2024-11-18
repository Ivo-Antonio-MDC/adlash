<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Basic List Group
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="basicListGroupPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#basicListGroupPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="basicListGroupPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="basicListGroupCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#basicListGroupCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="basicListGroupCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="basicListGroupPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <ul class="list-group">
                <li class="list-group-item fw-medium fs-md-15">An item</li>
                <li class="list-group-item fw-medium fs-md-15">
                  A second item
                </li>
                <li class="list-group-item fw-medium fs-md-15">A third item</li>
                <li
                  class="list-group-item fw-medium fs-md-15 active"
                  aria-current="true"
                >
                  An active item
                </li>
                <li class="list-group-item fw-medium fs-md-15">
                  A fourth item
                </li>
                <li class="list-group-item fw-medium fs-md-15">
                  And a fifth one
                </li>
                <li
                  class="list-group-item fw-medium fs-md-15 disabled"
                  aria-disabled="true"
                >
                  A disabled item
                </li>
              </ul>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="basicListGroupCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#basicListGroupCode"
              >
                Copy
              </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicListGroupCode">
&lt;ul class="list-group"&gt;
    &lt;li class="list-group-item fw-medium fs-md-15"&gt;An item&lt;/li&gt;
    &lt;li class="list-group-item fw-medium fs-md-15"&gt;A second item&lt;/li&gt;
    &lt;li class="list-group-item fw-medium fs-md-15"&gt;A third item&lt;/li&gt;
    &lt;li class="list-group-item fw-medium fs-md-15 active" aria-current="true"&gt;An active item&lt;/li&gt;
    &lt;li class="list-group-item fw-medium fs-md-15"&gt;A fourth item&lt;/li&gt;
    &lt;li class="list-group-item fw-medium fs-md-15"&gt;And a fifth one&lt;/li&gt;
    &lt;li class="list-group-item fw-medium fs-md-15 disabled" aria-disabled="true"&gt;A disabled item&lt;/li&gt;
&lt;/ul&gt;
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">Numbered</h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="numberedListGroupPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#numberedListGroupPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="numberedListGroupPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="numberedListGroupCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#numberedListGroupCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="numberedListGroupCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="numberedListGroupPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <ol class="list-group list-group-numbered">
                <li class="list-group-item fs-md-15 fw-medium">A list item</li>
                <li class="list-group-item fs-md-15 fw-medium">A list item</li>
                <li
                  class="list-group-item fw-medium fs-md-15 active"
                  aria-current="true"
                >
                  An active item
                </li>
                <li class="list-group-item fs-md-15 fw-medium">A list item</li>
                <li
                  class="list-group-item fw-medium fs-md-15 disabled"
                  aria-disabled="true"
                >
                  A disabled item
                </li>
              </ol>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="numberedListGroupCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#numberedListGroupCode"
              >
                Copy
              </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="numberedListGroupCode">
<div>&lt;ol class="list-group list-group-numbered"&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;A list item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;A list item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fw-medium fs-md-15 active" aria-current="true"&gt;An active item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;A list item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fw-medium fs-md-15 disabled" aria-disabled="true"&gt;A disabled item&lt;/li&gt;</div>
<div>&lt;/ol&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">Flush</h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="flushListGroupPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#flushListGroupPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="flushListGroupPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="flushListGroupCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#flushListGroupCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="flushListGroupCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="flushListGroupPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <ul class="list-group list-group-flush">
                <li class="list-group-item fs-md-15 fw-medium">An item</li>
                <li class="list-group-item fs-md-15 fw-medium">
                  A second item
                </li>
                <li class="list-group-item fs-md-15 fw-medium">A third item</li>
                <li
                  class="list-group-item fw-medium fs-md-15 active"
                  aria-current="true"
                >
                  An active item
                </li>
                <li class="list-group-item fs-md-15 fw-medium">
                  A fourth item
                </li>
                <li class="list-group-item fs-md-15 fw-medium">
                  And a fifth one
                </li>
                <li
                  class="list-group-item fw-medium fs-md-15 disabled"
                  aria-disabled="true"
                >
                  A disabled item
                </li>
              </ul>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="flushListGroupCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#flushListGroupCode"
              >
                Copy
              </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="flushListGroupCode">
<div>&lt;ul class="list-group list-group-flush"&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;An item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;A second item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;A third item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fw-medium fs-md-15 active" aria-current="true"&gt;An active item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;A fourth item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;And a fifth one&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fw-medium fs-md-15 disabled" aria-disabled="true"&gt;A disabled item&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Custom Content
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="contentListGroupPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#contentListGroupPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="contentListGroupPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="contentListGroupCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#contentListGroupCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="contentListGroupCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="contentListGroupPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action active"
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-2 fw-bold text-white">
                      List group item heading
                    </h5>
                    <small>3 days ago</small>
                  </div>
                  <p class="mb-1 fs-md-15 fs-lg-16">
                    Some placeholder content in a paragraph.
                  </p>
                  <small>And some small print.</small>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-2 fw-bold">List group item heading</h5>
                    <small class="text-body-secondary">3 days ago</small>
                  </div>
                  <p class="mb-1 fs-md-15 fs-lg-16">
                    Some placeholder content in a paragraph.
                  </p>
                  <small class="text-body-secondary"
                    >And some muted small print.</small
                  >
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-2 fw-bold">List group item heading</h5>
                    <small class="text-body-secondary">3 days ago</small>
                  </div>
                  <p class="mb-1 fs-md-15 fs-lg-16">
                    Some placeholder content in a paragraph.
                  </p>
                  <small class="text-body-secondary"
                    >And some muted small print.</small
                  >
                </a>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="contentListGroupCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#contentListGroupCode"
              >
                Copy
              </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="contentListGroupCode">
<div>&lt;div class="list-group"&gt;</div>
    <div>&lt;a href="#" class="list-group-item list-group-item-action active" aria-current="true"&gt;</div>
        <div>&lt;div class="d-flex w-100 justify-content-between"&gt;</div>
            <div>&lt;h5 class="mb-2 fw-bold text-white"&gt;List group item heading&lt;/h5&gt;</div>
            <div>&lt;small&gt;3 days ago&lt;/small&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;p class="mb-1 fs-md-15 fs-lg-16"&gt;Some placeholder content in a paragraph.&lt;/p&gt;</div>
        <div>&lt;small&gt;And some small print.&lt;/small&gt;</div>
    <div>&lt;/a&gt;</div>
    <div>&lt;a href="#" class="list-group-item list-group-item-action"&gt;</div>
        <div>&lt;div class="d-flex w-100 justify-content-between"&gt;</div>
            <div>&lt;h5 class="mb-2 fw-bold"&gt;List group item heading&lt;/h5&gt;</div>
            <div>&lt;small class="text-body-secondary"&gt;3 days ago&lt;/small&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;p class="mb-1 fs-md-15 fs-lg-16"&gt;Some placeholder content in a paragraph.&lt;/p&gt;</div>
        <div>&lt;small class="text-body-secondary"&gt;And some muted small print.&lt;/small&gt;</div>
    <div>&lt;/a&gt;</div>
    <div>&lt;a href="#" class="list-group-item list-group-item-action"&gt;</div>
        <div>&lt;div class="d-flex w-100 justify-content-between"&gt;</div>
            <div>&lt;h5 class="mb-2 fw-bold"&gt;List group item heading&lt;/h5&gt;</div>
            <div>&lt;small class="text-body-secondary"&gt;3 days ago&lt;/small&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;p class="mb-1 fs-md-15 fs-lg-16"&gt;Some placeholder content in a paragraph.&lt;/p&gt;</div>
        <div>&lt;small class="text-body-secondary"&gt;And some muted small print.&lt;/small&gt;</div>
    <div>&lt;/a&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">Checkboxes</h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="checkboxesListGroupPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#checkboxesListGroupPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="checkboxesListGroupPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="checkboxesListGroupCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#checkboxesListGroupCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="checkboxesListGroupCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="checkboxesListGroupPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <ul class="list-group">
                <li class="list-group-item fs-md-15 fw-medium">
                  <input
                    class="form-check-input shadow-none me-1"
                    type="checkbox"
                    value=""
                    id="firstCheckbox"
                  />
                  <label class="form-check-label" for="firstCheckbox"
                    >First checkbox</label
                  >
                </li>
                <li class="list-group-item fs-md-15 fw-medium">
                  <input
                    class="form-check-input shadow-none me-1"
                    type="checkbox"
                    value=""
                    id="secondCheckbox"
                  />
                  <label class="form-check-label" for="secondCheckbox"
                    >Second checkbox</label
                  >
                </li>
                <li class="list-group-item fs-md-15 fw-medium">
                  <input
                    class="form-check-input shadow-none me-1"
                    type="checkbox"
                    value=""
                    id="thirdCheckbox"
                  />
                  <label class="form-check-label" for="thirdCheckbox"
                    >Third checkbox</label
                  >
                </li>
              </ul>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="checkboxesListGroupCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#checkboxesListGroupCode"
              >
                Copy
              </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="checkboxesListGroupCode">
<div>&lt;ul class="list-group"&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;</div>
        <div>&lt;input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"&gt;</div>
        <div>&lt;label class="form-check-label" for="firstCheckbox"&gt;First checkbox&lt;/label&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;</div>
        <div>&lt;input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"&gt;</div>
        <div>&lt;label class="form-check-label" for="secondCheckbox"&gt;Second checkbox&lt;/label&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;</div>
        <div>&lt;input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"&gt;</div>
        <div>&lt;label class="form-check-label" for="thirdCheckbox"&gt;Third checkbox&lt;/label&gt;</div>
    <div>&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
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
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">Variants</h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="variantsListGroupPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#variantsListGroupPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="variantsListGroupPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="variantsListGroupCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#variantsListGroupCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="variantsListGroupCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="variantsListGroupPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <ul class="list-group">
                <li class="list-group-item fs-md-15 fw-medium">
                  A simple default list group item
                </li>
                <li
                  class="list-group-item fs-md-15 fw-medium list-group-item-primary"
                >
                  A simple primary list group item
                </li>
                <li
                  class="list-group-item fs-md-15 fw-medium list-group-item-secondary"
                >
                  A simple secondary list group item
                </li>
                <li
                  class="list-group-item fs-md-15 fw-medium list-group-item-success"
                >
                  A simple success list group item
                </li>
                <li
                  class="list-group-item fs-md-15 fw-medium list-group-item-danger"
                >
                  A simple danger list group item
                </li>
                <li
                  class="list-group-item fs-md-15 fw-medium list-group-item-warning"
                >
                  A simple warning list group item
                </li>
                <li
                  class="list-group-item fs-md-15 fw-medium list-group-item-info"
                >
                  A simple info list group item
                </li>
                <li
                  class="list-group-item fs-md-15 fw-medium list-group-item-light"
                >
                  A simple light list group item
                </li>
                <li
                  class="list-group-item fs-md-15 fw-medium list-group-item-dark"
                >
                  A simple dark list group item
                </li>
              </ul>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="variantsListGroupCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#variantsListGroupCode"
              >
                Copy
              </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="variantsListGroupCode">
<div>&lt;ul class="list-group"&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;A simple default list group item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium list-group-item-primary"&gt;A simple primary list group item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium list-group-item-secondary"&gt;A simple secondary list group item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium list-group-item-success"&gt;A simple success list group item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium list-group-item-danger"&gt;A simple danger list group item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium list-group-item-warning"&gt;A simple warning list group item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium list-group-item-info"&gt;A simple info list group item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium list-group-item-light"&gt;A simple light list group item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium list-group-item-dark"&gt;A simple dark list group item&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            For Links & Buttons
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="forLinksListGroupPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#forLinksListGroupPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="forLinksListGroupPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="forLinksListGroupCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#forLinksListGroupCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="forLinksListGroupCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="forLinksListGroupPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item fs-md-15 fw-medium list-group-item-action"
                  >A simple default list group item</a
                >
                <a
                  href="#"
                  class="list-group-item fs-md-15 fw-medium list-group-item-action list-group-item-primary"
                  >A simple primary list group item</a
                >
                <a
                  href="#"
                  class="list-group-item fs-md-15 fw-medium list-group-item-action list-group-item-secondary"
                  >A simple secondary list group item</a
                >
                <a
                  href="#"
                  class="list-group-item fs-md-15 fw-medium list-group-item-action list-group-item-success"
                  >A simple success list group item</a
                >
                <a
                  href="#"
                  class="list-group-item fs-md-15 fw-medium list-group-item-action list-group-item-danger"
                  >A simple danger list group item</a
                >
                <a
                  href="#"
                  class="list-group-item fs-md-15 fw-medium list-group-item-action list-group-item-warning"
                  >A simple warning list group item</a
                >
                <a
                  href="#"
                  class="list-group-item fs-md-15 fw-medium list-group-item-action list-group-item-info"
                  >A simple info list group item</a
                >
                <a
                  href="#"
                  class="list-group-item fs-md-15 fw-medium list-group-item-action list-group-item-light"
                  >A simple light list group item</a
                >
                <a
                  href="#"
                  class="list-group-item fs-md-15 fw-medium list-group-item-action list-group-item-dark"
                  >A simple dark list group item</a
                >
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="forLinksListGroupCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#forLinksListGroupCode"
              >
                Copy
              </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="forLinksListGroupCode">
<div>&lt;div class="list-group"&gt;</div>
    <div>&lt;a href="#" class="list-group-item fs-md-15 fw-medium list-group-item-action"&gt;A simple default list group item&lt;/a&gt;</div>
    <div>&lt;a href="#" class="list-group-item fs-md-15 fw-medium list-group-item-action list-group-item-primary"&gt;A simple primary list group item&lt;/a&gt;</div>
    <div>&lt;a href="#" class="list-group-item fs-md-15 fw-medium list-group-item-action list-group-item-secondary"&gt;A simple secondary list group item&lt;/a&gt;</div>
    <div>&lt;a href="#" class="list-group-item fs-md-15 fw-medium list-group-item-action list-group-item-success"&gt;A simple success list group item&lt;/a&gt;</div>
    <div>&lt;a href="#" class="list-group-item fs-md-15 fw-medium list-group-item-action list-group-item-danger"&gt;A simple danger list group item&lt;/a&gt;</div>
    <div>&lt;a href="#" class="list-group-item fs-md-15 fw-medium list-group-item-action list-group-item-warning"&gt;A simple warning list group item&lt;/a&gt;</div>
    <div>&lt;a href="#" class="list-group-item fs-md-15 fw-medium list-group-item-action list-group-item-info"&gt;A simple info list group item&lt;/a&gt;</div>
    <div>&lt;a href="#" class="list-group-item fs-md-15 fw-medium list-group-item-action list-group-item-light"&gt;A simple light list group item&lt;/a&gt;</div>
    <div>&lt;a href="#" class="list-group-item fs-md-15 fw-medium list-group-item-action list-group-item-dark"&gt;A simple dark list group item&lt;/a&gt;</div>
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
            With Badges
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="badgesListGroupPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#badgesListGroupPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="badgesListGroupPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="badgesListGroupCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#badgesListGroupCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="badgesListGroupCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="badgesListGroupPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <ul class="list-group">
                <li
                  class="list-group-item fs-md-15 fw-medium d-flex justify-content-between align-items-center"
                >
                  A list item
                  <span class="badge bg-primary rounded-pill">14</span>
                </li>
                <li
                  class="list-group-item fs-md-15 fw-medium d-flex justify-content-between align-items-center"
                >
                  A second list item
                  <span class="badge bg-primary rounded-pill">2</span>
                </li>
                <li
                  class="list-group-item fs-md-15 fw-medium d-flex justify-content-between align-items-center"
                >
                  A third list item
                  <span class="badge bg-primary rounded-pill">1</span>
                </li>
              </ul>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="badgesListGroupCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#badgesListGroupCode"
              >
                Copy
              </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="badgesListGroupCode">
<div>&lt;ul class="list-group"&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium d-flex justify-content-between align-items-center"&gt;</div>
        <div>A list item</div>
        <div>&lt;span class="badge bg-primary rounded-pill"&gt;14&lt;/span&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium d-flex justify-content-between align-items-center"&gt;</div>
        <div>A second list item</div>
        <div>&lt;span class="badge bg-primary rounded-pill"&gt;2&lt;/span&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium d-flex justify-content-between align-items-center"&gt;</div>
        <div>A third list item</div>
        <div>&lt;span class="badge bg-primary rounded-pill"&gt;1&lt;/span&gt;</div>
    <div>&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">Horizontal</h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="horizontalListGroupPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#horizontalListGroupPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="horizontalListGroupPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="horizontalListGroupCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#horizontalListGroupCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="horizontalListGroupCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="horizontalListGroupPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <ul class="list-group list-group-horizontal">
                <li class="list-group-item fs-md-15 fw-medium">An item</li>
                <li class="list-group-item fs-md-15 fw-medium">
                  A second item
                </li>
                <li class="list-group-item fs-md-15 fw-medium">A third item</li>
              </ul>
              <ul class="list-group list-group-horizontal-sm">
                <li class="list-group-item fs-md-15 fw-medium">An item</li>
                <li class="list-group-item fs-md-15 fw-medium">
                  A second item
                </li>
                <li class="list-group-item fs-md-15 fw-medium">A third item</li>
              </ul>
              <ul class="list-group list-group-horizontal-md">
                <li class="list-group-item fs-md-15 fw-medium">An item</li>
                <li class="list-group-item fs-md-15 fw-medium">
                  A second item
                </li>
                <li class="list-group-item fs-md-15 fw-medium">A third item</li>
              </ul>
              <ul class="list-group list-group-horizontal-lg">
                <li class="list-group-item fs-md-15 fw-medium">An item</li>
                <li class="list-group-item fs-md-15 fw-medium">
                  A second item
                </li>
                <li class="list-group-item fs-md-15 fw-medium">A third item</li>
              </ul>
              <ul class="list-group list-group-horizontal-xl">
                <li class="list-group-item fs-md-15 fw-medium">An item</li>
                <li class="list-group-item fs-md-15 fw-medium">
                  A second item
                </li>
                <li class="list-group-item fs-md-15 fw-medium">A third item</li>
              </ul>
              <ul class="list-group list-group-horizontal-xxl">
                <li class="list-group-item fs-md-15 fw-medium">An item</li>
                <li class="list-group-item fs-md-15 fw-medium">
                  A second item
                </li>
                <li class="list-group-item fs-md-15 fw-medium">A third item</li>
              </ul>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="horizontalListGroupCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#horizontalListGroupCode"
              >
                Copy
              </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="horizontalListGroupCode">
<div>&lt;ul class="list-group list-group-horizontal"&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;An item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;A second item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;A third item&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
<div>&lt;ul class="list-group list-group-horizontal-sm"&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;An item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;A second item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;A third item&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
<div>&lt;ul class="list-group list-group-horizontal-md"&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;An item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;A second item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;A third item&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
<div>&lt;ul class="list-group list-group-horizontal-lg"&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;An item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;A second item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;A third item&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
<div>&lt;ul class="list-group list-group-horizontal-xl"&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;An item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;A second item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;A third item&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
<div>&lt;ul class="list-group list-group-horizontal-xxl"&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;An item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;A second item&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;A third item&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">Radios</h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="radiosListGroupPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#radiosListGroupPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="radiosListGroupPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="radiosListGroupCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#radiosListGroupCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="radiosListGroupCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="radiosListGroupPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <ul class="list-group">
                <li class="list-group-item fs-md-15 fw-medium">
                  <input
                    class="form-check-input shadow-none me-1"
                    type="radio"
                    name="listGroupRadio"
                    value=""
                    id="firstRadio"
                    checked
                  />
                  <label class="form-check-label" for="firstRadio"
                    >First radio</label
                  >
                </li>
                <li class="list-group-item fs-md-15 fw-medium">
                  <input
                    class="form-check-input shadow-none me-1"
                    type="radio"
                    name="listGroupRadio"
                    value=""
                    id="secondRadio"
                  />
                  <label class="form-check-label" for="secondRadio"
                    >Second radio</label
                  >
                </li>
                <li class="list-group-item fs-md-15 fw-medium">
                  <input
                    class="form-check-input shadow-none me-1"
                    type="radio"
                    name="listGroupRadio"
                    value=""
                    id="thirdRadio"
                  />
                  <label class="form-check-label" for="thirdRadio"
                    >Third radio</label
                  >
                </li>
              </ul>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="radiosListGroupCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#checkboxesListGroupCode"
              >
                Copy
              </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="checkboxesListGroupCode">
<div>&lt;ul class="list-group"&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;</div>
        <div>&lt;input class="form-check-input shadow-none me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked&gt;</div>
        <div>&lt;label class="form-check-label" for="firstRadio"&gt;First radio&lt;/label&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;</div>
        <div>&lt;input class="form-check-input shadow-none me-1" type="radio" name="listGroupRadio" value="" id="secondRadio"&gt;</div>
        <div>&lt;label class="form-check-label" for="secondRadio"&gt;Second radio&lt;/label&gt;</div>
    <div>&lt;/li&gt;</div>
    <div>&lt;li class="list-group-item fs-md-15 fw-medium"&gt;</div>
        <div>&lt;input class="form-check-input shadow-none me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio"&gt;</div>
        <div>&lt;label class="form-check-label" for="thirdRadio"&gt;Third radio&lt;/label&gt;</div>
    <div>&lt;/li&gt;</div>
<div>&lt;/ul&gt;</div>
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
  name: "ListGroup",
};
</script>