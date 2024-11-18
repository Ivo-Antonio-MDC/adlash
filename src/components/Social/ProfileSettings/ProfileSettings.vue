<template>
  <div class="card mb-25 border-0 rounded-0 bg-white profile-settings-card">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <form>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                First Name
              </label>
              <input
                type="text"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="e.g. Adam"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Last Name
              </label>
              <input
                type="text"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="e.g. Smith"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Email Address
              </label>
              <input
                type="email"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="e.g. adam127704@gmail.com"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Phone No
              </label>
              <input
                type="text"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="e.g. +001 321 4567"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Password
              </label>
              <input
                type="passowrd"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="e.g. **************"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Confirm Password
              </label>
              <input
                type="passowrd"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="e.g. **************"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Address
              </label>
              <input
                type="passowrd"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="add your address here"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Country
              </label>
              <select class="form-select shadow-none fw-semibold rounded-0">
                <option selected>United States</option>
                <option value="1">Canada</option>
                <option value="2">Germany</option>
                <option value="3">Switzerland</option>
                <option value="4">Australia</option>
                <option value="5">Sweden</option>
              </select>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Add Your Bio
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
          <div class="col-md-12">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Select Your Skills
              </label>
              <select class="form-select shadow-none fw-semibold rounded-0">
                <option selected>UI/UX Designer</option>
                <option value="1">Web Developer</option>
                <option value="2">Web Designer</option>
                <option value="3">Brand Designer</option>
                <option value="4">Motion Designer</option>
              </select>
              <div class="members-list">
                <div
                  class="d-inline-block bg-gray rounded-1 fs-12 fw-medium text-primary p-5"
                >
                  Designer
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
                  Brand Designer
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
                  Motion Designer
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
                Your Profession
              </label>
              <input
                type="text"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="e.g. Web Developer"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Company Name
              </label>
              <input
                type="text"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="e.g. EnvyTheme Software"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Company Website
              </label>
              <input
                type="text"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="http//website.com"
              />
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Who Will Be Able To See Your Profile?
              </label>
              <div
                class="form-check fs-md-15 fs-lg-16 text-black mb-0 d-inline-block me-15 me-md-25"
              >
                <input
                  class="form-check-input shadow-none"
                  type="radio"
                  name="communicationRadio"
                  id="onlyMeRadio"
                  checked
                />
                <label class="form-check-label" for="onlyMeRadio">
                  Only Me
                </label>
              </div>
              <div
                class="form-check fs-md-15 fs-lg-16 text-black mb-0 d-inline-block me-15 me-md-25"
              >
                <input
                  class="form-check-input shadow-none"
                  type="radio"
                  name="communicationRadio"
                  id="onlyFriendsRadio"
                />
                <label class="form-check-label" for="onlyFriendsRadio">
                  Only Friends
                </label>
              </div>
              <div
                class="form-check fs-md-15 fs-lg-16 text-black mb-0 d-inline-block me-15 me-md-25"
              >
                <input
                  class="form-check-input shadow-none"
                  type="radio"
                  name="communicationRadio"
                  id="everyoneRadio"
                />
                <label class="form-check-label" for="everyoneRadio">
                  Everyone
                </label>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Upload Your Profile Picture
              </label>

              <ImageUpload />
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Upload Cover Photo
              </label>
              <!-- <div class="file-upload text-center position-relative">
                <i class="flaticon-gallery-1"></i>
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
              </div> -->
              <ImageUpload />
            </div>
          </div>
          <div class="col-md-12">
            <div class="d-flex align-items-center justify-content-between">
              <button
                class="default-btn transition border-0 fw-medium text-white pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16 bg-success"
                type="submit"
              >
                Save Profile
              </button>
              <button
                type="button"
                class="bg-transparent p-0 border-0 text-danger lh-1 fw-medium"
              >
                <i
                  class="flaticon-delete lh-1 me-1 position-relative top-2"
                ></i>
                <span class="position-relative">Delete Profile</span>
              </button>
            </div>
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
  name: "ProfileSettings",
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