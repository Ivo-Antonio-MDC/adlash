<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-15 mb-md-20 mb-lg-25">
            Basic Carousel
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="basicCarouselPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#basicCarouselPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="basicCarouselPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="basicCarouselCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#basicCarouselCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="basicCarouselCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="basicCarouselPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div id="basicCarousel" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="../../../assets/images/gallery/gallery1.jpg"
                      alt="gallery-image"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="../../../assets/images/gallery/gallery5.jpg"
                      alt="gallery-image"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="../../../assets/images/gallery/gallery8.jpg"
                      alt="gallery-image"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#basicCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#basicCarousel"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="basicCarouselCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#basicCarouselCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicCarouselCode">
<div>&lt;div id="basicCarousel" class="carousel slide"&gt;</div>
    <div>&lt;div class="carousel-inner"&gt;</div>
        <div>&lt;div class="carousel-item active"&gt;</div>
            <div>&lt;img src="../../../assets/images/gallery/gallery1.jpg" alt="gallery-image"&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;div class="carousel-item"&gt;</div>
            <div>&lt;img src="../../../assets/images/gallery/gallery5.jpg" alt="gallery-image"&gt;</div>
        <div>&lt;/div&gt;</div>
            <div>&lt;div class="carousel-item"&gt;</div>
        <div>&lt;img src="../../../assets/images/gallery/gallery8.jpg" alt="gallery-image"&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;button class="carousel-control-prev" type="button" data-bs-target="#basicCarousel" data-bs-slide="prev"&gt;</div>
        <div>&lt;span class="carousel-control-prev-icon" aria-hidden="true"&gt;&lt;/span&gt;</div>
        <div>&lt;span class="visually-hidden"&gt;Previous&lt;/span&gt;</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;button class="carousel-control-next" type="button" data-bs-target="#basicCarousel" data-bs-slide="next"&gt;</div>
        <div>&lt;span class="carousel-control-next-icon" aria-hidden="true"&gt;&lt;/span&gt;</div>
        <div>&lt;span class="visually-hidden"&gt;Next&lt;/span&gt;</div>
    <div>&lt;/button&gt;</div>
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
            Indicators Carousel
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="indicatorsCarouselPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#indicatorsCarouselPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="indicatorsCarouselPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="indicatorsCarouselCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#indicatorsCarouselCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="indicatorsCarouselCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="indicatorsCarouselPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div id="indicatorsCarousel" class="carousel slide">
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#indicatorsCarousel"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#indicatorsCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#indicatorsCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="../../../assets/images/gallery/gallery5.jpg"
                      alt="gallery-image"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="../../../assets/images/gallery/gallery1.jpg"
                      alt="gallery-image"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="../../../assets/images/gallery/gallery8.jpg"
                      alt="gallery-image"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#indicatorsCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#indicatorsCarousel"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="indicatorsCarouselCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#indicatorsCarouselCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="indicatorsCarouselCode">
