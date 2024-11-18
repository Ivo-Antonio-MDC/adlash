<template>
  <div class="card mb-25 border-0 rounded-0 bg-white edit-course-card">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <form>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Course Title
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
                Course Description
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
                Select Category
              </label>
              <select class="form-select shadow-none fw-semibold rounded-0">
                <option selected>Artificial Inteligence (AI)</option>
                <option value="1">Web Development</option>
                <option value="2">Entrepreneurship</option>
                <option value="3">Management</option>
                <option value="4">Business Strategy</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">Price</label>
              <div class="input-group">
                <span
                  class="input-group-text rounded-0 fs-14 fw-bold text-primary"
                >
                  $
                </span>
                <input
                  type="text"
                  class="form-control shadow-none rounded-0 text-black"
                  placeholder="e.g. 120.00"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Discount
              </label>
              <div class="input-group">
                <span
                  class="input-group-text rounded-0 fs-14 fw-bold text-primary"
                >
                  %
                </span>
                <input
                  type="text"
                  class="form-control shadow-none rounded-0 text-black"
                  placeholder="e.g. 15"
                />
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Select Tags
              </label>
              <input
                type="text"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="e.g. AI"
              />
              <div class="members-list">
                <div
                  class="d-inline-block bg-gray rounded-1 fs-12 fw-medium text-primary p-5"
                >
                  Machine Learning
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
                  App Dev
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
                  Design
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
                Course Preview Image
              </label>
              <ImageUpload />
            </div>
          </div>
          <div class="col-md-12">
            <h5 class="fw-bold text-black mb-12 mb-md-15 mb-lg-20">
              Course Sections
            </h5>
            <div
              class="accordion mb-15 mb-sm-20 mb-md-25 mb-lg-30"
              id="tableOfContentAccordion"
            >
              <div class="accordion-item border-0">
                <button
                  class="accordion-button d-block w-100 text-start text-black fs-14 fs-md-15 fs-lg-16 fw-medium rounded-0 bg-white border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#TableContentCollapseOne"
                  aria-expanded="true"
                  aria-controls="TableContentCollapseOne"
                >
                  <div
                    class="d-sm-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div
                        class="number bg-primary text-center text-white rounded-circle fs-13 fw-semibold"
                      >
                        1
                      </div>
                      Welcome to the course!
                    </div>
                    <ul
                      class="d-flex align-items-center mt-10 mt-sm-0 ps-0 mb-0 list-unstyled"
                    >
                      <li class="position-relative fw-medium fs-14 text-muted">
                        <i class="flaticon-book"></i>
                        5 lectures
                      </li>
                      <li class="position-relative fw-medium fs-14 text-muted">
                        <i class="flaticon-clock"></i>
                        11 mins
                      </li>
                    </ul>
                  </div>
                </button>
                <div
                  id="TableContentCollapseOne"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#tableOfContentAccordion"
                >
                  <div class="accordion-body">
                    <ul class="ps-0 mb-0 list-unstyled">
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Welcome Challenge!
                        </router-link>
                        <span class="text-muted fw-medium">01:22</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Why AI?
                        </router-link>
                        <span class="text-muted fw-medium">05:10</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Course Structure
                        </router-link>
                        <span class="text-muted fw-medium">00:46</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Installing Anaconda
                        </router-link>
                        <span class="text-muted fw-medium">03:26</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Use ChatGPT to Build AI More Efficiently
                        </router-link>
                        <span class="text-muted fw-medium">00:23</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item border-0">
                <button
                  class="accordion-button collapsed d-block w-100 text-start text-black fs-14 fs-md-15 fs-lg-16 fw-medium rounded-0 bg-white border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#TableContentCollapseTwo"
                  aria-expanded="true"
                  aria-controls="TableContentCollapseTwo"
                >
                  <div
                    class="d-sm-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div
                        class="number bg-primary text-center text-white rounded-circle fs-13 fw-semibold"
                      >
                        2
                      </div>
                      Python Setup
                    </div>
                    <ul
                      class="d-flex align-items-center mt-10 mt-sm-0 ps-0 mb-0 list-unstyled"
                    >
                      <li class="position-relative fw-medium fs-14 text-muted">
                        <i class="flaticon-book"></i>
                        6 lectures
                      </li>
                      <li class="position-relative fw-medium fs-14 text-muted">
                        <i class="flaticon-clock"></i>
                        12 mins
                      </li>
                    </ul>
                  </div>
                </button>
                <div
                  id="TableContentCollapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#tableOfContentAccordion"
                >
                  <div class="accordion-body">
                    <ul class="ps-0 mb-0 list-unstyled">
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Welcome Challenge!
                        </router-link>
                        <span class="text-muted fw-medium">01:22</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Why AI?
                        </router-link>
                        <span class="text-muted fw-medium">05:10</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Course Structure
                        </router-link>
                        <span class="text-muted fw-medium">00:46</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Installing Anaconda
                        </router-link>
                        <span class="text-muted fw-medium">03:26</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Use ChatGPT to Build AI More Efficiently
                        </router-link>
                        <span class="text-muted fw-medium">00:23</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item border-0">
                <button
                  class="accordion-button collapsed d-block w-100 text-start text-black fs-14 fs-md-15 fs-lg-16 fw-medium rounded-0 bg-white border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#TableContentCollapseThree"
                  aria-expanded="true"
                  aria-controls="TableContentCollapseThree"
                >
                  <div
                    class="d-sm-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div
                        class="number bg-primary text-center text-white rounded-circle fs-13 fw-semibold"
                      >
                        3
                      </div>
                      Python Objects & Data Structures Basics
                    </div>
                    <ul
                      class="d-flex align-items-center mt-10 mt-sm-0 ps-0 mb-0 list-unstyled"
                    >
                      <li class="position-relative fw-medium fs-14 text-muted">
                        <i class="flaticon-book"></i>
                        8 lectures
                      </li>
                      <li class="position-relative fw-medium fs-14 text-muted">
                        <i class="flaticon-clock"></i>
                        43 mins
                      </li>
                    </ul>
                  </div>
                </button>
                <div
                  id="TableContentCollapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#tableOfContentAccordion"
                >
                  <div class="accordion-body">
                    <ul class="ps-0 mb-0 list-unstyled">
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Welcome Challenge!
                        </router-link>
                        <span class="text-muted fw-medium">01:22</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Why AI?
                        </router-link>
                        <span class="text-muted fw-medium">05:10</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Course Structure
                        </router-link>
                        <span class="text-muted fw-medium">00:46</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Installing Anaconda
                        </router-link>
                        <span class="text-muted fw-medium">03:26</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Use ChatGPT to Build AI More Efficiently
                        </router-link>
                        <span class="text-muted fw-medium">00:23</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item border-0">
                <button
                  class="accordion-button collapsed d-block w-100 text-start text-black fs-14 fs-md-15 fs-lg-16 fw-medium rounded-0 bg-white border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#TableContentCollapseFour"
                  aria-expanded="true"
                  aria-controls="TableContentCollapseFour"
                >
                  <div
                    class="d-sm-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div
                        class="number bg-primary text-center text-white rounded-circle fs-13 fw-semibold"
                      >
                        4
                      </div>
                      Python Comparison Operators
                    </div>
                    <ul
                      class="d-flex align-items-center mt-10 mt-sm-0 ps-0 mb-0 list-unstyled"
                    >
                      <li class="position-relative fw-medium fs-14 text-muted">
                        <i class="flaticon-book"></i>
                        3 lectures
                      </li>
                      <li class="position-relative fw-medium fs-14 text-muted">
                        <i class="flaticon-clock"></i>
                        33 mins
                      </li>
                    </ul>
                  </div>
                </button>
                <div
                  id="TableContentCollapseFour"
                  class="accordion-collapse collapse"
                  data-bs-parent="#tableOfContentAccordion"
                >
                  <div class="accordion-body">
                    <ul class="ps-0 mb-0 list-unstyled">
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Welcome Challenge!
                        </router-link>
                        <span class="text-muted fw-medium">01:22</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Why AI?
                        </router-link>
                        <span class="text-muted fw-medium">05:10</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Course Structure
                        </router-link>
                        <span class="text-muted fw-medium">00:46</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Installing Anaconda
                        </router-link>
                        <span class="text-muted fw-medium">03:26</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Use ChatGPT to Build AI More Efficiently
                        </router-link>
                        <span class="text-muted fw-medium">00:23</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item border-0">
                <button
                  class="accordion-button collapsed d-block w-100 text-start text-black fs-14 fs-md-15 fs-lg-16 fw-medium rounded-0 bg-white border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#TableContentCollapseFive"
                  aria-expanded="true"
                  aria-controls="TableContentCollapseFive"
                >
                  <div
                    class="d-sm-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div
                        class="number bg-primary text-center text-white rounded-circle fs-13 fw-semibold"
                      >
                        5
                      </div>
                      Python Statements
                    </div>
                    <ul
                      class="d-flex align-items-center mt-10 mt-sm-0 ps-0 mb-0 list-unstyled"
                    >
                      <li class="position-relative fw-medium fs-14 text-muted">
                        <i class="flaticon-book"></i>
                        10 lectures
                      </li>
                      <li class="position-relative fw-medium fs-14 text-muted">
                        <i class="flaticon-clock"></i>
                        1 hour
                      </li>
                    </ul>
                  </div>
                </button>
                <div
                  id="TableContentCollapseFive"
                  class="accordion-collapse collapse"
                  data-bs-parent="#tableOfContentAccordion"
                >
                  <div class="accordion-body">
                    <ul class="ps-0 mb-0 list-unstyled">
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Welcome Challenge!
                        </router-link>
                        <span class="text-muted fw-medium">01:22</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Why AI?
                        </router-link>
                        <span class="text-muted fw-medium">05:10</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Course Structure
                        </router-link>
                        <span class="text-muted fw-medium">00:46</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Installing Anaconda
                        </router-link>
                        <span class="text-muted fw-medium">03:26</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link
                          to="/lessons-preview"
                          class="fs-md-15 text-muted fw-medium text-decoration-none position-relative"
                        >
                          <i class="flaticon-play"></i>
                          Use ChatGPT to Build AI More Efficiently
                        </router-link>
                        <span class="text-muted fw-medium">00:23</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <h5 class="fw-bold text-black mb-12 mb-md-15 mb-lg-20">
              Add More Sections
            </h5>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Section Title
              </label>
              <input
                type="text"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="e.g. Introduction"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Duration
              </label>
              <input
                type="text"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="e.g. 1:25"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Sub-section Title
              </label>
              <input
                type="text"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="e.g. Introduction"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Sub-section Duration
              </label>
              <input
                type="text"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="e.g. 4:32"
              />
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">
                Upload Video Or Content
              </label>
              <div class="file-upload text-center position-relative">
                <i class="flaticon-video"></i>
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
            <div class="d-flex align-items-center justify-content-between">
              <button
                class="default-btn transition border-0 fw-medium text-white pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16 bg-success"
                type="submit"
              >
                Save Course
              </button>
              <button
                type="button"
                class="bg-transparent p-0 border-0 text-danger lh-1 fw-medium"
              >
                <i
                  class="flaticon-delete lh-1 me-1 position-relative top-2"
                ></i>
                <span class="position-relative">Delete Course</span>
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
  name: "EditCourse",
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