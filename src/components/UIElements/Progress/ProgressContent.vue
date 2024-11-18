<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-xl-25">
            Basic Progress
          </h5>
          <div
            class="progress mb-15"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar" style="width: 0%"></div>
          </div>
          <div
            class="progress mb-15"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar" style="width: 25%"></div>
          </div>
          <div
            class="progress mb-15"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar" style="width: 50%"></div>
          </div>
          <div
            class="progress mb-15"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar" style="width: 75%"></div>
          </div>
          <div
            class="progress"
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar" style="width: 100%"></div>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#basicProgressCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicProgressCode">
<div>&lt;div class="progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar" style="width: 0%"&gt;&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="progress" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar" style="width: 25%"&gt;&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar" style="width: 50%"&gt;&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar" style="width: 75%"&gt;&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar" style="width: 100%"&gt;&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-xl-25">
            Labels Progress
          </h5>

          <div
            class="progress mb-15"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar fs-12 fw-medium" style="width: 0%">0%</div>
          </div>
          <div
            class="progress mb-15"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar fs-12 fw-medium" style="width: 25%">
              25%
            </div>
          </div>
          <div
            class="progress mb-15"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar fs-12 fw-medium" style="width: 50%">
              50%
            </div>
          </div>
          <div
            class="progress mb-15"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar fs-12 fw-medium" style="width: 75%">
              75%
            </div>
          </div>
          <div
            class="progress"
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar fs-12 fw-medium" style="width: 100%">
              100%
            </div>
          </div>

          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#labelsProgressCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="labelsProgressCode">
<div>&lt;div class="progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar fs-12 fw-medium" style="width: 0%"&gt;0%&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="progress" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar fs-12 fw-medium" style="width: 25%"&gt;25%&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar fs-12 fw-medium" style="width: 50%"&gt;50%&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar fs-12 fw-medium" style="width: 75%"&gt;75%&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar fs-12 fw-medium" style="width: 100%"&gt;100%&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-xl-25">
            Backgrounds Progress
          </h5>
          <div
            class="progress mb-15"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-success" style="width: 25%"></div>
          </div>
          <div
            class="progress mb-15"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-info" style="width: 50%"></div>
          </div>
          <div
            class="progress mb-15"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-warning" style="width: 75%"></div>
          </div>
          <div
            class="progress"
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-danger" style="width: 100%"></div>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#backgroundProgressCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="backgroundProgressCode">
<div>&lt;div class="progress" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar bg-success" style="width: 25%"&gt;&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar bg-info" style="width: 50%"&gt;&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar bg-warning" style="width: 75%"&gt;&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar bg-danger" style="width: 100%"&gt;&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-xl-25">
            Backgrounds Progress with Labels
          </h5>
          <div
            class="progress mb-15"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-success fs-12 fw-medium"
              style="width: 25%"
            >
              25%
            </div>
          </div>
          <div
            class="progress mb-15"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-info fs-12 fw-medium"
              style="width: 50%"
            >
              50%
            </div>
          </div>
          <div
            class="progress mb-15"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-warning fs-12 fw-medium"
              style="width: 75%"
            >
              75%
            </div>
          </div>
          <div
            class="progress"
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-danger fs-12 fw-medium"
              style="width: 100%"
            >
              100%
            </div>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#backgroundProgressLabelsCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="backgroundProgressLabelsCode">
<div>&lt;div class="progress" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar bg-success fs-12 fw-medium" style="width: 25%"&gt;25%&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar bg-info fs-12 fw-medium" style="width: 50%"&gt;50%&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar bg-warning fs-12 fw-medium" style="width: 75%"&gt;75%&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar bg-danger fs-12 fw-medium" style="width: 100%"&gt;100%&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-xl-25">
            Multiple Bars Progress
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="multipleBarsProgressPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#multipleBarsProgressPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="multipleBarsProgressPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="multipleBarsProgressCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#multipleBarsProgressCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="multipleBarsProgressCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="multipleBarsProgressPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div class="progress-stacked">
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="15"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 15%"
                >
                  <div class="progress-bar rounded-0"></div>
                </div>
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 30%"
                >
                  <div class="progress-bar rounded-0 bg-success"></div>
                </div>
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 20%"
                >
                  <div class="progress-bar rounded-0 bg-info"></div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="multipleBarsProgressCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#multipleBarsProgressCode"
              >
                Copy
              </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="multipleBarsProgressCode">
<div>&lt;div class="progress-stacked"&gt;</div>
    <div>&lt;div class="progress" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%"&gt;</div>
        <div>&lt;div class="progress-bar rounded-0"&gt;&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="progress" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%"&gt;</div>
        <div>&lt;div class="progress-bar rounded-0 bg-success"&gt;&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="progress" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"&gt;</div>
        <div>&lt;div class="progress-bar rounded-0 bg-info"&gt;&lt;/div&gt;</div>
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
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-xl-25">
            Animated Stripes Progress
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="animatedProgressPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#animatedProgressPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="animatedProgressPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="animatedProgressCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#animatedProgressCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="animatedProgressCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="animatedProgressPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div
                class="progress"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  style="width: 75%"
                ></div>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="animatedProgressCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <!-- <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#animatedProgressCode"
              >
                Copy
              </button> -->
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="animatedProgressCode">
<div>&lt;div class="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%"&gt;&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-xl-25">
            Striped Progress
          </h5>
          <div
            class="progress mb-15"
            role="progressbar"
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar progress-bar-striped"
              style="width: 10%"
            ></div>
          </div>
          <div
            class="progress mb-15"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar progress-bar-striped bg-success"
              style="width: 25%"
            ></div>
          </div>
          <div
            class="progress mb-15"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar progress-bar-striped bg-info"
              style="width: 50%"
            ></div>
          </div>
          <div
            class="progress mb-15"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar progress-bar-striped bg-warning"
              style="width: 75%"
            ></div>
          </div>
          <div
            class="progress"
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar progress-bar-striped bg-danger"
              style="width: 100%"
            ></div>
          </div>
          <div class="position-relative mt-25">
            <!-- <button
              class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
              data-clipboard-target="#stripedProgressCode"
            >
              Copy
            </button> -->
            <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="stripedProgressCode">
<div>&lt;div class="progress" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar progress-bar-striped" style="width: 10%"&gt;&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="progress" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar progress-bar-striped bg-success" style="width: 25%"&gt;&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar progress-bar-striped bg-info" style="width: 50%"&gt;&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar progress-bar-striped bg-warning" style="width: 75%"&gt;&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>&lt;div class="progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"&gt;</div>
    <div>&lt;div class="progress-bar progress-bar-striped bg-danger" style="width: 100%"&gt;&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
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
  name: "ProgressContent",
};
</script>