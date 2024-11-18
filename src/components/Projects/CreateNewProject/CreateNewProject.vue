<template>
  <div class="card mb-25 border-0 rounded-0 bg-white create-new-project-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <form>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Project Title
              </label>
              <input
                type="text"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="e.g. AI Machine Learning"
              />
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Project Description
              </label>
              <div class="mb-0">
                <QuillEditor
                  theme="snow"
                  placeholder="Write your meta description"
                  toolbar="full"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Clients
              </label>
              <input
                type="text"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="Solit IT Solution"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">Budget</label>
              <div class="input-group">
                <span
                  class="input-group-text rounded-0 fs-14 fw-bold text-primary"
                >
                  $
                </span>
                <input
                  type="text"
                  class="form-control shadow-none rounded-0 text-black"
                  placeholder="e.g. $ 1,200.00"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Project Starting Date
              </label>
              <div class="input-group">
                <span class="input-group-text rounded-0 fs-14 text-muted">
                  <i class="flaticon-calendar lh-1 position-relative top-1"></i>
                </span>
                <input
                  type="date"
                  class="form-control shadow-none rounded-0 text-black"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Project Deadline
              </label>
              <div class="input-group">
                <span class="input-group-text rounded-0 fs-14 text-muted">
                  <i class="flaticon-calendar lh-1 position-relative top-1"></i>
                </span>
                <input
                  type="date"
                  class="form-control shadow-none rounded-0 text-black"
                />
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Add Team Members
              </label>
              <select class="form-select shadow-none fw-semibold rounded-0">
                <option selected>Victor James</option>
                <option value="1">James Andy</option>
                <option value="2">Alina Smith</option>
                <option value="3">David Warner</option>
                <option value="4">Adam Smith</option>
                <option value="5">Jonathon Ronan</option>
              </select>
              <div class="members-list">
                <div
                  class="d-inline-block bg-gray rounded-1 fs-12 fw-medium text-primary p-5"
                >
                  <img
                    src="../../../assets/images/user/user7.jpg"
                    width="25"
                    height="25"
                    class="rounded-circle me-5"
                    alt="user"
                  />
                  Adam Smith
                  <button
                    type="button"
                    class="bg-transparent p-0 border-0 lh-1 transition"
                  >
                    <i class="flaticon-close"></i>
                  </button>
                </div>
                <div
                  class="d-inline-block bg-gray rounded-1 fs-12 fw-medium text-primary p-5"
                >
                  <img
                    src="../../../assets/images/user/user9.jpg"
                    width="25"
                    height="25"
                    class="rounded-circle me-5"
                    alt="user"
                  />
                  Victor James
                  <button
                    type="button"
                    class="bg-transparent p-0 border-0 lh-1 transition"
                  >
                    <i class="flaticon-close"></i>
                  </button>
                </div>
                <div
                  class="d-inline-block bg-gray rounded-1 fs-12 fw-medium text-primary p-5"
                >
                  <img
                    src="../../../assets/images/user/user2.jpg"
                    width="25"
                    height="25"
                    class="rounded-circle me-5"
                    alt="user"
                  />
                  Alina Smith
                  <button
                    type="button"
                    class="bg-transparent p-0 border-0 lh-1 transition"
                  >
                    <i class="flaticon-close"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Project Preview Image
              </label>
              <ImageUpload />
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Attached Files
              </label>
              <div class="file-upload text-center position-relative">
                <img
                  src="../../../assets/images/icon/cloud.png"
                  class="mb-10"
                  alt="cloud"
                />
                <span class="d-block text-muted">
                  Drop Files Here Or
                  <span class="text-black fw-medium position-relative">
                    Click To Upload
                  </span>
                </span>
                <input
                  type="file"
                  class="d-block shadow-none border-0 position-absolute start-0 end-0 top-0 bottom-0 z-1 opacity-0"
                />
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <button
              class="default-btn transition border-0 fw-medium text-white pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16 bg-success"
              type="submit"
            >
              Create Project
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BlotFormatter from "quill-blot-formatter";
import ImageUploader from "quill-image-uploader";
import axios from "axios";

import ImageUpload from "./ImageUpload.vue";

export default defineComponent({
  name: "CreateNewProject",
  components: {
    ImageUpload,
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