<template>
  <div class="row">
    <div class="col-xxl-7 col-xxxl-8">
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing cover-image-card"
      >
        <div class="card-body p-10">
          <img
            src="../../../assets/images/social-timeline.jpg"
            alt="social-timeline-image"
          />
          <ul class="settings-tabs mt-10 ps-0 mb-0 list-unstyled">
            <li>
              <router-link
                to="/social-timeline"
                class="fs-md-15 fs-lg-16 fw-medium text-decoration-none d-block w-100 rounded-1 text-center transition"
              >
                Timeline
              </router-link>
            </li>
            <li>
              <router-link
                to="/social-about"
                class="fs-md-15 fs-lg-16 fw-medium text-decoration-none d-block w-100 rounded-1 text-center transition"
              >
                About
              </router-link>
            </li>
            <li>
              <router-link
                to="/social-activity"
                class="fs-md-15 fs-lg-16 fw-medium text-decoration-none d-block w-100 rounded-1 text-center transition"
              >
                Activity
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing create-social-post-card"
      >
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <ul class="nav nav-tabs d-block" id="myTab" role="tablist">
            <li class="nav-item d-inline-block" role="presentation">
              <button
                class="nav-link border-0 mb-0 fs-14 fw-bold d-block text-start position-relative active"
                id="create-post-tab"
                data-bs-toggle="tab"
                data-bs-target="#create-post-tab-pane"
                type="button"
                role="tab"
                aria-controls="create-post-tab-pane"
                aria-selected="true"
              >
                Create Post
              </button>
            </li>
            <li class="nav-item d-inline-block" role="presentation">
              <button
                class="nav-link border-0 mb-0 fs-14 fw-bold d-block text-start position-relative"
                id="share-vide-image-tab"
                data-bs-toggle="tab"
                data-bs-target="#share-vide-image-tab-pane"
                type="button"
                role="tab"
                aria-controls="share-vide-image-tab-pane"
                aria-selected="false"
              >
                Share Video/Image
              </button>
            </li>
            <li class="nav-item d-inline-block" role="presentation">
              <button
                class="nav-link border-0 mb-0 fs-14 fw-bold d-block text-start position-relative"
                id="share-story-tab"
                data-bs-toggle="tab"
                data-bs-target="#share-story-tab-pane"
                type="button"
                role="tab"
                aria-controls="share-story-tab-pane"
                aria-selected="false"
              >
                Share Story
              </button>
            </li>
          </ul>
          <div class="tab-content bg-white" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="create-post-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <form>
                <textarea
                  cols="30"
                  rows="5"
                  class="input-post d-block w-100 text-black fs-14"
                  placeholder="Type here"
                ></textarea>
                <div class="pt-10 pb-10 pe-10 ps-10 ps-md-15 ps-lg-20">
                  <div
                    class="d-sm-flex align-items-center justify-content-between"
                  >
                    <div class="buttons-list position-relative mb-8 mb-sm-0">
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 transition"
                      >
                        <i class="ph ph-smiley"></i>
                      </button>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 transition"
                      >
                        <i class="ph-fill ph-image-square"></i>
                      </button>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 transition"
                      >
                        <i class="ph-bold ph-video-camera"></i>
                      </button>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 transition"
                      >
                        <i class="ph-bold ph-link-break"></i>
                      </button>
                    </div>
                    <button
                      type="submit"
                      class="default-btn position-relative transition border-0 fw-medium text-white pt-11 pb-11 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-30 pe-md-30 rounded-1 bg-success fs-md-15 fs-lg-16 d-inline-block d-inline-block"
                    >
                      Public Post
                      <i class="ph-fill ph-paper-plane-tilt ms-5 lh-1"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              class="tab-pane fade"
              id="share-vide-image-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <form>
                <textarea
                  cols="30"
                  rows="5"
                  class="input-post d-block w-100 text-black fs-14"
                  placeholder="Type here"
                ></textarea>
                <div class="pt-10 pb-10 pe-10 ps-10 ps-md-15 ps-lg-20">
                  <div
                    class="d-sm-flex align-items-center justify-content-between"
                  >
                    <div class="buttons-list position-relative mb-8 mb-sm-0">
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 transition"
                      >
                        <i class="ph ph-smiley"></i>
                      </button>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 transition"
                      >
                        <i class="ph-fill ph-image-square"></i>
                      </button>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 transition"
                      >
                        <i class="ph-bold ph-video-camera"></i>
                      </button>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 transition"
                      >
                        <i class="ph-bold ph-link-break"></i>
                      </button>
                    </div>
                    <button
                      type="submit"
                      class="default-btn position-relative transition border-0 fw-medium text-white pt-11 pb-11 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-30 pe-md-30 rounded-1 bg-success fs-md-15 fs-lg-16 d-inline-block d-inline-block"
                    >
                      Public Post
                      <i class="ph-fill ph-paper-plane-tilt ms-5 lh-1"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              class="tab-pane fade"
              id="share-story-tab-pane"
              role="tabpanel"
              tabindex="0"
            >
              <form>
                <textarea
                  cols="30"
                  rows="5"
                  class="input-post d-block w-100 text-black fs-14"
                  placeholder="Type here"
                ></textarea>
                <div class="pt-10 pb-10 pe-10 ps-10 ps-md-15 ps-lg-20">
                  <div
                    class="d-sm-flex align-items-center justify-content-between"
                  >
                    <div class="buttons-list position-relative mb-8 mb-sm-0">
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 transition"
                      >
                        <i class="ph ph-smiley"></i>
                      </button>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 transition"
                      >
                        <i class="ph-fill ph-image-square"></i>
                      </button>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 transition"
                      >
                        <i class="ph-bold ph-video-camera"></i>
                      </button>
                      <button
                        type="button"
                        class="bg-transparent p-0 border-0 transition"
                      >
                        <i class="ph-bold ph-link-break"></i>
                      </button>
                    </div>
                    <button
                      type="submit"
                      class="default-btn position-relative transition border-0 fw-medium text-white pt-11 pb-11 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-30 pe-md-30 rounded-1 bg-success fs-md-15 fs-lg-16 d-inline-block d-inline-block"
                    >
                      Public Post
                      <i class="ph-fill ph-paper-plane-tilt ms-5 lh-1"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing social-post-card"
      >
        <div class="card-body p-0">
          <div
            class="user-info pt-15 pt-md-20 pb-15 pb-md-20 ps-15 ps-sm-20 ps-md-25 ps-lg-30 pe-15 pe-sm-20 pe-md-25 pe-lg-30 d-flex align-items-center justify-content-between"
          >
            <div class="d-flex align-items-center">
              <img
                src="../../../assets/images/user/user15.jpg"
                class="rounded-circle"
                width="50"
                height="50"
                alt="user"
              />
              <div class="ms-12">
                <span
                  class="d-block fs-md-15 fs-lg-16 text-black fw-medium mb-1"
                  >Anaconda Jebin</span
                >
                <span class="d-block text-muted">30 mins ago</span>
              </div>
            </div>
            <div class="dropdown">
              <button
                class="dropdown-toggle card-dot-btn lh-1 position-relative top-4 bg-transparent border-0 shadow-none p-0 transition"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="flaticon-dots"></i>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="javascript:void(0);"
                    ><i
                      class="flaticon-view lh-1 me-8 position-relative top-1"
                    ></i>
                    View</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="javascript:void(0);"
                    ><i
                      class="flaticon-pen lh-1 me-8 position-relative top-1"
                    ></i>
                    Edit</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="javascript:void(0);"
                    ><i
                      class="flaticon-delete lh-1 me-8 position-relative top-1"
                    ></i>
                    Delete</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div
            class="pt-15 pt-md-20 pb-15 pb-md-20 ps-15 ps-sm-20 ps-md-25 ps-lg-30 pe-15 pe-sm-20 pe-md-25 pe-lg-30"
          >
            <p class="text-paragraph fs-md-15 fs-lg-16 lh-base">
              We’re fully committed to making this the most accessible and
              results-driven AI course on the planet. This requires us to be
              there when you need our help. That’s why we’ve put together a team
              of professional Data Scientists to support you in your journey,
              meaning you’ll get a response from us within 48 hours maximum.
            </p>
            <div
              class="post-info d-md-flex align-items-center justify-content-between"
            >
              <ul class="ps-0 list-unstyled mb-0">
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent text-black fw-medium border-0 position-relative d-inline-block"
                  >
                    <i class="flaticon-like"></i> 1204
                    <span class="text-muted fw-normal">Like</span>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent text-black fw-medium border-0 position-relative d-inline-block"
                  >
                    <i class="flaticon-chat-1"></i> 12
                    <span class="text-muted fw-normal">Comments</span>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent text-black fw-medium border-0 position-relative d-inline-block"
                  >
                    <i class="flaticon-share"></i> 1
                    <span class="text-muted fw-normal">Share</span>
                  </button>
                </li>
              </ul>
              <span
                class="views d-block lh-1 fw-medium text-muted position-relative"
                ><i class="flaticon-view"></i> 122K Views</span
              >
            </div>
            <form>
              <div class="write-your-comment position-relative">
                <div class="write-comment position-relative">
                  <img
                    src="../../../assets/images/user/user6.jpg"
                    width="35"
                    height="35"
                    class="rounded-circle"
                    alt="user"
                  />
                  <input
                    type="text"
                    class="input-comment d-block w-100 text-black fs-14"
                    placeholder="Post your comment"
                  />
                  <button
                    type="button"
                    class="bg-transparent p-0 border-0 transition"
                  >
                    <i class="ph ph-smiley"></i>
                  </button>
                </div>
                <div class="buttons-list">
                  <button
                    type="button"
                    class="border-0 d-inline-block position-relative text-center transition"
                  >
                    <i class="flaticon-gallery-1"></i>
                  </button>
                  <button
                    type="button"
                    class="border-0 d-inline-block position-relative text-center transition"
                  >
                    <i class="flaticon-link-1"></i>
                  </button>
                  <button
                    type="button"
                    class="border-0 d-inline-block position-relative text-center transition active"
                  >
                    <i class="flaticon-airplane"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing social-post-card"
      >
        <div class="card-body p-0">
          <div
            class="user-info pt-15 pt-md-20 pb-15 pb-md-20 ps-15 ps-sm-20 ps-md-25 ps-lg-30 pe-15 pe-sm-20 pe-md-25 pe-lg-30 d-flex align-items-center justify-content-between"
          >
            <div class="d-flex align-items-center">
              <img
                src="../../../assets/images/user/user5.jpg"
                class="rounded-circle"
                width="50"
                height="50"
                alt="user"
              />
              <div class="ms-12">
                <span
                  class="d-block fs-md-15 fs-lg-16 text-black fw-medium mb-1"
                  >Angela Carter</span
                >
                <span class="d-block text-muted">2 days ago</span>
              </div>
            </div>
            <div class="dropdown">
              <button
                class="dropdown-toggle card-dot-btn lh-1 position-relative top-4 bg-transparent border-0 shadow-none p-0 transition"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="flaticon-dots"></i>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="javascript:void(0);"
                    ><i
                      class="flaticon-view lh-1 me-8 position-relative top-1"
                    ></i>
                    View</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="javascript:void(0);"
                    ><i
                      class="flaticon-pen lh-1 me-8 position-relative top-1"
                    ></i>
                    Edit</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="javascript:void(0);"
                    ><i
                      class="flaticon-delete lh-1 me-8 position-relative top-1"
                    ></i>
                    Delete</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div
            class="pt-15 pt-md-20 pb-15 pb-md-20 ps-15 ps-sm-20 ps-md-25 ps-lg-30 pe-15 pe-sm-20 pe-md-25 pe-lg-30"
          >
            <p class="text-paragraph fs-md-15 fs-lg-16 lh-base">
              We’re fully committed to making this the most accessible and
              results-driven AI course on the planet. This requires us to be
              there when you need our help. That’s why we’ve put together a team
              of professional Data Scientists to support you in your journey,
              meaning you’ll get a response from us within 48 hours maximum.
            </p>
            <div class="row">
              <div class="col-6">
                <img
                  src="../../../assets/images/social/social9.jpg"
                  alt="social-image"
                />
              </div>
              <div class="col-6">
                <img
                  src="../../../assets/images/social/social10.jpg"
                  alt="social-image"
                />
              </div>
            </div>
            <div
              class="post-info d-md-flex align-items-center justify-content-between"
            >
              <ul class="ps-0 list-unstyled mb-0">
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent text-black fw-medium border-0 position-relative d-inline-block"
                  >
                    <i class="flaticon-like"></i> 1204
                    <span class="text-muted fw-normal">Like</span>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent text-black fw-medium border-0 position-relative d-inline-block"
                  >
                    <i class="flaticon-chat-1"></i> 12
                    <span class="text-muted fw-normal">Comments</span>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent text-black fw-medium border-0 position-relative d-inline-block"
                  >
                    <i class="flaticon-share"></i> 1
                    <span class="text-muted fw-normal">Share</span>
                  </button>
                </li>
              </ul>
              <span
                class="views d-block lh-1 fw-medium text-muted position-relative"
                ><i class="flaticon-view"></i> 122K Views</span
              >
            </div>
            <form>
              <div class="write-your-comment position-relative">
                <div class="write-comment position-relative">
                  <img
                    src="../../../assets/images/user/user6.jpg"
                    width="35"
                    height="35"
                    class="rounded-circle"
                    alt="user"
                  />
                  <input
                    type="text"
                    class="input-comment d-block w-100 text-black fs-14"
                    placeholder="Post your comment"
                  />
                  <button
                    type="button"
                    class="bg-transparent p-0 border-0 transition"
                  >
                    <i class="ph ph-smiley"></i>
                  </button>
                </div>
                <div class="buttons-list">
                  <button
                    type="button"
                    class="border-0 d-inline-block position-relative text-center transition"
                  >
                    <i class="flaticon-gallery-1"></i>
                  </button>
                  <button
                    type="button"
                    class="border-0 d-inline-block position-relative text-center transition"
                  >
                    <i class="flaticon-link-1"></i>
                  </button>
                  <button
                    type="button"
                    class="border-0 d-inline-block position-relative text-center transition active"
                  >
                    <i class="flaticon-airplane"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        class="card mb-25 border-0 rounded-0 bg-white letter-spacing social-post-card"
      >
        <div class="card-body p-0">
          <div
            class="user-info pt-15 pt-md-20 pb-15 pb-md-20 ps-15 ps-sm-20 ps-md-25 ps-lg-30 pe-15 pe-sm-20 pe-md-25 pe-lg-30 d-flex align-items-center justify-content-between"
          >
            <div class="d-flex align-items-center">
              <img
                src="../../../assets/images/user/user1.jpg"
                class="rounded-circle"
                width="50"
                height="50"
                alt="user"
              />
              <div class="ms-12">
                <span
                  class="d-block fs-md-15 fs-lg-16 text-black fw-medium mb-1"
                >
                  Victor James
                </span>
                <span class="d-block text-muted">5 days ago</span>
              </div>
            </div>
            <div class="dropdown">
              <button
                class="dropdown-toggle card-dot-btn lh-1 position-relative top-4 bg-transparent border-0 shadow-none p-0 transition"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="flaticon-dots"></i>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="javascript:void(0);"
                    ><i
                      class="flaticon-view lh-1 me-8 position-relative top-1"
                    ></i>
                    View</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="javascript:void(0);"
                    ><i
                      class="flaticon-pen lh-1 me-8 position-relative top-1"
                    ></i>
                    Edit</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="javascript:void(0);"
                    ><i
                      class="flaticon-delete lh-1 me-8 position-relative top-1"
                    ></i>
                    Delete</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div
            class="pt-15 pt-md-20 pb-15 pb-md-20 ps-15 ps-sm-20 ps-md-25 ps-lg-30 pe-15 pe-sm-20 pe-md-25 pe-lg-30"
          >
            <p class="text-paragraph fs-md-15 fs-lg-16 lh-base">
              We’re fully committed to making this the most accessible and
              results-driven AI course on the planet. This requires us to be
              there when you need our help. That’s why we’ve put together a team
              of professional Data Scientists to support you in your journey,
              meaning you’ll get a response from us within 48 hours maximum.
            </p>
            <div
              class="post-info d-md-flex align-items-center justify-content-between"
            >
              <ul class="ps-0 list-unstyled mb-0">
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent text-black fw-medium border-0 position-relative d-inline-block"
                  >
                    <i class="flaticon-like"></i> 1204
                    <span class="text-muted fw-normal">Like</span>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent text-black fw-medium border-0 position-relative d-inline-block"
                  >
                    <i class="flaticon-chat-1"></i> 12
                    <span class="text-muted fw-normal">Comments</span>
                  </button>
                </li>
                <li class="d-inline-block">
                  <button
                    type="button"
                    class="bg-transparent text-black fw-medium border-0 position-relative d-inline-block"
                  >
                    <i class="flaticon-share"></i> 1
                    <span class="text-muted fw-normal">Share</span>
                  </button>
                </li>
              </ul>
              <span
                class="views d-block lh-1 fw-medium text-muted position-relative"
                ><i class="flaticon-view"></i> 122K Views</span
              >
            </div>
            <form>
              <div class="write-your-comment position-relative">
                <div class="write-comment position-relative">
                  <img
                    src="../../../assets/images/user/user6.jpg"
                    width="35"
                    height="35"
                    class="rounded-circle"
                    alt="user"
                  />
                  <input
                    type="text"
                    class="input-comment d-block w-100 text-black fs-14"
                    placeholder="Post your comment"
                  />
                  <button
                    type="button"
                    class="bg-transparent p-0 border-0 transition"
                  >
                    <i class="ph ph-smiley"></i>
                  </button>
                </div>
                <div class="buttons-list">
                  <button
                    type="button"
                    class="border-0 d-inline-block position-relative text-center transition"
                  >
                    <i class="flaticon-gallery-1"></i>
                  </button>
                  <button
                    type="button"
                    class="border-0 d-inline-block position-relative text-center transition"
                  >
                    <i class="flaticon-link-1"></i>
                  </button>
                  <button
                    type="button"
                    class="border-0 d-inline-block position-relative text-center transition active"
                  >
                    <i class="flaticon-airplane"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-5 col-xxxl-4">
      <SideBar />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "../SideBar.vue";

export default defineComponent({
  name: "TimelineContent",
  components: {
    SideBar,
  },
});
</script>