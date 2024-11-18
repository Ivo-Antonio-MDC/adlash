<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Basic Buttons
          </h5>
          <ul class="nav nav-tabs mb-5 mb-md-10" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="basicButtonsPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#basicButtonsPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="basicButtonsPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="basicButtonsCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#basicButtonsCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="basicButtonsCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="basicButtonsPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button type="button" class="btn btn-primary me-10 mt-10">
                Primary
              </button>
              <button type="button" class="btn btn-secondary me-10 mt-10">
                Secondary
              </button>
              <button type="button" class="btn btn-success me-10 mt-10">
                Success
              </button>
              <button type="button" class="btn btn-danger me-10 mt-10">
                Danger
              </button>
              <button type="button" class="btn btn-warning me-10 mt-10">
                Warning
              </button>
              <button type="button" class="btn btn-info me-10 mt-10">
                Info
              </button>
              <button type="button" class="btn btn-light me-10 mt-10">
                Light
              </button>
              <button type="button" class="btn btn-dark me-10 mt-10">
                Dark
              </button>
              <button type="button" class="btn btn-link me-10 mt-10">
                Link
              </button>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="basicButtonsCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#basicButtonsCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicButtonsCode">
<div>&lt;button type="button" class="btn btn-primary"&gt;Primary&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-secondary"&gt;Secondary&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-success"&gt;Success&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-danger"&gt;Danger&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-warning"&gt;Warning&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-info"&gt;Info&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-light"&gt;Light&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-dark"&gt;Dark&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-link"&gt;Link&lt;/button&gt;</div>
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
            Outline Buttons
          </h5>
          <ul class="nav nav-tabs mb-5 mb-md-10" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="outlineButtonsPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#outlineButtonsPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="outlineButtonsPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="outlineButtonsCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#outlineButtonsCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="outlineButtonsCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="outlineButtonsPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button type="button" class="btn btn-outline-primary me-10 mt-10">
                Primary
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary me-10 mt-10"
              >
                Secondary
              </button>
              <button type="button" class="btn btn-outline-success me-10 mt-10">
                Success
              </button>
              <button type="button" class="btn btn-outline-danger me-10 mt-10">
                Danger
              </button>
              <button type="button" class="btn btn-outline-warning me-10 mt-10">
                Warning
              </button>
              <button type="button" class="btn btn-outline-info me-10 mt-10">
                Info
              </button>
              <button type="button" class="btn btn-outline-light me-10 mt-10">
                Light
              </button>
              <button type="button" class="btn btn-outline-dark me-10 mt-10">
                Dark
              </button>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="outlineButtonsCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#outlineButtonsCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="outlineButtonsCode">
<div>&lt;button type="button" class="btn btn-outline-primary"&gt;Primary&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-outline-secondary"&gt;Secondary&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-outline-success"&gt;Success&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-outline-danger"&gt;Danger&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-outline-warning"&gt;Warning&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-outline-info"&gt;Info&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-outline-light"&gt;Light&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-outline-dark"&gt;Dark&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-outline-link"&gt;Link&lt;/button&gt;</div>
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
            Rounded Buttons
          </h5>
          <ul class="nav nav-tabs mb-5 mb-md-10" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="roundedButtonsPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#roundedButtonsPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="roundedButtonsPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="roundedButtonsCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#roundedButtonsCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="roundedButtonsCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="roundedButtonsPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                type="button"
                class="btn btn-primary rounded-pill me-10 mt-10"
              >
                Primary
              </button>
              <button
                type="button"
                class="btn btn-secondary rounded-pill me-10 mt-10"
              >
                Secondary
              </button>
              <button
                type="button"
                class="btn btn-success rounded-pill me-10 mt-10"
              >
                Success
              </button>
              <button
                type="button"
                class="btn btn-danger rounded-pill me-10 mt-10"
              >
                Danger
              </button>
              <button
                type="button"
                class="btn btn-warning rounded-pill me-10 mt-10"
              >
                Warning
              </button>
              <button
                type="button"
                class="btn btn-info rounded-pill me-10 mt-10"
              >
                Info
              </button>
              <button
                type="button"
                class="btn btn-light rounded-pill me-10 mt-10"
              >
                Light
              </button>
              <button
                type="button"
                class="btn btn-dark rounded-pill me-10 mt-10"
              >
                Dark
              </button>
              <button
                type="button"
                class="btn btn-link rounded-pill me-10 mt-10"
              >
                Link
              </button>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="roundedButtonsCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#roundedButtonsCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="roundedButtonsCode">