<div>&lt;div id="indicatorsCarousel" class="carousel slide"&gt;</div>
    <div>&lt;div class="carousel-indicators"&gt;</div>
        <div>&lt;button type="button" data-bs-target="#indicatorsCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"&gt;&lt;/button&gt;</div>
        <div>&lt;button type="button" data-bs-target="#indicatorsCarousel" data-bs-slide-to="1" aria-label="Slide 2"&gt;&lt;/button&gt;</div>
        <div>&lt;button type="button" data-bs-target="#indicatorsCarousel" data-bs-slide-to="2" aria-label="Slide 3"&gt;&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="carousel-inner"&gt;</div>
        <div>&lt;div class="carousel-item active"&gt;</div>
            <div>&lt;img src="../../../assets/images/gallery/gallery5.jpg" alt="gallery-image"&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;div class="carousel-item"&gt;</div>
            <div>&lt;img src="../../../assets/images/gallery/gallery1.jpg" alt="gallery-image"&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;div class="carousel-item"&gt;</div>
            <div>&lt;img src="../../../assets/images/gallery/gallery8.jpg" alt="gallery-image"&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;button class="carousel-control-prev" type="button" data-bs-target="#indicatorsCarousel" data-bs-slide="prev"&gt;</div>
        <div>&lt;span class="carousel-control-prev-icon" aria-hidden="true"&gt;&lt;/span&gt;</div>
        <div>&lt;span class="visually-hidden"&gt;Previous&lt;/span&gt;</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;button class="carousel-control-next" type="button" data-bs-target="#indicatorsCarousel" data-bs-slide="next"&gt;</div>
        <div>&lt;span class="carousel-control-next-icon" aria-hidden="true"&gt;&lt;/span&gt;</div>
        <div>&lt;span class="visually-hidden"&gt;Next&lt;/span&gt;</div>
    <div>&lt;/button&gt;</div>
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
            Captions Carousel
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="captionsCarouselPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#captionsCarouselPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="captionsCarouselPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="captionsCarouselCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#captionsCarouselCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="captionsCarouselCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="captionsCarouselPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div id="captionsCarousel" class="carousel slide">
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#captionsCarousel"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#captionsCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#captionsCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="../../../assets/images/gallery/gallery8.jpg"
                      alt="gallery-image"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h4 class="text-white fw-bold">First slide label</h4>
                      <p class="fs-md-15 fs-lg-16 lh-base">
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src="../../../assets/images/gallery/gallery5.jpg"
                      alt="gallery-image"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h4 class="text-white fw-bold">Second slide label</h4>
                      <p class="fs-md-15 fs-lg-16 lh-base">
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src="../../../assets/images/gallery/gallery1.jpg"
                      alt="gallery-image"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h4 class="text-white fw-bold">Third slide label</h4>
                      <p class="fs-md-15 fs-lg-16 lh-base">
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#captionsCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#captionsCarousel"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="captionsCarouselCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#captionsCarouselCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="captionsCarouselCode">
<div>&lt;div id="captionsCarousel" class="carousel slide"&gt;</div>
    <div>&lt;div class="carousel-indicators"&gt;</div>
        <div>&lt;button type="button" data-bs-target="#captionsCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"&gt;&lt;/button&gt;</div>
        <div>&lt;button type="button" data-bs-target="#captionsCarousel" data-bs-slide-to="1" aria-label="Slide 2"&gt;&lt;/button&gt;</div>
        <div>&lt;button type="button" data-bs-target="#captionsCarousel" data-bs-slide-to="2" aria-label="Slide 3"&gt;&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="carousel-inner"&gt;</div>
        <div>&lt;div class="carousel-item active"&gt;</div>
            <div>&lt;img src="../../../assets/images/gallery/gallery8.jpg" alt="gallery-image"&gt;</div>
            <div>&lt;div class="carousel-caption d-none d-md-block"&gt;</div>
                <div>&lt;h4 class="text-white fw-bold"&gt;First slide label&lt;/h4&gt;</div>
                <div>&lt;p class="fs-md-15 fs-lg-16 lh-base"&gt;Some representative placeholder content for the first slide.&lt;/p&gt;</div>
            <div>&lt;/div&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;div class="carousel-item"&gt;</div>
            <div>&lt;img src="../../../assets/images/gallery/gallery5.jpg" alt="gallery-image"&gt;</div>
            <div>&lt;div class="carousel-caption d-none d-md-block"&gt;</div>
                <div>&lt;h4 class="text-white fw-bold"&gt;Second slide label&lt;/h4&gt;</div>
                <div>&lt;p class="fs-md-15 fs-lg-16 lh-base"&gt;Some representative placeholder content for the first slide.&lt;/p&gt;</div>
            <div>&lt;/div&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;div class="carousel-item"&gt;</div>
            <div>&lt;img src="../../../assets/images/gallery/gallery1.jpg" alt="gallery-image"&gt;</div>
            <div>&lt;div class="carousel-caption d-none d-md-block"&gt;</div>
                <div>&lt;h4 class="text-white fw-bold"&gt;Third slide label&lt;/h4&gt;</div>
                <div>&lt;p class="fs-md-15 fs-lg-16 lh-base"&gt;Some representative placeholder content for the first slide.&lt;/p&gt;</div>
            <div>&lt;/div&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;button class="carousel-control-prev" type="button" data-bs-target="#captionsCarousel" data-bs-slide="prev"&gt;</div>
        <div>&lt;span class="carousel-control-prev-icon" aria-hidden="true"&gt;&lt;/span&gt;</div>
        <div>&lt;span class="visually-hidden"&gt;Previous&lt;/span&gt;</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;button class="carousel-control-next" type="button" data-bs-target="#captionsCarousel" data-bs-slide="next"&gt;</div>
        <div>&lt;span class="carousel-control-next-icon" aria-hidden="true"&gt;&lt;/span&gt;</div>
        <div>&lt;span class="visually-hidden"&gt;Next&lt;/span&gt;</div>
    <div>&lt;/button&gt;</div>
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
            Crossfade Carousel
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="crossfadeCarouselPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#crossfadeCarouselPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="crossfadeCarouselPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="crossfadeCarouselCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#crossfadeCarouselCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="crossfadeCarouselCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="crossfadeCarouselPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div id="crossfadeCarousel" class="carousel slide carousel-fade">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="../../../assets/images/gallery/gallery1.jpg"
                      alt="gallery-image"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="../../../assets/images/gallery/gallery5.jpg"
                      alt="gallery-image"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="../../../assets/images/gallery/gallery8.jpg"
                      alt="gallery-image"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#crossfadeCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#crossfadeCarousel"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="crossfadeCarouselCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#crossfadeCarouselCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="crossfadeCarouselCode">
