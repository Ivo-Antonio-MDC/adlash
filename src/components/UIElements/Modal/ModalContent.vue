<template>
  <div class="row">
    <div class="col-lg-4">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Basic Modal
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="basicModalPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#basicModalPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="basicModalPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="basicModalCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#basicModalCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="basicModalCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="basicModalPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#basicModal"
              >
                Launch demo modal
              </button>

              <!-- Modal -->
              <div
                class="modal fade"
                id="basicModal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5">Modal title</h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="basicModalCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0" data-clipboard-target="#basicModalCode">
                                        Copy
                                    </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicModalCode">
<div>&lt;!-- Button trigger modal --&gt;</div>
<div>&lt;button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal"&gt;</div>
    <div>Launch demo modal</div>
<div>&lt;/button&gt;</div>

<div>&lt;!-- Modal --&gt;</div>
<div>&lt;div class="modal fade" id="basicModal" tabindex="-1" aria-hidden="true"&gt;</div>
    <div>&lt;div class="modal-dialog"&gt;</div>
        <div>&lt;div class="modal-content"&gt;</div>
            <div>&lt;div class="modal-header"&gt;</div>
                <div>&lt;h1 class="modal-title fs-5"&gt;Modal title&lt;/h1&gt;</div>
                <div>&lt;button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"&gt;&lt;/button&gt;</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;div class="modal-body"&gt;</div>
                <div>...</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;div class="modal-footer"&gt;</div>
                <div>&lt;button type="button" class="btn btn-secondary" data-bs-dismiss="modal"&gt;Close&lt;/button&gt;</div>
                <div>&lt;button type="button" class="btn btn-primary"&gt;Save changes&lt;/button&gt;</div>
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
    </div>
    <div class="col-lg-4">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Static Backdrop Modal
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="backdropModalPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#backdropModalPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="backdropModalPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="backdropModalCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#backdropModalCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="backdropModalCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="backdropModalPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Launch static backdrop modal
              </button>

              <!-- Modal -->
              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5">Modal title</h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Understood
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="backdropModalCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0" data-clipboard-target="#backdropModalCode">
                                        Copy
                                    </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="backdropModalCode">
<div>&lt;!-- Button trigger modal --&gt;</div>
<div>&lt;button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop"&gt;</div>
    <div>Launch static backdrop modal</div>
<div>&lt;/button&gt;</div>

<div>&lt;!-- Modal --&gt;</div>
<div>&lt;div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true"&gt;</div>
    <div>&lt;div class="modal-dialog"&gt;</div>
        <div>&lt;div class="modal-content"&gt;</div>
            <div>&lt;div class="modal-header"&gt;</div>
                <div>&lt;h1 class="modal-title fs-5"&gt;Modal title&lt;/h1&gt;</div>
                <div>&lt;button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"&gt;&lt;/button&gt;</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;div class="modal-body"&gt;</div>
                <div>...</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;div class="modal-footer"&gt;</div>
                <div>&lt;button type="button" class="btn btn-secondary" data-bs-dismiss="modal"&gt;Close&lt;/button&gt;</div>
                <div>&lt;button type="button" class="btn btn-primary"&gt;Understood&lt;/button&gt;</div>
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
    </div>
    <div class="col-lg-4">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Scrolling Long Content Modal
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="contentModalPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#contentModalPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="contentModalPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="contentModalCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#contentModalCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="contentModalCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="contentModalPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#contentModalScrollable"
              >
                Launch demo modal
              </button>

              <!-- Modal -->
              <div
                class="modal fade"
                id="contentModalScrollable"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5">Modal title</h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <p class="lh-base fs-md-15 fs-lg-16 text-paragraph">
                        This is some placeholder content to show the scrolling
                        behavior for modals. We use repeated line breaks to
                        demonstrate how content can exceed minimum inner height,
                        thereby showing inner scrolling. When content becomes
                        longer than the predefined max-height of modal, content
                        will be cropped and scrollable within the modal.
                      </p>
                      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                      <p class="lh-base fs-md-15 fs-lg-16 text-paragraph">
                        This content should appear at the bottom after you
                        scroll.
                      </p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="contentModalCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0" data-clipboard-target="#contentModalCode">
                                        Copy
                                    </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="contentModalCode">
<div>&lt;!-- Button trigger modal --&gt;</div>
<div>&lt;button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#contentModalScrollable"&gt;</div>
    <div>Launch demo modal</div>
<div>&lt;/button&gt;</div>

