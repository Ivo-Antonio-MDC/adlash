<template>
  <div class="card mb-25 border-0 rounded-0 bg-white recent-activity-box">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <div
        class="mb-15 mb-md-20 mb-xxxl-25 d-flex align-items-center justify-content-between"
      >
        <h5 class="card-title fw-bold mb-0">Timeline - 1</h5>
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
              >
                <i class="flaticon-view lh-1 me-8 position-relative top-1"></i>
                View
              </a>
            </li>
            <li>
              <a
                class="dropdown-item d-flex align-items-center"
                href="javascript:void(0);"
              >
                <i class="flaticon-pen lh-1 me-8 position-relative top-1"></i>
                Edit
              </a>
            </li>
            <li>
              <a
                class="dropdown-item d-flex align-items-center"
                href="javascript:void(0);"
              >
                <i
                  class="flaticon-delete lh-1 me-8 position-relative top-1"
                ></i>
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ul class="list ps-0 mb-0 list-unstyled">
        <li class="position-relative fw-medium text-dark-emphasis">
          <div
            class="icon position-absolute start-0 rounded-circle text-center"
          >
            <i class="ph-duotone ph-envelope-simple"></i>
          </div>
          <span class="text-black fw-bold">J. Ronan</span> sent an Email
          <span class="d-block fs-13 mt-2">10:00 AM</span>
          <p class="fs-md-15 text-paragraph lh-base mb-0 fw-normal mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </li>
        <li class="position-relative fw-medium text-dark-emphasis">
          <div
            class="icon position-absolute start-0 rounded-circle text-center"
          >
            <i class="ph-duotone ph-first-aid-kit"></i>
          </div>
          <span class="text-black fw-bold">Victoria</span> archived a
          <span class="text-black fw-bold">Board for Project</span> in team
          <span class="d-block fs-13 mt-2">11:00 AM</span>
          <p class="fs-md-15 text-paragraph lh-base mb-0 fw-normal mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </li>
        <li class="position-relative fw-medium text-dark-emphasis">
          <div
            class="icon position-absolute start-0 rounded-circle text-center"
          >
            <i class="ph-duotone ph-check-circle"></i>
          </div>
          <span class="text-black fw-bold">Walter White</span> completed the
          project <span class="text-black fw-bold">“The Dashboard”</span>
          <span class="d-block fs-13 mt-2">12:00 PM</span>
          <p class="fs-md-15 text-paragraph lh-base mb-0 fw-normal mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </li>
        <li class="position-relative fw-medium text-dark-emphasis">
          <div
            class="icon position-absolute start-0 rounded-circle text-center"
          >
            <i class="ph-duotone ph-shield-plus"></i>
          </div>
          <span class="text-black fw-bold">Jennifer</span> added
          <span class="text-black fw-bold">Micheal</span> in the project
          <span class="text-black fw-bold">“The Adlash Design”</span>
          <span class="d-block fs-13 mt-2">10:00 PM</span>
          <p class="fs-md-15 text-paragraph lh-base mb-0 fw-normal mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </li>
        <li class="position-relative fw-medium text-dark-emphasis">
          <div
            class="icon position-absolute start-0 rounded-circle text-center"
          >
            <i class="ph-duotone ph-envelope-simple"></i>
          </div>
          <span class="text-black fw-bold">S. Smith</span> sent an Email
          <span class="d-block fs-13 mt-2">09:00 PM</span>
          <p class="fs-md-15 text-paragraph lh-base mb-0 fw-normal mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </li>
      </ul>
      <div class="position-relative mt-20">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#basicTimelineCode"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicTimelineCode">