<div>&lt;button type="button" class="btn btn-primary rounded-pill"&gt;Primary&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-secondary rounded-pill"&gt;Secondary&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-success rounded-pill"&gt;Success&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-danger rounded-pill"&gt;Danger&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-warning rounded-pill"&gt;Warning&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-info rounded-pill"&gt;Info&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-light rounded-pill"&gt;Light&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-dark rounded-pill"&gt;Dark&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-link rounded-pill"&gt;Link&lt;/button&gt;</div>
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
            Outline Rounded Buttons
          </h5>
          <ul class="nav nav-tabs mb-5 mb-md-10" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="outlineRoundedButtonsPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#outlineRoundedButtonsPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="outlineRoundedButtonsPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="outlineRoundedButtonsCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#outlineRoundedButtonsCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="outlineRoundedButtonsCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="outlineRoundedButtonsPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                type="button"
                class="btn btn-outline-primary rounded-pill me-10 mt-10"
              >
                Primary
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary rounded-pill me-10 mt-10"
              >
                Secondary
              </button>
              <button
                type="button"
                class="btn btn-outline-success rounded-pill me-10 mt-10"
              >
                Success
              </button>
              <button
                type="button"
                class="btn btn-outline-danger rounded-pill me-10 mt-10"
              >
                Danger
              </button>
              <button
                type="button"
                class="btn btn-outline-warning rounded-pill me-10 mt-10"
              >
                Warning
              </button>
              <button
                type="button"
                class="btn btn-outline-info rounded-pill me-10 mt-10"
              >
                Info
              </button>
              <button
                type="button"
                class="btn btn-outline-light rounded-pill me-10 mt-10"
              >
                Light
              </button>
              <button
                type="button"
                class="btn btn-outline-dark rounded-pill me-10 mt-10"
              >
                Dark
              </button>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="outlineRoundedButtonsCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#outlineRoundedButtonsCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="outlineRoundedButtonsCode">
<div>&lt;button type="button" class="btn btn-outline-primary rounded-pill"&gt;Primary&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-outline-secondary rounded-pill"&gt;Secondary&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-outline-success rounded-pill"&gt;Success&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-outline-danger rounded-pill"&gt;Danger&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-outline-warning rounded-pill"&gt;Warning&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-outline-info rounded-pill"&gt;Info&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-outline-light rounded-pill"&gt;Light&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-outline-dark rounded-pill"&gt;Dark&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-outline-link rounded-pill"&gt;Link&lt;/button&gt;</div>
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
            Button Tags
          </h5>
          <ul class="nav nav-tabs mb-5 mb-md-10" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="buttonTagsPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#buttonTagsPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="buttonTagsPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="buttonTagsCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#buttonTagsCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="buttonTagsCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="buttonTagsPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <a class="btn btn-primary me-10 mt-10" href="#" role="button"
                >Link</a
              >
              <button class="btn btn-primary me-10 mt-10" type="submit">
                Button
              </button>
              <input
                class="btn btn-primary me-10 mt-10"
                type="button"
                value="Input"
              />
              <input
                class="btn btn-primary me-10 mt-10"
                type="submit"
                value="Submit"
              />
              <input
                class="btn btn-primary me-10 mt-10"
                type="reset"
                value="Reset"
              />
            </div>
            <div
              class="tab-pane fade position-relative"
              id="buttonTagsCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#buttonTagsCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="buttonTagsCode">
