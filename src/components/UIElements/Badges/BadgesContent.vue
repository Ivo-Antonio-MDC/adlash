<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Basic Badges
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="basicBadgesPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#basicBadgesPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="basicBadgesPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="basicBadgesCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#basicBadgesCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="basicBadgesCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="basicBadgesPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <h1>
                Example heading <span class="badge bg-primary fs-20">New</span>
              </h1>
              <h2>
                Example heading
                <span class="badge bg-secondary fs-18">New</span>
              </h2>
              <h3>
                Example heading <span class="badge bg-success fs-16">New</span>
              </h3>
              <h4>
                Example heading <span class="badge bg-warning fs-15">New</span>
              </h4>
              <h5>
                Example heading <span class="badge bg-info fs-13">New</span>
              </h5>
              <h6>Example heading <span class="badge bg-dark">New</span></h6>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="basicBadgesCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#basicBadgesCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicBadgesCode">
<div>&lt;h1&gt;Example heading &lt;span class="badge bg-primary fs-20"&gt;New&lt;/span&gt;&lt;/h1&gt;</div>
<div>&lt;h2&gt;Example heading &lt;span class="badge bg-secondary fs-18"&gt;New&lt;/span&gt;&lt;/h2&gt;</div>
<div>&lt;h3&gt;Example heading &lt;span class="badge bg-success fs-16"&gt;New&lt;/span&gt;&lt;/h3&gt;</div>
<div>&lt;h4&gt;Example heading &lt;span class="badge bg-warning fs-15"&gt;New&lt;/span&gt;&lt;/h4&gt;</div>
<div>&lt;h5&gt;Example heading &lt;span class="badge bg-info fs-14"&gt;New&lt;/span&gt;&lt;/h5&gt;</div>
<div>&lt;h6&gt;Example heading &lt;span class="badge bg-dark fs-13"&gt;New&lt;/span&gt;&lt;/h6&gt;</div>
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
            Outline Badges
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="outlineBadgesPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#outlineBadgesPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="outlineBadgesPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="outlineBadgesCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#outlineBadgesCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="outlineBadgesCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="outlineBadgesPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <h1>
                Example heading
                <span class="badge bg-outline-primary bg-transparent fs-20"
                  >New</span
                >
              </h1>
              <h2>
                Example heading
                <span class="badge bg-outline-secondary fs-18">New</span>
              </h2>
              <h3>
                Example heading
                <span class="badge bg-outline-success fs-16">New</span>
              </h3>
              <h4>
                Example heading
                <span class="badge bg-outline-warning fs-15">New</span>
              </h4>
              <h5>
                Example heading
                <span class="badge bg-outline-info fs-13">New</span>
              </h5>
              <h6>
                Example heading <span class="badge bg-outline-dark">New</span>
              </h6>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="outlineBadgesCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#outlineBadgesCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="outlineBadgesCode">
<div>&lt;h1&gt;Example heading &lt;span class="badge bg-outline-primary bg-transparent fs-20"&gt;New&lt;/span&gt;&lt;/h1&gt;</div>
<div>&lt;h2&gt;Example heading &lt;span class="badge bg-outline-secondary fs-18"&gt;New&lt;/span&gt;&lt;/h2&gt;</div>
<div>&lt;h3&gt;Example heading &lt;span class="badge bg-outline-success fs-16"&gt;New&lt;/span&gt;&lt;/h3&gt;</div>
<div>&lt;h4&gt;Example heading &lt;span class="badge bg-outline-warning fs-15"&gt;New&lt;/span&gt;&lt;/h4&gt;</div>
<div>&lt;h5&gt;Example heading &lt;span class="badge bg-outline-info fs-13"&gt;New&lt;/span&gt;&lt;/h5&gt;</div>
<div>&lt;h6&gt;Example heading &lt;span class="badge bg-outline-dark"&gt;New&lt;/span&gt;&lt;/h6&gt;</div>
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
            Background Colors Badges
          </h5>
          <ul class="nav nav-tabs mb-5 mb-md-10" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="backgroundBadgesPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#backgroundBadgesPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="backgroundBadgesPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="backgroundBadgesCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#backgroundBadgesCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="backgroundBadgesCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="backgroundBadgesPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <span class="badge text-bg-primary fs-13 me-5 mt-10"
                >Primary</span
              >
              <span class="badge text-bg-secondary fs-13 me-5 mt-10"
                >Secondary</span
              >
              <span class="badge text-bg-success fs-13 me-5 mt-10"
                >Success</span
              >
              <span class="badge text-bg-danger fs-13 me-5 mt-10">Danger</span>
              <span class="badge text-bg-warning fs-13 me-5 mt-10"
                >Warning</span
              >
              <span class="badge text-bg-info fs-13 me-5 mt-10">Info</span>
              <span class="badge text-bg-light fs-13 me-5 mt-10">Light</span>
              <span class="badge text-bg-dark fs-13 mt-10">Dark</span>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="backgroundBadgesCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#backgroundBadgesCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="backgroundBadgesCode">