<div>&lt;div class="recent-activity-box"&gt;</div>
    <div>&lt;ul class="list ps-0 mb-0 list-unstyled"&gt;</div>
        <div>&lt;li class="position-relative fw-medium text-dark-emphasis"&gt;</div>
            <div>&lt;div class="icon position-absolute start-0 rounded-circle text-center"&gt;</div>
                <div>&lt;i class="ph-duotone ph-envelope-simple"&gt;&lt;/i&gt;</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;span class="text-black fw-bold"&gt;J. Ronan&lt;/span&gt; sent an Email</div>
            <div>&lt;span class="d-block fs-13 mt-2"&gt;10:00 AM&lt;/span&gt;</div>
            <div>&lt;p class="fs-md-15 text-paragraph lh-base mb-0 fw-normal mt-5"&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.&lt;/p&gt;</div>
        <div>&lt;/li&gt;</div>
        <div>&lt;li class="position-relative fw-medium text-dark-emphasis"&gt;</div>
            <div>&lt;div class="icon position-absolute start-0 rounded-circle text-center"&gt;</div>
                <div>&lt;i class="ph-duotone ph-first-aid-kit"&gt;&lt;/i&gt;</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;span class="text-black fw-bold"&gt;Victoria&lt;/span&gt; archived a &lt;span class="text-black fw-bold"&gt;Board for Project&lt;/span&gt; in team</div>
            <div>&lt;span class="d-block fs-13 mt-2"&gt;11:00 AM&lt;/span&gt;</div>
            <div>&lt;p class="fs-md-15 text-paragraph lh-base mb-0 fw-normal mt-5"&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.&lt;/p&gt;</div>
        <div>&lt;/li&gt;</div>
        <div>&lt;li class="position-relative fw-medium text-dark-emphasis"&gt;</div>
            <div>&lt;div class="icon position-absolute start-0 rounded-circle text-center"&gt;</div>
                <div>&lt;i class="ph-duotone ph-check-circle"&gt;&lt;/i&gt;</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;span class="text-black fw-bold"&gt;Walter White&lt;/span&gt; completed the project &lt;span class="text-black fw-bold"&gt;“The Dashboard”&lt;/span&gt;</div>
            <div>&lt;span class="d-block fs-13 mt-2"&gt;12:00 PM&lt;/span&gt;</div>
            <div>&lt;p class="fs-md-15 text-paragraph lh-base mb-0 fw-normal mt-5"&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.&lt;/p&gt;</div>
        <div>&lt;/li&gt;</div>
        <div>&lt;li class="position-relative fw-medium text-dark-emphasis"&gt;</div>
            <div>&lt;div class="icon position-absolute start-0 rounded-circle text-center"&gt;</div>
                <div>&lt;i class="ph-duotone ph-shield-plus"&gt;&lt;/i&gt;</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;span class="text-black fw-bold"&gt;Jennifer&lt;/span&gt; added &lt;span class="text-black fw-bold"&gt;Micheal&lt;/span&gt; in the project &lt;span class="text-black fw-bold"&gt;“The Adlash Design”&lt;/span&gt;</div>
            <div>&lt;span class="d-block fs-13 mt-2"&gt;10:00 PM&lt;/span&gt;</div>
            <div>&lt;p class="fs-md-15 text-paragraph lh-base mb-0 fw-normal mt-5"&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.&lt;/p&gt;</div>
        <div>&lt;/li&gt;</div>
        <div>&lt;li class="position-relative fw-medium text-dark-emphasis"&gt;</div>
            <div>&lt;div class="icon position-absolute start-0 rounded-circle text-center"&gt;</div>
                <div>&lt;i class="ph-duotone ph-envelope-simple"&gt;&lt;/i&gt;</div>
            <div>&lt;/div&gt;</div>
            <div>&lt;span class="text-black fw-bold"&gt;S. Smith&lt;/span&gt; sent an Email</div>
            <div>&lt;span class="d-block fs-13 mt-2"&gt;09:00 PM&lt;/span&gt;</div>
            <div>&lt;p class="fs-md-15 text-paragraph lh-base mb-0 fw-normal mt-5"&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.&lt;/p&gt;</div>
        <div>&lt;/li&gt;</div>
    <div>&lt;/ul&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30">
      <div
        class="mb-15 mb-md-20 mb-xxxl-25 d-flex align-items-center justify-content-between"
      >
        <h5 class="card-title fw-bold mb-0">Timeline 2</h5>
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
              >
                <i class="flaticon-view lh-1 me-8 position-relative top-1"></i>
                View
              </a>
            </li>
            <li>
              <a
                class="dropdown-item d-flex align-items-center"
                href="javascript:void(0);"
              >
                <i class="flaticon-pen lh-1 me-8 position-relative top-1"></i>
                Edit
              </a>
            </li>
            <li>
              <a
                class="dropdown-item d-flex align-items-center"
                href="javascript:void(0);"
              >
                <i
                  class="flaticon-delete lh-1 me-8 position-relative top-1"
                ></i>
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="timeline position-relative">
        <div class="event position-relative">
          <div class="inner">
            <span
              class="date bg-primary text-white text-center rounded-circle d-block fw-semibold"
            >
              Jan
            </span>
            <h5 class="mb-12 fw-bold text-black">First Event</h5>
            <span class="d-block text-muted mb-10 fs-14">15 May 2023</span>
            <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              quis rutrum nunc, eget dictum massa. Nam faucibus felis nec augue
              adipiscing, eget commodo libero mattis.
            </p>
          </div>
        </div>
        <div class="event position-relative">
          <div class="inner">
            <span
              class="date bg-warning text-white text-center rounded-circle d-block fw-semibold"
            >
              Feb
            </span>
            <h5 class="mb-12 fw-bold text-black">Second Event</h5>
            <span class="d-block text-muted mb-10 fs-14">16 May 2023</span>
            <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              quis rutrum nunc, eget dictum massa. Nam faucibus felis nec augue
              adipiscing, eget commodo libero mattis.
            </p>
          </div>
        </div>
        <div class="event position-relative">
          <div class="inner">
            <span
              class="date bg-success text-white text-center rounded-circle d-block fw-semibold"
            >
              Mar
            </span>
            <h5 class="mb-12 fw-bold text-black">Third Event</h5>
            <span class="d-block text-muted mb-10 fs-14">17 May 2023</span>
            <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              quis rutrum nunc, eget dictum massa. Nam faucibus felis nec augue
              adipiscing, eget commodo libero mattis.
            </p>
            <div class="d-flex mt-20 align-items-center">
              <img
                src="../../../assets/images/user/user1.jpg"
                class="rounded me-10"
                width="50"
                alt="user"
              />
              <img
                src="../../../assets/images/user/user2.jpg"
                class="rounded me-10"
                width="50"
                alt="user"
              />
              <img
                src="../../../assets/images/user/user3.jpg"
                class="rounded me-10"
                width="50"
                alt="user"
              />
              <img
                src="../../../assets/images/user/user4.jpg"
                class="rounded me-10"
                width="50"
                alt="user"
              />
              <img
                src="../../../assets/images/user/user5.jpg"
                class="rounded me-10"
                width="50"
                alt="user"
              />
            </div>
          </div>
        </div>
        <div class="event position-relative">
          <div class="inner">
            <span
              class="date bg-danger text-white text-center rounded-circle d-block fw-semibold"
            >
              Apr
            </span>
            <h5 class="mb-12 fw-bold text-black">Fourth Event</h5>
            <span class="d-block text-muted mb-10 fs-14">18 May 2023</span>
            <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              quis rutrum nunc, eget dictum massa. Nam faucibus felis nec augue
              adipiscing, eget commodo libero mattis.
            </p>
            <div class="d-flex mt-20 align-items-center">
              <img
                src="../../../assets/images/user/user1.jpg"
                class="rounded me-10"
                width="50"
                alt="user"
              />
              <img
                src="../../../assets/images/user/user2.jpg"
                class="rounded me-10"
                width="50"
                alt="user"
              />
              <img
                src="../../../assets/images/user/user3.jpg"
                class="rounded me-10"
                width="50"
                alt="user"
              />
              <img
                src="../../../assets/images/user/user4.jpg"
                class="rounded me-10"
                width="50"
                alt="user"
              />
              <img
                src="../../../assets/images/user/user5.jpg"
                class="rounded me-10"
                width="50"
                alt="user"
              />
            </div>
          </div>
        </div>
        <div class="event position-relative">
          <div class="inner">
            <span
              class="date bg-info text-white text-center rounded-circle d-block fw-semibold"
            >
              Jun
            </span>
            <h5 class="mb-12 fw-bold text-black">Fifth Event</h5>
            <span class="d-block text-muted mb-10 fs-14">19 May 2023</span>
            <p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              quis rutrum nunc, eget dictum massa. Nam faucibus felis nec augue
              adipiscing, eget commodo libero mattis.
            </p>
          </div>
        </div>
      </div>
      <div class="position-relative mt-20">
        <!-- <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#basicTimeline2Code"
        >
          Copy
        </button> -->
        <pre class="line-numbers bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicTimeline2Code">