<div>&lt;!-- Modal --&gt;</div>
<div>&lt;div class="modal fade" id="contentModalScrollable" tabindex="-1" aria-hidden="true"&gt;</div>
    <div>&lt;div class="modal-dialog modal-dialog-scrollable"&gt;</div>
        <div>&lt;div class="modal-content"&gt;</div>
            <div>&lt;div class="modal-header"&gt;</div>
                <div>&lt;h1 class="modal-title fs-5"&gt;Modal title&lt;/h1&gt;</div>
                <div>&lt;button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"&gt;&lt;/button&gt;</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;div class="modal-body"&gt;</div>
                <div>&lt;p class="lh-base fs-md-15 fs-lg-16 text-paragraph"&gt;This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.&lt;/p&gt;</div>
                <div>&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;</div>
                <div>&lt;p class="lh-base fs-md-15 fs-lg-16 text-paragraph"&gt;This content should appear at the bottom after you scroll.&lt;/p&gt;</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;div class="modal-footer"&gt;</div>
                <div>&lt;button type="button" class="btn btn-secondary" data-bs-dismiss="modal"&gt;Close&lt;/button&gt;</div>
                <div>&lt;button type="button" class="btn btn-primary"&gt;Save changes&lt;/button&gt;</div>
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
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Vertically Centered Modal
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="verticallyModalPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#verticallyModalPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="verticallyModalPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="verticallyModalCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#verticallyModalCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="verticallyModalCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="verticallyModalPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#verticallyCenteredModal"
              >
                Launch demo modal
              </button>

              <!-- Modal -->
              <div
                class="modal fade"
                id="verticallyCenteredModal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5">Modal title</h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="verticallyModalCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0" data-clipboard-target="#verticallyModalCode">
                                        Copy
                                    </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="verticallyModalCode">
<div>&lt;!-- Button trigger modal --&gt;</div>
<div>&lt;button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#verticallyCenteredModal"&gt;</div>
    <div>Launch demo modal</div>
<div>&lt;/button&gt;</div>

<div>&lt;!-- Modal --&gt;</div>
<div>&lt;div class="modal fade" id="verticallyCenteredModal" tabindex="-1" aria-hidden="true"&gt;</div>
    <div>&lt;div class="modal-dialog modal-dialog-centered"&gt;</div>
        <div>&lt;div class="modal-content"&gt;</div>
            <div>&lt;div class="modal-header"&gt;</div>
                <div>&lt;h1 class="modal-title fs-5"&gt;Modal title&lt;/h1&gt;</div>
                <div>&lt;button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"&gt;&lt;/button&gt;</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;div class="modal-body"&gt;</div>
                <div>...</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;div class="modal-footer"&gt;</div>
                <div>&lt;button type="button" class="btn btn-secondary" data-bs-dismiss="modal"&gt;Close&lt;/button&gt;</div>
                <div>&lt;button type="button" class="btn btn-primary"&gt;Save changes&lt;/button&gt;</div>
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
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Sizing Modal
          </h5>
          <ul class="nav nav-tabs mb-5 mb-md-10" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="sizingModalPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#sizingModalPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="sizingModalPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="sizingModalCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#sizingModalCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="sizingModalCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="sizingModalPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-primary me-10 mt-10"
                data-bs-toggle="modal"
                data-bs-target="#sizingExtraLargeModal"
              >
                Extra Large
              </button>
              <button
                type="button"
                class="btn btn-success me-10 mt-10"
                data-bs-toggle="modal"
                data-bs-target="#sizingLargeModal"
              >
                Large
              </button>
              <button
                type="button"
                class="btn btn-danger me-10 mt-10"
                data-bs-toggle="modal"
                data-bs-target="#sizingSmallModal"
              >
                Small
              </button>

              <!-- Modal -->
              <div
                class="modal fade"
                id="sizingExtraLargeModal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-xl">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5">Modal title</h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="modal fade"
                id="sizingLargeModal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5">Modal title</h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="modal fade"
                id="sizingSmallModal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-sm">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5">Modal title</h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="sizingModalCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0" data-clipboard-target="#sizingModalCode">
                                        Copy
                                    </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="sizingModalCode">
<div>&lt;div class="modal-dialog modal-xl"&gt;...&lt;/div&gt;</div>
<div>&lt;div class="modal-dialog modal-lg"&gt;...&lt;/div&gt;</div>
<div>&lt;div class="modal-dialog modal-sm"&gt;...&lt;/div&gt;</div>
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
  name: "ModalContent",
};
</script>