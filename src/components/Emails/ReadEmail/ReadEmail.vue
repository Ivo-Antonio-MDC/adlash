<template>
  <div class="row">
    <div class="col-lg-4 col-xxl-3">
      <div
        class="card mb-25 border-0 rounded-0 bg-white box-shadow emails-sidebar-box"
      >
        <div class="card-body p-15 p-sm-20 p-md-25 letter-spacing">
          <form class="search-box position-relative mb-15">
            <input
              type="text"
              class="form-control shadow-none text-black rounded-0 border-0"
              placeholder="Search email"
            />
            <button
              type="submit"
              class="bg-transparent text-primary transition p-0 border-0"
            >
              <i class="flaticon-search-interface-symbol"></i>
            </button>
          </form>
          <button
            type="button"
            class="d-block text-center w-100 bg-primary border-0 box-shadow fw-medium text-white rounded-1 pt-12 pb-12 ps-25 pe-25"
            @click="toggleComposeEmailClass"
          >
            Compose Email
          </button>
          <span
            class="sub-title text-uppercase mt-20 mt-md-30 mb-15 mb-md-20 fw-medium fs-13 text-muted d-block"
          >
            MailBox
          </span>
          <ul class="list ps-0 mb-0 list-unstyled">
            <li>
              <router-link
                to="/emails"
                class="d-block text-decoration-none lh-1 transition active"
              >
                <div class="title fs-md-15 fs-lg-16 fw-medium text-black">
                  <i class="flaticon-envelope"></i>
                  Inbox
                </div>
                <span
                  class="rounded-circle dot-badge bg-danger text-white d-inline-block text-center fs-12 fw-semibold"
                >
                  12
                </span>
              </router-link>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                class="d-block text-decoration-none lh-1 transition"
              >
                <div class="title fs-md-15 fs-lg-16 fw-medium text-black">
                  <i class="flaticon-snooze"></i>
                  Snoozed
                </div>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                class="d-block text-decoration-none lh-1 transition"
              >
                <div class="title fs-md-15 fs-lg-16 fw-medium text-black">
                  <i class="flaticon-draft"></i>
                  Draft
                </div>
                <span
                  class="rounded-circle dot-badge bg-success text-white d-inline-block text-center fs-12 fw-semibold"
                >
                  2
                </span>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                class="d-block text-decoration-none lh-1 transition"
              >
                <div class="title fs-md-15 fs-lg-16 fw-medium text-black">
                  <i class="flaticon-status"></i>
                  Sent Email
                </div>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                class="d-block text-decoration-none lh-1 transition"
              >
                <div class="title fs-md-15 fs-lg-16 fw-medium text-black">
                  <i class="flaticon-delete"></i>
                  Trash
                </div>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                class="d-block text-decoration-none lh-1 transition"
              >
                <div class="title fs-md-15 fs-lg-16 fw-medium text-black">
                  <i class="flaticon-spam"></i>
                  Spam
                </div>
                <span
                  class="rounded-circle dot-badge bg-warning text-white d-inline-block text-center fs-12 fw-semibold"
                >
                  4
                </span>
              </a>
            </li>
          </ul>
          <span
            class="sub-title text-uppercase mt-20 mt-md-30 mb-15 mb-md-20 fw-medium fs-13 text-muted d-block"
          >
            Filters
          </span>
          <ul class="list ps-0 mb-0 list-unstyled">
            <li>
              <a
                href="javascript:void(0);"
                class="d-block text-decoration-none lh-1 transition"
              >
                <div class="title fs-md-15 fs-lg-16 fw-medium text-black">
                  <i class="flaticon-star-3"></i>
                  Starred
                </div>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                class="d-block text-decoration-none lh-1 transition"
              >
                <div class="title fs-md-15 fs-lg-16 fw-medium text-black">
                  <i class="flaticon-pin-1"></i>
                  Important
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-lg-8 col-xxl-9">
      <div
        class="card mb-25 border-0 rounded-0 bg-white box-shadow letter-spacing read-email-box"
      >
        <div
          class="card-head border-bottom d-flex align-items-center bg-white p-15 p-sm-20 p-md-25"
        >
          <router-link to="/emails" class="link-btn lh-1 text-decoration-none">
            <i class="ph ph-caret-left"></i>
          </router-link>
          <h5 class="mb-0 text-black fw-bold">
            Our visual design can lead you
          </h5>
        </div>
        <div class="card-body p-15 p-sm-20 p-md-25">
          <div class="email-info d-md-flex justify-content-between">
            <div class="d-flex align-items-center">
              <img
                src="../../../assets/images/user/user5.jpg"
                width="45"
                height="45"
                class="rounded-circle"
                alt="user"
              />
              <div class="title ms-10">
                <span class="d-block mb-5 fs-16 fw-medium text-black">
                  Jenny Anderson
                  <span
                    class="ms-5 text-muted fw-normal fs-14 position-relative"
                  >
                    <i class="ph ph-caret-left lh-1"></i>
                    jenny364@gmail.com
                    <i class="ph ph-caret-right lh-1"></i>
                  </span>
                </span>
                <div class="d-flex align-items-center">
                  <div class="info position-relative">
                    <span class="d-block text-muted fs-13">To: me</span>
                    <div class="dropdown">
                      <button
                        class="dropdown-toggle card-dot-btn lh-1 bg-transparent border-0 shadow-none p-0 transition"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="flaticon-chevron-2"></i>
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a
                            class="dropdown-item fw-normal d-flex align-items-center"
                            href="javascript:void(0);"
                          >
                            <i class="flaticon-view lh-1 me-8"></i> View
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item fw-normal d-flex align-items-center"
                            href="javascript:void(0);"
                          >
                            <i class="flaticon-pen lh-1 me-8"></i>
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item fw-normal d-flex align-items-center"
                            href="javascript:void(0);"
                          >
                            <i class="flaticon-delete lh-1 me-8"></i>
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <span class="d-block text-black fs-13 ms-20"
                    >20th Mar, 10:30 AM</span
                  >
                </div>
              </div>
            </div>
            <ul
              class="info-list mt-15 mt-md-0 mb-0 list-unstyled position-relative top-3 me-10"
            >
              <li class="d-inline-block">
                <button
                  type="button"
                  class="bg-transparent border-0 p-0 text-paragraph lh-1"
                >
                  <i class="flaticon-printer"></i>
                </button>
              </li>
              <li class="d-inline-block">
                <button
                  type="button"
                  class="bg-transparent border-0 p-0 text-paragraph lh-1"
                >
                  <i class="flaticon-copy"></i>
                </button>
              </li>
              <li class="d-inline-block">
                <button
                  type="button"
                  class="bg-transparent border-0 p-0 text-paragraph lh-1"
                >
                  <i class="flaticon-delete"></i>
                </button>
              </li>
              <li class="d-inline-block">
                <button
                  type="button"
                  class="bg-transparent border-0 p-0 text-paragraph lh-1"
                >
                  <i class="flaticon-star-3"></i>
                </button>
              </li>
              <li class="d-inline-block">
                <button
                  type="button"
                  class="bg-transparent border-0 p-0 text-paragraph lh-1"
                >
                  <i class="flaticon-price-tag-1"></i>
                </button>
              </li>
            </ul>
          </div>
          <div class="email-details">
            <h6 class="text-black fw-medium d-block">Hello Victor!</h6>
            <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              Last pic over my village – Yeah i'd like that! Do you remember the
              video som..
            </p>
            <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim.
              Quisque arcu leo, facilisis in fringilla id, luctus in tortor.
              Nunc vestibulum est quis orci varius viverra. Curabitur dictum
              volutpat massa vulputate molestie. In at felis ac velit maximus
              convallis.
            </p>
            <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              Sed elementum turpis eu lorem interdum, sed porttitor eros
              commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in
              dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus
              fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia
              lacus, vel tincidunt mi nibh sit amet lorem.
            </p>
            <h6 class="text-black fw-medium d-block">Checklists/Sub-tasks</h6>
            <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              1. Your design preferences (Color, style, shapes, Fonts, others)
              <br />
              2. Tell me, why is your item different?
              <br />
              3. Do you want to bring up a specific feature of your item? If
              yes, please tell me
              <br />
              4. Do you have any preference or specific thing you would like to
              change or improve on your item page?
              <br />
              5. Please provide me with the copy or text to display
            </p>
            <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
              Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim.
              Quisque arcu leo, facilisis in fringilla id, luctus in tortor.
              Nunc vestibulum est quis orci varius viverra. Curabitur dictum
              volutpat massa vulputate molestie. In at felis ac velit maximus
              convallis.
            </p>
            <span class="d-block fs-md-15 fs-lg-16 text-paragraph mb-1"
              >Regards</span
            >
            <span class="d-block fs-md-15 fs-lg-16 text-black"
              >Jenny Anderson</span
            >
          </div>
          <div class="email-buttons">
            <button
              class="default-btn transition border-0 fw-medium text-white pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16"
              data-bs-dismiss="modal"
              aria-label="Close"
              type="button"
            >
              Reply
            </button>
            <button
              class="default-btn transition border-0 fw-medium text-white pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16 bg-success"
              data-bs-dismiss="modal"
              aria-label="Close"
              type="button"
            >
              Forward
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    :class="['compose-email-modal', { active: isSidebarActive }]"
    id="compose-email-modal"
  >
    <div class="compose-email-modal-dialog">
      <div
        class="compose-email-modal-header d-flex align-items-center justify-content-between p-15 ps-sm-20 p-md-25"
      >
        <h5 class="mb-0 text-black fw-bold">New Message</h5>
        <button
          class="close-btn bg-transparent border-0 p-0"
          type="button"
          @click="toggleComposeEmailClass"
        >
          <i class="flaticon-close"></i>
        </button>
      </div>
      <div class="compose-email-modal-body p-15 ps-sm-20 p-md-25">
        <form>
          <div class="form-group mb-15 mb-md-25">
            <label class="d-block text-black fw-semibold mb-10">To</label>
            <input
              type="email"
              class="form-control shadow-none rounded-0 text-black"
              placeholder="e.g. johny12345@gmail.com"
            />
          </div>
          <div class="form-group mb-15 mb-md-25">
            <label class="d-block text-black fw-semibold mb-10">Subject</label>
            <input
              type="text"
              class="form-control shadow-none rounded-0 text-black"
              placeholder="e.g. Our visual design can lead you"
            />
          </div>
          <div class="form-group mb-15 mb-md-25">
            <label class="d-block text-black fw-semibold mb-10">
              Write Message
            </label>
            <QuillEditor
              theme="snow"
              placeholder="Write your message here"
              toolbar="full"
            />
          </div>
          <button
            class="default-btn transition border-0 fw-medium text-white pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16"
            type="submit"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BlotFormatter from "quill-blot-formatter";
import ImageUploader from "quill-image-uploader";
import axios from "axios";

export default defineComponent({
  name: "ReadEmail",
  data() {
    return {
      isSidebarActive: false,
    };
  },
  methods: {
    toggleComposeEmailClass() {
      this.isSidebarActive = !this.isSidebarActive;
    },
  },
  setup: () => {
    const modules = {
      module: BlotFormatter,
      ImageUploader,
      options: {
        upload: (file: string | Blob) => {
          return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("image", file);

            axios
              .post("/upload-image", formData)
              .then((res: { data: { url: unknown } }) => {
                console.log(res);
                resolve(res.data.url);
              })
              .catch((err: unknown) => {
                reject("Upload failed");
                console.error("Error:", err);
              });
          });
        },
      },
    };
    return { modules };
  },
});
</script>