<div>&lt;div class="timeline position-relative"&gt;</div>
    <div>&lt;div class="event position-relative"&gt;</div>
        <div>&lt;div class="inner"&gt;</div>
            <div>&lt;span class="date bg-primary text-white text-center rounded-circle d-block fw-semibold"&gt;</div>
                <div>Jan</div>
            <div>&lt;/span&gt;</div>
            <div>&lt;h5 class="mb-12 fw-bold text-black"&gt;First Event&lt;/h5&gt;</div>
            <div>&lt;span class="d-block text-muted mb-10 fs-14"&gt;15 May 2023&lt;/span&gt;</div>
            <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis rutrum nunc, eget dictum massa. Nam faucibus felis nec augue adipiscing, eget commodo libero mattis.&lt;/p&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="event position-relative"&gt;</div>
        <div>&lt;div class="inner"&gt;</div>
            <div>&lt;span class="date bg-warning text-white text-center rounded-circle d-block fw-semibold"&gt;</div>
                <div>Feb</div>
            <div>&lt;/span&gt;</div>
            <div>&lt;h5 class="mb-12 fw-bold text-black"&gt;Second Event&lt;/h5&gt;</div>
            <div>&lt;span class="d-block text-muted mb-10 fs-14"&gt;16 May 2023&lt;/span&gt;</div>
            <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis rutrum nunc, eget dictum massa. Nam faucibus felis nec augue adipiscing, eget commodo libero mattis.&lt;/p&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="event position-relative"&gt;</div>
        <div>&lt;div class="inner"&gt;</div>
            <div>&lt;span class="date bg-success text-white text-center rounded-circle d-block fw-semibold"&gt;</div>
                <div>Mar</div>
            <div>&lt;/span&gt;</div>
            <div>&lt;h5 class="mb-12 fw-bold text-black"&gt;Third Event&lt;/h5&gt;</div>
            <div>&lt;span class="d-block text-muted mb-10 fs-14"&gt;17 May 2023&lt;/span&gt;</div>
            <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis rutrum nunc, eget dictum massa. Nam faucibus felis nec augue adipiscing, eget commodo libero mattis.&lt;/p&gt;</div>
            <div>&lt;div class="d-flex mt-20 align-items-center"&gt;</div>
                <div>&lt;img src="../../../assets/images/user/user1.jpg" class="rounded me-10" width="50" alt="user"&gt;</div>
                <div>&lt;img src="../../../assets/images/user/user2.jpg" class="rounded me-10" width="50" alt="user"&gt;</div>
                <div>&lt;img src="../../../assets/images/user/user3.jpg" class="rounded me-10" width="50" alt="user"&gt;</div>
                <div>&lt;img src="../../../assets/images/user/user4.jpg" class="rounded me-10" width="50" alt="user"&gt;</div>
                <div>&lt;img src="../../../assets/images/user/user5.jpg" class="rounded me-10" width="50" alt="user"&gt;</div>
            <div>&lt;/div&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="event position-relative"&gt;</div>
        <div>&lt;div class="inner"&gt;</div>
            <div>&lt;span class="date bg-danger text-white text-center rounded-circle d-block fw-semibold"&gt;</div>
                <div>Apr</div>
            <div>&lt;/span&gt;</div>
            <div>&lt;h5 class="mb-12 fw-bold text-black"&gt;Fourth Event&lt;/h5&gt;</div>
            <div>&lt;span class="d-block text-muted mb-10 fs-14"&gt;18 May 2023&lt;/span&gt;</div>
            <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis rutrum nunc, eget dictum massa. Nam faucibus felis nec augue adipiscing, eget commodo libero mattis.&lt;/p&gt;</div>
            <div>&lt;div class="d-flex mt-20 align-items-center"&gt;</div>
                <div>&lt;img src="../../../assets/images/user/user1.jpg" class="rounded me-10" width="50" alt="user"&gt;</div>
                <div>&lt;img src="../../../assets/images/user/user2.jpg" class="rounded me-10" width="50" alt="user"&gt;</div>
                <div>&lt;img src="../../../assets/images/user/user3.jpg" class="rounded me-10" width="50" alt="user"&gt;</div>
                <div>&lt;img src="../../../assets/images/user/user4.jpg" class="rounded me-10" width="50" alt="user"&gt;</div>
                <div>&lt;img src="../../../assets/images/user/user5.jpg" class="rounded me-10" width="50" alt="user"&gt;</div>
            <div>&lt;/div&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
    <div>&lt;div class="event position-relative"&gt;</div>
        <div>&lt;div class="inner"&gt;</div>
            <div>&lt;span class="date bg-info text-white text-center rounded-circle d-block fw-semibold"&gt;</div>
                <div>Jun</div>
            <div>&lt;/span&gt;</div>
            <div>&lt;h5 class="mb-12 fw-bold text-black"&gt;Fifth Event&lt;/h5&gt;</div>
            <div>&lt;span class="d-block text-muted mb-10 fs-14"&gt;19 May 2023&lt;/span&gt;</div>
            <div>&lt;p class="fs-md-15 fs-lg-16 text-paragraph lh-base mb-0"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis rutrum nunc, eget dictum massa. Nam faucibus felis nec augue adipiscing, eget commodo libero mattis.&lt;/p&gt;</div>
        <div>&lt;/div&gt;</div>
    <div>&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimelineContent",
};
</script>