<div>&lt;a class="btn btn-primary" href="#" role="button"&gt;Link&lt;/a&gt;</div>
<div>&lt;button class="btn btn-primary" type="submit"&gt;Button&lt;/button&gt;</div>
<div>&lt;input class="btn btn-primary" type="button" value="Input"&gt;</div>
<div>&lt;input class="btn btn-primary" type="submit" value="Submit"&gt;</div>
<div>&lt;input class="btn btn-primary" type="reset" value="Reset"&gt;</div>
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
            Disabled Buttons
          </h5>
          <ul class="nav nav-tabs mb-5 mb-md-10" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="disabledButtonsPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#disabledButtonsPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="disabledButtonsPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="disabledButtonsCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#disabledButtonsCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="disabledButtonsCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="disabledButtonsPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                type="button"
                class="btn btn-primary me-10 mt-10"
                disabled
              >
                Primary button
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary me-10 mt-10"
                disabled
              >
                Button
              </button>
              <a
                class="btn btn-primary disabled me-10 mt-10"
                role="button"
                aria-disabled="true"
                >Primary link</a
              >
              <a
                class="btn btn-secondary disabled me-10 mt-10"
                role="button"
                aria-disabled="true"
                >Link</a
              >
            </div>
            <div
              class="tab-pane fade position-relative"
              id="disabledButtonsCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#disabledButtonsCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="disabledButtonsCode">
<div>&lt;button type="button" class="btn btn-primary" disabled&gt;Primary button&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-outline-secondary" disabled&gt;Button&lt;/button&gt;</div>
<div>&lt;a class="btn btn-primary disabled" role="button" aria-disabled="true"&gt;Primary link&lt;/a&gt;</div>
<div>&lt;a class="btn btn-secondary disabled" role="button" aria-disabled="true"&gt;Link&lt;/a&gt;</div>
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
            Sizes Buttons
          </h5>
          <ul class="nav nav-tabs mb-5 mb-md-10" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="sizesButtonsPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#sizesButtonsPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="sizesButtonsPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="sizesButtonsCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#sizesButtonsCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="sizesButtonsCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="sizesButtonsPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button type="button" class="btn btn-primary btn-lg me-10 mt-10">
                Large button
              </button>
              <button type="button" class="btn btn-success btn-sm me-10 mt-10">
                Small button
              </button>
              <button
                type="button"
                class="btn btn-danger me-10 mt-10"
                style="
                  --bs-btn-padding-y: 0.25rem;
                  --bs-btn-padding-x: 0.5rem;
                  --bs-btn-font-size: 0.75rem;
                "
              >
                Custom button
              </button>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="sizesButtonsCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#sizesButtonsCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="sizesButtonsCode">
<div>&lt;button type="button" class="btn btn-primary btn-lg"&gt;Large button&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-success btn-sm"&gt;Small button&lt;/button&gt;</div>
<div>&lt;button type="button" class="btn btn-danger" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"&gt;</div>
    <div>Custom button</div>
<div>&lt;/button&gt;</div>
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
            Block Buttons
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="blockButtonsPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#blockButtonsPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="blockButtonsPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="blockButtonsCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#blockButtonsCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="blockButtonsCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="blockButtonsPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button class="btn btn-primary d-block w-100 mb-10" type="button">
                Button
              </button>
              <button class="btn btn-success d-block w-100" type="button">
                Button
              </button>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="blockButtonsCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#blockButtonsCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="blockButtonsCode">
<div>&lt;button class="btn btn-primary d-block w-100" type="button"&gt;Button&lt;/button&gt;</div>
<div>&lt;button class="btn btn-success d-block w-100" type="button"&gt;Button&lt;/button&gt;</div>
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
  name: "ButtonsContent",
};
</script>