<div>&lt;span class="badge text-bg-primary fs-13"&gt;Primary&lt;/span&gt;</div>
<div>&lt;span class="badge text-bg-secondary fs-13"&gt;Secondary&lt;/span&gt;</div>
<div>&lt;span class="badge text-bg-success fs-13"&gt;Success&lt;/span&gt;</div>
<div>&lt;span class="badge text-bg-danger fs-13"&gt;Danger&lt;/span&gt;</div>
<div>&lt;span class="badge text-bg-warning fs-13"&gt;Warning&lt;/span&gt;</div>
<div>&lt;span class="badge text-bg-info fs-13"&gt;Info&lt;/span&gt;</div>
<div>&lt;span class="badge text-bg-light fs-13"&gt;Light&lt;/span&gt;</div>
<div>&lt;span class="badge text-bg-dark fs-13"&gt;Dark&lt;/span&gt;</div>
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
            Pill Badges
          </h5>
          <ul class="nav nav-tabs mb-5 mb-md-10" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pillBadgesPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#pillBadgesPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="pillBadgesPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pillBadgesCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#pillBadgesCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="pillBadgesCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="pillBadgesPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <span class="badge text-bg-primary rounded-pill fs-13 me-5 mt-10"
                >Primary</span
              >
              <span
                class="badge text-bg-secondary rounded-pill fs-13 me-5 mt-10"
                >Secondary</span
              >
              <span class="badge text-bg-success rounded-pill fs-13 me-5 mt-10"
                >Success</span
              >
              <span class="badge text-bg-danger rounded-pill fs-13 me-5 mt-10"
                >Danger</span
              >
              <span class="badge text-bg-warning rounded-pill fs-13 me-5 mt-10"
                >Warning</span
              >
              <span class="badge text-bg-info rounded-pill fs-13 me-5 mt-10"
                >Info</span
              >
              <span class="badge text-bg-light rounded-pill fs-13 me-5 mt-10"
                >Light</span
              >
              <span class="badge text-bg-dark rounded-pill fs-13 mt-10"
                >Dark</span
              >
            </div>
            <div
              class="tab-pane fade position-relative"
              id="pillBadgesCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#pillBadgesCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="pillBadgesCode">
<div>&lt;span class="badge text-bg-primary rounded-pill fs-13"&gt;Primary&lt;/span&gt;</div>
<div>&lt;span class="badge text-bg-secondary rounded-pill fs-13"&gt;Secondary&lt;/span&gt;</div>
<div>&lt;span class="badge text-bg-success rounded-pill fs-13"&gt;Success&lt;/span&gt;</div>
<div>&lt;span class="badge text-bg-danger rounded-pill fs-13"&gt;Danger&lt;/span&gt;</div>
<div>&lt;span class="badge text-bg-warning rounded-pill fs-13"&gt;Warning&lt;/span&gt;</div>
<div>&lt;span class="badge text-bg-info rounded-pill fs-13"&gt;Info&lt;/span&gt;</div>
<div>&lt;span class="badge text-bg-light rounded-pill fs-13"&gt;Light&lt;/span&gt;</div>
<div>&lt;span class="badge text-bg-dark rounded-pill fs-13"&gt;Dark&lt;/span&gt;</div>
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
            Other Badges
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="otherBadgesPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#otherBadgesPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="otherBadgesPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="otherBadgesCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#otherBadgesCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="otherBadgesCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="otherBadgesPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <span class="d-block text-black fw-medium fs-md-15 fs-lg-16 mb-12"
                >Buttons</span
              >
              <button type="button" class="btn btn-primary">
                Notifications <span class="badge text-bg-secondary">4</span>
              </button>
              <span
                class="d-block text-black fw-medium fs-md-15 fs-lg-16 mb-12 mt-15 mt-sm-20 mt-lg-25"
                >Positioned</span
              >
              <button type="button" class="btn btn-warning position-relative">
                Inbox
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                >
                  99+
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>
              <span
                class="d-block text-black fw-medium fs-md-15 fs-lg-16 mb-12 mt-15 mt-sm-20 mt-lg-25"
                >Dot Positioned</span
              >
              <button type="button" class="btn btn-success position-relative">
                Profile
                <span
                  class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"
                >
                  <span class="visually-hidden">New alerts</span>
                </span>
              </button>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="otherBadgesCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#otherBadgesCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="otherBadgesCode">
<div>&lt;span class="d-block text-black fw-medium fs-md-15 fs-lg-16 mb-12"&gt;Buttons&lt;/span&gt;</div>
<div>&lt;button type="button" class="btn btn-primary"&gt;</div>
    <div>Notifications &lt;span class="badge text-bg-secondary"&gt;4&lt;/span&gt;</div>
<div>&lt;/button&gt;</div>
<div>&lt;span class="d-block text-black fw-medium fs-md-15 fs-lg-16 mb-12 mt-15 mt-sm-20 mt-lg-25"&gt;Positioned&lt;/span&gt;</div>
<div>&lt;button type="button" class="btn btn-warning position-relative"&gt;</div>
    <div>Inbox</div>
    <div>&lt;span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"&gt;</div>
        <div>99+</div>
        <div>&lt;span class="visually-hidden"&gt;unread messages&lt;/span&gt;</div>
    <div>&lt;/span&gt;</div>
<div>&lt;/button&gt;</div>
<div>&lt;span class="d-block text-black fw-medium fs-md-15 fs-lg-16 mb-12 mt-15 mt-sm-20 mt-lg-25"&gt;Dot Positioned&lt;/span&gt;</div>
<div>&lt;button type="button" class="btn btn-success position-relative"&gt;</div>
    <div>Profile</div>
    <div>&lt;span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"&gt;</div>
        <div>&lt;span class="visually-hidden"&gt;New alerts&lt;/span&gt;</div>
    <div>&lt;/span&gt;</div>
<div>&lt;/button&gt;</div>
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
  name: "BadgesContent",
};
</script>