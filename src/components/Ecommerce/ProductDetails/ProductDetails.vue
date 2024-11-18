<template>
  <div
    class="card mb-25 border-0 rounded-0 bg-white letter-spacing product-details-box"
  >
    <div class="card-body">
      <div class="row align-items-center">
        <div class="col-lg-5 col-md-9">
          <swiper
            :slidesPerView="1"
            :loop="true"
            :autoplay="{
              delay: 4000,
              disableOnInteraction: true,
            }"
            :spaceBetween="10"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="[Thumbs]"
            class="productDetailsSwiper"
          >
            <swiper-slide v-for="product in products" :key="product.id">
              <img :src="product.image" alt="product-details" />
            </swiper-slide>
          </swiper>
        </div>
        <div class="col-lg-2 col-md-3">
          <swiper
            :direction="'vertical'"
            :loop="true"
            :autoplay="{
              delay: 4000,
              disableOnInteraction: false,
            }"
            :spaceBetween="25"
            :slidesPerView="4"
            :freeMode="true"
            :watchSlidesProgress="true"
            :breakpoints="{
              0: {
                direction: 'horizontal',
                spaceBetween: 15,
              },
              768: {
                direction: 'vertical',
                spaceBetween: 25,
              },
            }"
            :modules="[Thumbs]"
            @swiper="setThumbsSwiper"
            class="productDetailsThumbSwiper"
          >
            <swiper-slide v-for="product in products" :key="product.id">
              <img :src="product.image" alt="product-details" />
            </swiper-slide>
          </swiper>
        </div>
        <div class="col-lg-5 col-md-12">
          <div class="product-details-content">
            <h3 class="text-black fw-semibold">
              Complete Smart Watch With Multifuction <br />
              Black Dial
            </h3>
            <div class="reviews d-flex align-items-center">
              <div class="rating lh-1">
                <i class="flaticon-star-1"></i>
                <i class="flaticon-star-1"></i>
                <i class="flaticon-star-1"></i>
                <i class="flaticon-star-1"></i>
                <i class="flaticon-star"></i>
              </div>
              <span class="text-black fw-bold fs-13 ms-5 me-5">4.0</span>
              <span class="text-muted fw-medium fs-13">(21 Reviews)</span>
            </div>
            <div class="mt-10 mb-12 mb-md-15 price d-flex align-items-center">
              <span class="text-primary fw-bold fs-md-15 fs-lg-16">
                $3050.00
              </span>
              <!-- <span class="text-muted fs-13 fw-medium ms-5 me-8">$3250.00</span>
                                    <span class="text-success fw-medium"><span class="fw-black">60%</span> Off</span> -->
            </div>
            <p class="text-paragraph fs-md-15 fs-xxxl-16 lh-base">
              New 2023 Speedmaster Moonwatch Professional Co-Axial Master
              Chronometer 42mm Mens. Lorem consectetur ipsum dolor sit amet,
              consectetur adipising, sed do eiusmod tempor amet.
            </p>
            <ul class="info ps-0 list-unstyled">
              <li class="text-paragraph fs-md-15 fs-xxxl-16">
                <span class="text-black fw-semibold d-inline-block">MPN:</span>
                O31030425001002
              </li>
              <li class="text-paragraph fs-md-15 fs-xxxl-16">
                <span class="text-black fw-semibold d-inline-block">
                  Vendor:
                </span>
                Labila
              </li>
              <li class="text-paragraph fs-md-15 fs-xxxl-16">
                <span class="text-black fw-semibold d-inline-block">
                  Category:
                </span>
                Accessories
              </li>
              <li class="text-paragraph fs-md-15 fs-xxxl-16">
                <span class="text-black fw-semibold d-inline-block">SKU:</span>
                Aw2314
              </li>
            </ul>
            <div class="box">
              <p class="text-paragraph fs-md-15 fs-xxxl-16 lh-base">
                From only <span class="text-black fw-medium">$154.17</span> per
                month with <span class="text-black fw-medium">0%</span> finance
                options.
                <router-link
                  to="/product-details"
                  class="text-decoration-none text-black fw-medium position-relative"
                >
                  View Options
                </router-link>
                Finance is subject to application & status.
              </p>
            </div>
            <span class="d-block text-paragraph">
              <span class="text-success">
                <i
                  class="ph ph-check lh-1 fs-16 position-relative top-1 me-1"
                ></i>
                IN STOCK
              </span>
              - Order within 5 hours 31 minutes for
              <span class="text-black">free express delivery.</span>
            </span>
            <div class="buttons-list d-sm-flex align-items-center">
              <div class="input-counter d-flex align-items-center">
                <div class="number-counter me-15" id="number-counter">
                  <button type="button" @click="decrement">
                    <i class="flaticon-minus"></i>
                  </button>
                  <input type="number" :value="itemNumber" />
                  <button type="button" @click="increment">
                    <i class="flaticon-plus"></i>
                  </button>
                </div>
                <button
                  class="default-btn transition border-0 fw-medium text-white pt-10 pb-10 ps-20 pe-20 pt-md-11 pb-md-11 ps-md-25 pe-md-25 ps-xl-40 pe-xl-40 rounded-1"
                  type="submit"
                >
                  Add To Cart
                </button>
              </div>
              <button
                type="button"
                class="fav-btn mt-10 mt-sm-0 ms-sm-15 d-inline-block position-relative bg-transparent border-0 transition"
              >
                <i class="flaticon-star-3"></i>
                <span class="position-relative">Add To Favourite</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="product-details-tabs">
        <ul class="nav nav-tabs border-0 rounded-0" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link fw-semibold d-block position-relative border-0 rounded-0 active"
              id="description-tab"
              data-bs-toggle="tab"
              data-bs-target="#description-tab-pane"
              type="button"
              role="tab"
              aria-controls="description-tab-pane"
              aria-selected="true"
            >
              Description
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link fw-semibold d-block position-relative border-0 rounded-0"
              id="reviews-tab"
              data-bs-toggle="tab"
              data-bs-target="#reviews-tab-pane"
              type="button"
              role="tab"
              aria-controls="reviews-tab-pane"
              aria-selected="false"
            >
              Reviews
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="description-tab-pane"
            role="tabpanel"
            tabindex="0"
          >
            <div class="row">
              <div class="col-lg-8">
                <div class="content">
                  <p class="text-paragraph fs-md-15 fs-xxxl-16">
                    New 2023 Speedmaster Moonwatch Professional Co-Axial Master
                    Chronometer 42mm Mens. Lorem ipsum dolor sit amet,
                    consectetur adipising, sed do eiusmod tempor.
                  </p>
                  <p class="text-paragraph fs-md-15 fs-xxxl-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <ul class="ps-0 list-unstyled">
                    <li
                      class="text-black fs-md-15 fs-xxxl-16 position-relative"
                    >
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium.
                    </li>
                    <li
                      class="text-black fs-md-15 fs-xxxl-16 position-relative"
                    >
                      Doloremque laudantium, totam rem aperiam, eaque ipsa quae
                      ab illo toterum pitael accustision.
                    </li>
                  </ul>
                  <p class="text-paragraph fs-md-15 fs-xxxl-16">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt.
                  </p>
                  <p class="text-paragraph fs-md-15 fs-xxxl-16">
                    Ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                  </p>
                  <p class="text-paragraph fs-md-15 fs-xxxl-16">
                    New 2023 Speedmaster Moonwatch Professional Co-Axial Master
                    Chronometer 42mm Mens. Lorem ipsum dolor sit amet,
                    consectetur adipising, sed do eiusmod tempor.
                  </p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card mb-0 border-0 rounded-0 campaign-contact-box">
                  <div class="card-body letter-spacing position-relative">
                    <h2 class="fw-medium text-white mb-0">
                      Enhance Your
                      <strong class="fw-black">Campaign</strong> For Better
                      Outreach
                      <a
                        href="#"
                        class="text-white text-decoration-none lh-1 position-relative ms-5 top-3"
                        ><i class="flaticon-right-arrow-1"></i
                      ></a>
                    </h2>
                    <img
                      src="../../../assets/images/contact.png"
                      alt="contact-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="reviews-tab-pane"
            role="tabpanel"
            tabindex="0"
          >
            <div class="product-reviews">
              <h3 class="text-black mb-5 fw-bold">4.8</h3>
              <span class="d-block fs-md-15 fs-lg-16 fw-medium mb-8"
                >Overall Rating</span
              >
              <div class="reviews d-flex align-items-center">
                <div class="rating lh-1">
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star-1"></i>
                  <i class="flaticon-star"></i>
                </div>
                <span class="text-black fw-bold fs-13 ms-5 me-5">4.0</span>
                <span class="text-muted fw-medium fs-13">(21 Reviews)</span>
              </div>
              <div class="rating-count">
                <div
                  class="mt-15 mb-5 d-flex justify-content-between align-items-center"
                >
                  <span class="fw-medium text-black">5 Star</span>
                  <span class="fw-medium text-black">112</span>
                </div>
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 80%"></div>
                </div>
                <div
                  class="mt-15 mb-5 d-flex justify-content-between align-items-center"
                >
                  <span class="fw-medium text-black">4 Star</span>
                  <span class="fw-medium text-black">43</span>
                </div>
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 60%"></div>
                </div>
                <div
                  class="mt-15 mb-5 d-flex justify-content-between align-items-center"
                >
                  <span class="fw-medium text-black">3 Star</span>
                  <span class="fw-medium text-black">43</span>
                </div>
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="45"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 45%"></div>
                </div>
                <div
                  class="mt-15 mb-5 d-flex justify-content-between align-items-center"
                >
                  <span class="fw-medium text-black">2 Star</span>
                  <span class="fw-medium text-black">10</span>
                </div>
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 30%"></div>
                </div>
                <div
                  class="mt-15 mb-5 d-flex justify-content-between align-items-center"
                >
                  <span class="fw-medium text-black">1 Star</span>
                  <span class="fw-medium text-black">0</span>
                </div>
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style="width: 0%"></div>
                </div>
              </div>
              <div class="row reviews-list">
                <div class="col-lg-4 mb-25">
                  <div class="p-15 p-sm-20 p-md-25 rounded-1 bg-gray">
                    <div class="rating mb-8">
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                    </div>
                    <p class="text-paragraph lh-base fs-md-15 fs-lg-16 mb-0">
                      Lorem consectetur ipsum dolor sit amet, consectetur
                      adipising, sed do eiusmod tempor amet.
                    </p>
                    <div class="mt-15 d-flex align-items-center">
                      <img
                        src="../../../assets/images/user/user1.jpg"
                        alt="user"
                        class="rounded-circle me-12"
                        width="30"
                      />
                      <span class="fs-md-15 d-block text-black fw-medium">
                        Alvarado Turner
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 mb-25">
                  <div class="p-15 p-sm-20 p-md-25 rounded-1 bg-gray">
                    <div class="rating mb-8">
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star"></i>
                    </div>
                    <p class="text-paragraph lh-base fs-md-15 fs-lg-16 mb-0">
                      Lorem consectetur ipsum dolor sit amet, consectetur
                      adipising, sed do eiusmod tempor amet.
                    </p>
                    <div class="mt-15 d-flex align-items-center">
                      <img
                        src="../../../assets/images/user/user2.jpg"
                        alt="user"
                        class="rounded-circle me-12"
                        width="30"
                      />
                      <span class="fs-md-15 d-block text-black fw-medium">
                        Alina Smith
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 mb-25">
                  <div class="p-15 p-sm-20 p-md-25 rounded-1 bg-gray">
                    <div class="rating mb-8">
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-2"></i>
                    </div>
                    <p class="text-paragraph lh-base fs-md-15 fs-lg-16 mb-0">
                      Lorem consectetur ipsum dolor sit amet, consectetur
                      adipising, sed do eiusmod tempor amet.
                    </p>
                    <div class="mt-15 d-flex align-items-center">
                      <img
                        src="../../../assets/images/user/user3.jpg"
                        alt="user"
                        class="rounded-circle me-12"
                        width="30"
                      />
                      <span class="fs-md-15 d-block text-black fw-medium">
                        James Smith
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 mb-25">
                  <div class="p-15 p-sm-20 p-md-25 rounded-1 bg-gray">
                    <div class="rating mb-8">
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                    </div>
                    <p class="text-paragraph lh-base fs-md-15 fs-lg-16 mb-0">
                      Lorem consectetur ipsum dolor sit amet, consectetur
                      adipising, sed do eiusmod tempor amet.
                    </p>
                    <div class="mt-15 d-flex align-items-center">
                      <img
                        src="../../../assets/images/user/user4.jpg"
                        alt="user"
                        class="rounded-circle me-12"
                        width="30"
                      />
                      <span class="fs-md-15 d-block text-black fw-medium">
                        Sarah Taylor
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 mb-25">
                  <div class="p-15 p-sm-20 p-md-25 rounded-1 bg-gray">
                    <div class="rating mb-8">
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                    </div>
                    <p class="text-paragraph lh-base fs-md-15 fs-lg-16 mb-0">
                      Lorem consectetur ipsum dolor sit amet, consectetur
                      adipising, sed do eiusmod tempor amet.
                    </p>
                    <div class="mt-15 d-flex align-items-center">
                      <img
                        src="../../../assets/images/user/user5.jpg"
                        alt="user"
                        class="rounded-circle me-12"
                        width="30"
                      />
                      <span class="fs-md-15 d-block text-black fw-medium">
                        Ivan Dan
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 mb-25">
                  <div class="p-15 p-sm-20 p-md-25 rounded-1 bg-gray">
                    <div class="rating mb-8">
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-1"></i>
                      <i class="flaticon-star-2"></i>
                      <i class="flaticon-star"></i>
                    </div>
                    <p class="text-paragraph lh-base fs-md-15 fs-lg-16 mb-0">
                      Lorem consectetur ipsum dolor sit amet, consectetur
                      adipising, sed do eiusmod tempor amet.
                    </p>
                    <div class="mt-15 d-flex align-items-center">
                      <img
                        src="../../../assets/images/user/user6.jpg"
                        alt="user"
                        class="rounded-circle me-12"
                        width="30"
                      />
                      <span class="fs-md-15 d-block text-black fw-medium">
                        Riley Dave
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Thumbs } from "swiper/modules";

import "swiper/css/free-mode";
import "swiper/css/thumbs";

export default defineComponent({
  name: "ProductDetails",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          image: require("../../../assets/images/products/product-details1.jpg"),
        },
        {
          id: 2,
          image: require("../../../assets/images/products/product-details2.jpg"),
        },
        {
          id: 3,
          image: require("../../../assets/images/products/product-details3.jpg"),
        },
        {
          id: 4,
          image: require("../../../assets/images/products/product-details4.jpg"),
        },
      ],
      itemNumber: 1,
    };
  },
  setup() {
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper: null) => {
      thumbsSwiper.value = swiper;
    };
    return {
      Autoplay,
      Thumbs,
      thumbsSwiper,
      setThumbsSwiper,
    };
  },
  methods: {
    increment() {
      if (this.itemNumber < 10) {
        this.itemNumber++;
      }
    },
    decrement() {
      if (this.itemNumber > 1) {
        this.itemNumber--;
      }
    },
  },
});
</script>