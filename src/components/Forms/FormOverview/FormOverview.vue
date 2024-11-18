<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Basic Forms
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="overviewPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#overviewPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="overviewPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="overviewCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#overviewCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="overviewCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="overviewPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <form>
                <div class="mb-mb-15 mb-md-20">
                  <label for="overviewEmail" class="form-label fw-medium"
                    >Email address</label
                  >
                  <input
                    type="email"
                    class="form-control shadow-none text-black fs-md-15 fs-lg-16"
                    id="overviewEmail"
                  />
                  <div class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-mb-15 mb-md-20">
                  <label for="overviewPassword" class="form-label fw-medium"
                    >Password</label
                  >
                  <input
                    type="password"
                    class="form-control shadow-none text-black fs-md-15 fs-lg-16"
                    id="overviewPassword"
                  />
                </div>
                <div class="form-check mb-mb-15 mb-md-20">
                  <input
                    class="form-check-input shadow-none"
                    type="checkbox"
                    id="checkmeout"
                  />
                  <label
                    class="form-check-label fw-medium position-relative top-2"
                    for="checkmeout"
                  >
                    Check me out
                  </label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="overviewCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#overviewCode"
              >
                Copy
              </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="overviewCode">
<div>&lt;form&gt;</div>
    <div>&lt;div class="mb-mb-15 mb-md-20"&gt;</div>
        <div>&lt;label for="overviewEmail" class="form-label fw-medium"&gt;Email address&lt;/label&gt;</div>
        <div>&lt;input type="email" class="form-control shadow-none text-black fs-md-15 fs-lg-16" id="overviewEmail"&gt;</div>
        <div>&lt;div class="form-text"&gt;We'll never share your email with anyone else.&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="mb-mb-15 mb-md-20"&gt;</div>
        <div>&lt;label for="overviewPassword" class="form-label fw-medium"&gt;Password&lt;/label&gt;</div>
        <div>&lt;input type="password" class="form-control shadow-none text-black fs-md-15 fs-lg-16" id="overviewPassword"&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="form-check mb-mb-15 mb-md-20"&gt;</div>
        <div>&lt;input class="form-check-input shadow-none" type="checkbox" id="checkmeout"&gt;</div>
        <div>&lt;label class="form-check-label fw-medium position-relative top-2" for="checkmeout"&gt;</div>
            <div>Check me out</div>
        <div>&lt;/label&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;button type="submit" class="btn btn-primary"&gt;Submit&lt;/button&gt;</div>
<div>&lt;/form&gt;</div>
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
            Disabled Forms
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="disabledPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#disabledPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="disabledPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="disabledCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#disabledCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="disabledCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="disabledPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <form>
                <fieldset disabled>
                  <div class="mb-mb-15 mb-md-20">
                    <label for="disabledEmail" class="form-label fw-medium">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control shadow-none text-black fs-md-15 fs-lg-16"
                      id="disabledEmail"
                    />
                    <div class="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div class="mb-mb-15 mb-md-20">
                    <label for="disabledPassword" class="form-label fw-medium">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control shadow-none text-black fs-md-15 fs-lg-16"
                      id="disabledPassword"
                    />
                  </div>
                  <div class="form-check mb-mb-15 mb-md-20">
                    <input
                      class="form-check-input shadow-none"
                      type="checkbox"
                      id="checkme"
                    />
                    <label
                      class="form-check-label fw-medium position-relative top-2"
                      for="checkme"
                    >
                      Check me
                    </label>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </fieldset>
              </form>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="disabledCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#disabledCode"
              >
                Copy
              </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="disabledCode">
<div>&lt;form&gt;</div>
    <div>&lt;fieldset disabled&gt;</div>
        <div>&lt;div class="mb-mb-15 mb-md-20"&gt;</div>
        <div>&lt;label for="disabledEmail" class="form-label fw-medium"&gt;Email address&lt;/label&gt;</div>
            <div>&lt;input type="email" class="form-control shadow-none text-black fs-md-15 fs-lg-16" id="disabledEmail"&gt;</div>
            <div>&lt;div class="form-text"&gt;We'll never share your email with anyone else.&lt;/div&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;div class="mb-mb-15 mb-md-20"&gt;</div>
            <div>&lt;label for="disabledPassword" class="form-label fw-medium"&gt;Password&lt;/label&gt;</div>
            <div>&lt;input type="password" class="form-control shadow-none text-black fs-md-15 fs-lg-16" id="disabledPassword"&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;div class="form-check mb-mb-15 mb-md-20"&gt;</div>
            <div>&lt;input class="form-check-input shadow-none" type="checkbox" id="checkme"&gt;</div>
            <div>&lt;label class="form-check-label fw-medium position-relative top-2" for="checkme"&gt;</div>
                <div>Check me</div>
            <div>&lt;/label&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;button type="submit" class="btn btn-primary"&gt;Submit&lt;/button&gt;</div>
    <div>&lt;/fieldset&gt;</div>
<div>&lt;/form&gt;</div>
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
  name: "FormsOverview",
};
</script>