<div>&lt;div id="crossfadeCarouselCode" class="carousel slide carousel-fade"&gt;</div>
    <div>&lt;div class="carousel-inner"&gt;</div>
        <div>&lt;div class="carousel-item active"&gt;</div>
            <div>&lt;img src="../../../assets/images/gallery/gallery1.jpg" alt="gallery-image"&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;div class="carousel-item"&gt;</div>
            <div>&lt;img src="../../../assets/images/gallery/gallery5.jpg" alt="gallery-image"&gt;</div>
        <div>&lt;/div&gt;</div>
            <div>&lt;div class="carousel-item"&gt;</div>
        <div>&lt;img src="../../../assets/images/gallery/gallery8.jpg" alt="gallery-image"&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;button class="carousel-control-prev" type="button" data-bs-target="#crossfadeCarouselCode" data-bs-slide="prev"&gt;</div>
        <div>&lt;span class="carousel-control-prev-icon" aria-hidden="true"&gt;&lt;/span&gt;</div>
        <div>&lt;span class="visually-hidden"&gt;Previous&lt;/span&gt;</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;button class="carousel-control-next" type="button" data-bs-target="#crossfadeCarouselCode" data-bs-slide="next"&gt;</div>
        <div>&lt;span class="carousel-control-next-icon" aria-hidden="true"&gt;&lt;/span&gt;</div>
        <div>&lt;span class="visually-hidden"&gt;Next&lt;/span&gt;</div>
    <div>&lt;/button&gt;</div>
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
            Autoplaying Carousel
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="autoplayingCarouselPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#autoplayingCarouselPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="autoplayingCarouselPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="autoplayingCarouselCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#autoplayingCarouselCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="autoplayingCarouselCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="autoplayingCarouselPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div
                id="autoplayingCarousel"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="../../../assets/images/gallery/gallery1.jpg"
                      alt="gallery-image"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="../../../assets/images/gallery/gallery5.jpg"
                      alt="gallery-image"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="../../../assets/images/gallery/gallery8.jpg"
                      alt="gallery-image"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#autoplayingCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#autoplayingCarousel"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="autoplayingCarouselCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#autoplayingCarouselCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="autoplayingCarouselCode">
<div>&lt;div id="autoplayingCarousel" class="carousel slide" data-bs-ride="carousel"&gt;</div>
    <div>&lt;div class="carousel-inner"&gt;</div>
        <div>&lt;div class="carousel-item active"&gt;</div>
            <div>&lt;img src="../../../assets/images/gallery/gallery1.jpg" alt="gallery-image"&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;div class="carousel-item"&gt;</div>
            <div>&lt;img src="../../../assets/images/gallery/gallery5.jpg" alt="gallery-image"&gt;</div>
        <div>&lt;/div&gt;</div>
            <div>&lt;div class="carousel-item"&gt;</div>
        <div>&lt;img src="../../../assets/images/gallery/gallery8.jpg" alt="gallery-image"&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;button class="carousel-control-prev" type="button" data-bs-target="#autoplayingCarousel" data-bs-slide="prev"&gt;</div>
        <div>&lt;span class="carousel-control-prev-icon" aria-hidden="true"&gt;&lt;/span&gt;</div>
        <div>&lt;span class="visually-hidden"&gt;Previous&lt;/span&gt;</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;button class="carousel-control-next" type="button" data-bs-target="#autoplayingCarousel" data-bs-slide="next"&gt;</div>
        <div>&lt;span class="carousel-control-next-icon" aria-hidden="true"&gt;&lt;/span&gt;</div>
        <div>&lt;span class="visually-hidden"&gt;Next&lt;/span&gt;</div>
    <div>&lt;/button&gt;</div>
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
            Disable Touch Swiping Carousel
          </h5>
          <ul class="nav nav-tabs mb-15 mb-md-20" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="disabledCarouselPreview-tab"
                data-bs-toggle="tab"
                data-bs-target="#disabledCarouselPreview-tab-pane"
                type="button"
                role="tab"
                aria-controls="disabledCarouselPreview-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="disabledCarouselCode-tab"
                data-bs-toggle="tab"
                data-bs-target="#disabledCarouselCode-tab-pane"
                type="button"
                role="tab"
                aria-controls="disabledCarouselCode-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="disabledCarouselPreview-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <div
                id="disabledTouchSwipingCarousel"
                class="carousel slide"
                data-bs-touch="false"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#disabledTouchSwipingCarousel"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#disabledTouchSwipingCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#disabledTouchSwipingCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="../../../assets/images/gallery/gallery5.jpg"
                      alt="gallery-image"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="../../../assets/images/gallery/gallery1.jpg"
                      alt="gallery-image"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="../../../assets/images/gallery/gallery8.jpg"
                      alt="gallery-image"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#disabledTouchSwipingCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#disabledTouchSwipingCarousel"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div
              class="tab-pane fade position-relative"
              id="disabledCarouselCode-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
                data-clipboard-target="#disabledCarouselCode"
              >
                Copy
              </button>
              <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="disabledCarouselCode">
<div>&lt;div id="disabledTouchSwipingCarousel" class="carousel slide" data-bs-touch="false"&gt;</div>
    <div>&lt;div class="carousel-indicators"&gt;</div>
        <div>&lt;button type="button" data-bs-target="#disabledTouchSwipingCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"&gt;&lt;/button&gt;</div>
        <div>&lt;button type="button" data-bs-target="#disabledTouchSwipingCarousel" data-bs-slide-to="1" aria-label="Slide 2"&gt;&lt;/button&gt;</div>
        <div>&lt;button type="button" data-bs-target="#disabledTouchSwipingCarousel" data-bs-slide-to="2" aria-label="Slide 3"&gt;&lt;/button&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="carousel-inner"&gt;</div>
        <div>&lt;div class="carousel-item active"&gt;</div>
            <div>&lt;img src="../../../assets/images/gallery/gallery5.jpg" alt="gallery-image"&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;div class="carousel-item"&gt;</div>
            <div>&lt;img src="../../../assets/images/gallery/gallery1.jpg" alt="gallery-image"&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;div class="carousel-item"&gt;</div>
            <div>&lt;img src="../../../assets/images/gallery/gallery8.jpg" alt="gallery-image"&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;button class="carousel-control-prev" type="button" data-bs-target="#disabledTouchSwipingCarousel" data-bs-slide="prev"&gt;</div>
        <div>&lt;span class="carousel-control-prev-icon" aria-hidden="true"&gt;&lt;/span&gt;</div>
        <div>&lt;span class="visually-hidden"&gt;Previous&lt;/span&gt;</div>
    <div>&lt;/button&gt;</div>
    <div>&lt;button class="carousel-control-next" type="button" data-bs-target="#disabledTouchSwipingCarousel" data-bs-slide="next"&gt;</div>
        <div>&lt;span class="carousel-control-next-icon" aria-hidden="true"&gt;&lt;/span&gt;</div>
        <div>&lt;span class="visually-hidden"&gt;Next&lt;/span&gt;</div>
    <div>&lt;/button&gt;</div>
<div>&lt;/div&gt;</div>
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
  name: "CarouselContent",
};
</script>