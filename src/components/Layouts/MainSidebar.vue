<template>
  <div
    :class="[
      'sidebar-area position-fixed start-0 top-0 bg-black h-100vh transition',
      { active: stateStoreInstance.open },
    ]"
    id="sidebar-area"
  >
    <div class="logo position-absolute start-0 end-0 top-0 bg-black">
      <router-link
        to="/"
        class="d-flex align-items-center text-white text-decoration-none"
      >
        <img src="../../assets/images/favicon.png" alt="logo-icon" />
        <span class="fw-bold ms-10">Adlash</span>
      </router-link>
      <div class="border-bottom"></div>
      <button
        class="sidebar-burger-menu position-absolute lh-1 bg-transparent p-0 border-0"
        @click="stateStoreInstance.onChange"
      >
        <i class="ph-duotone ph-caret-double-right"></i>
      </button>
    </div>
    <div class="sidebar-menu">
      <ul
        class="sidebar-navbar-nav ps-0 mb-0 list-unstyled accordion"
        id="sidebarNavAccordion"
      >
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseOne"
            aria-expanded="true"
            aria-controls="sidebarCollapseOne"
          >
            <i class="flaticon-more-1"></i>
            <span class="title">Dashboard</span>
          </a>
          <div
            id="sidebarCollapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link to="/" class="sidebar-sub-menu-link">
                    Ecommerce
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/project-management"
                    class="sidebar-sub-menu-link"
                  >
                    Project Management
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/support-desk" class="sidebar-sub-menu-link">
                    Support Desk
                    <span class="new-badge fw-medium d-inline-block">Hot</span>
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/lms-courses" class="sidebar-sub-menu-link">
                    LMS Courses
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/crm-system" class="sidebar-sub-menu-link">
                    CRM System
                    <span class="new-badge fw-medium d-inline-block">Hot</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="sidebar-nav-item">
          <router-link to="/file-manager" class="sidebar-nav-link d-block">
            <i class="flaticon-folder"></i>
            <span class="title">File Manager</span>
          </router-link>
        </li>
        <li class="sidebar-nav-item">
          <router-link to="/changelog" class="sidebar-nav-link d-block">
            <i class="flaticon-award-1"></i>
            <span class="title">Changelog</span>
          </router-link>
        </li>
        <li class="sub-title sidebar-nav-item">
          <span class="d-block text-uppercase fw-medium">Apps</span>
        </li>
        <li class="sidebar-nav-item">
          <router-link to="/calendar" class="sidebar-nav-link d-block">
            <i class="flaticon-date-1"></i>
            <span class="title">Calendar</span>
          </router-link>
        </li>
        <li class="sidebar-nav-item">
          <router-link to="/chat" class="sidebar-nav-link d-block">
            <i class="flaticon-chat-1"></i>
            <span class="title">Chat</span>
          </router-link>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseTwo"
            aria-expanded="false"
            aria-controls="sidebarCollapseTwo"
          >
            <i class="flaticon-rocket"></i>
            <span class="title">CRM</span>
          </a>
          <div
            id="sidebarCollapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link to="/leads" class="sidebar-sub-menu-link"
                    >Leads</router-link
                  >
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/lead-details" class="sidebar-sub-menu-link">
                    Lead Details
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/crm-contacts" class="sidebar-sub-menu-link">
                    Contacts
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/crm-customers"
                    class="sidebar-sub-menu-link"
                  >
                    Customers
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseThree"
            aria-expanded="false"
            aria-controls="sidebarCollapseThree"
          >
            <i class="flaticon-arroba"></i>
            <span class="title">Emails</span>
          </a>
          <div
            id="sidebarCollapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link to="/emails" class="sidebar-sub-menu-link">
                    Inbox
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/read-email" class="sidebar-sub-menu-link">
                    Read Email
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseFour"
            aria-expanded="false"
            aria-controls="sidebarCollapseFour"
          >
            <i class="flaticon-trolley-cart"></i>
            <span class="title">Ecommerce</span>
          </a>
          <div
            id="sidebarCollapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link to="/products" class="sidebar-sub-menu-link">
                    Products Grid
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/products-list"
                    class="sidebar-sub-menu-link"
                  >
                    Products List
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/add-product" class="sidebar-sub-menu-link">
                    Add Product
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/product-details"
                    class="sidebar-sub-menu-link"
                  >
                    Product Details
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/orders" class="sidebar-sub-menu-link">
                    Orders
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/order-details"
                    class="sidebar-sub-menu-link"
                  >
                    Order Details
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/cart" class="sidebar-sub-menu-link">
                    Shopping Cart
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/checkout" class="sidebar-sub-menu-link">
                    Checkout
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/customers" class="sidebar-sub-menu-link">
                    Customers
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/sellers" class="sidebar-sub-menu-link">
                    Sellers
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/reviews" class="sidebar-sub-menu-link">
                    Manage Reviews
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/refund" class="sidebar-sub-menu-link">
                    Refund
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/invoice" class="sidebar-sub-menu-link">
                    Invoice
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/invoice-details"
                    class="sidebar-sub-menu-link"
                  >
                    Invoice Details
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/order-tracking"
                    class="sidebar-sub-menu-link"
                  >
                    Order Tracking
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseFive"
            aria-expanded="false"
            aria-controls="sidebarCollapseFive"
          >
            <i class="flaticon-magistrate"></i>
            <span class="title">E-learning</span>
          </a>
          <div
            id="sidebarCollapseFive"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link to="/courses-list" class="sidebar-sub-menu-link">
                    Courses List
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/courses-grid" class="sidebar-sub-menu-link">
                    Courses Grid
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/course-details"
                    class="sidebar-sub-menu-link"
                  >
                    Course Details
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/lessons-preview"
                    class="sidebar-sub-menu-link"
                  >
                    Lessons Preview
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/edit-course" class="sidebar-sub-menu-link">
                    Edit Course
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseSix"
            aria-expanded="false"
            aria-controls="sidebarCollapseSix"
          >
            <i class="flaticon-headphones"></i>
            <span class="title">Support Desk</span>
          </a>
          <div
            id="sidebarCollapseSix"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/support-desk-list"
                    class="sidebar-sub-menu-link"
                  >
                    List View
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/support-desk-card"
                    class="sidebar-sub-menu-link"
                  >
                    Card View
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/contacts" class="sidebar-sub-menu-link">
                    Contacts
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ticket-preview"
                    class="sidebar-sub-menu-link"
                  >
                    Ticket Preview
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseSeven"
            aria-expanded="false"
            aria-controls="sidebarCollapseSeven"
          >
            <i class="flaticon-layer-2"></i>
            <span class="title">Projects</span>
          </a>
          <div
            id="sidebarCollapseSeven"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/projects-list"
                    class="sidebar-sub-menu-link"
                  >
                    Projects List
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/projects-grid"
                    class="sidebar-sub-menu-link"
                  >
                    Projects Grid
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/create-new-project"
                    class="sidebar-sub-menu-link"
                  >
                    Create New Project
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/project-details"
                    class="sidebar-sub-menu-link"
                  >
                    Project Details
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/to-do-list" class="sidebar-sub-menu-link">
                    To-do List
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/projects-teams"
                    class="sidebar-sub-menu-link"
                  >
                    Teams
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="sidebar-nav-item">
          <router-link to="/kanban" class="sidebar-nav-link d-block">
            <i class="flaticon-extension"></i>
            <span class="title">Kanban</span>
          </router-link>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseEight"
            aria-expanded="false"
            aria-controls="sidebarCollapseEight"
          >
            <i class="flaticon-ticket"></i>
            <span class="title">Events</span>
          </a>
          <div
            id="sidebarCollapseEight"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link to="/events" class="sidebar-sub-menu-link">
                    Events Grid
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/event-details"
                    class="sidebar-sub-menu-link"
                  >
                    Event Details
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseNine"
            aria-expanded="false"
            aria-controls="sidebarCollapseNine"
          >
            <i class="flaticon-share"></i>
            <span class="title">Social</span>
          </a>
          <div
            id="sidebarCollapseNine"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/social-timeline"
                    class="sidebar-sub-menu-link"
                  >
                    Timeline
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/profile-settings"
                    class="sidebar-sub-menu-link"
                  >
                    Settings
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="sub-title sidebar-nav-item">
          <span class="d-block text-uppercase fw-medium">Pages</span>
        </li>
        <li class="sidebar-nav-item">
          <router-link to="/starter" class="sidebar-nav-link d-block">
            <i class="flaticon-rocket"></i>
            <span class="title">Starter</span>
          </router-link>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseTen"
            aria-expanded="false"
            aria-controls="sidebarCollapseTen"
          >
            <i class="flaticon-shield-1"></i>
            <span class="title">Authentication</span>
          </a>
          <div
            id="sidebarCollapseTen"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link to="/login" class="sidebar-sub-menu-link">
                    Login
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/register" class="sidebar-sub-menu-link">
                    Register
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/forgot-password"
                    class="sidebar-sub-menu-link"
                  >
                    Forgot Password
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/reset-password"
                    class="sidebar-sub-menu-link"
                  >
                    Reset Password
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/email-confirmation"
                    class="sidebar-sub-menu-link"
                  >
                    Mail Confirmation
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseEleven"
            aria-expanded="false"
            aria-controls="sidebarCollapseEleven"
          >
            <i class="flaticon-user-3"></i>
            <span class="title">Users</span>
          </a>
          <div
            id="sidebarCollapseEleven"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link to="/users-list" class="sidebar-sub-menu-link">
                    Users List
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/add-user" class="sidebar-sub-menu-link">
                    Add User
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="sidebar-nav-item">
          <router-link to="/pricing" class="sidebar-nav-link d-block">
            <i class="flaticon-price-tag-2"></i>
            <span class="title">Pricing</span>
          </router-link>
        </li>
        <li class="sidebar-nav-item">
          <router-link to="/faq" class="sidebar-nav-link d-block">
            <i class="flaticon-communication"></i>
            <span class="title">FAQ</span>
          </router-link>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseTwelve"
            aria-expanded="false"
            aria-controls="sidebarCollapseTwelve"
          >
            <i class="flaticon-settings"></i>
            <span class="title">Miscellaneous</span>
          </a>
          <div
            id="sidebarCollapseTwelve"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ui-swiper-slider"
                    class="sidebar-sub-menu-link"
                  >
                    Swiper Slider
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/privacy-policy"
                    class="sidebar-sub-menu-link"
                  >
                    Privacy Policy
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/terms-conditions"
                    class="sidebar-sub-menu-link"
                  >
                    Terms & Conditions
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="sidebar-nav-item">
          <router-link to="/error-404" class="sidebar-nav-link d-block">
            <i class="flaticon-warning"></i>
            <span class="title">Errors</span>
          </router-link>
        </li>
        <li class="sub-title sidebar-nav-item">
          <span class="d-block text-uppercase fw-medium">Modules</span>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseThirteen"
            aria-expanded="false"
            aria-controls="sidebarCollapseThirteen"
          >
            <i class="flaticon-form"></i>
            <span class="title">Forms</span>
          </a>
          <div
            id="sidebarCollapseThirteen"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/forms-overview"
                    class="sidebar-sub-menu-link"
                  >
                    Basic Elements
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/forms-form-control"
                    class="sidebar-sub-menu-link"
                  >
                    Form Controls
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/forms-select" class="sidebar-sub-menu-link">
                    Select
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/forms-checks-radios"
                    class="sidebar-sub-menu-link"
                  >
                    Checks & Radios
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/forms-range" class="sidebar-sub-menu-link">
                    Range
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/forms-input-group"
                    class="sidebar-sub-menu-link"
                    >Input Group</router-link
                  >
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/forms-floating-labels"
                    class="sidebar-sub-menu-link"
                  >
                    Floating Labels
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/forms-layout" class="sidebar-sub-menu-link">
                    Layout
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/forms-validation"
                    class="sidebar-sub-menu-link"
                  >
                    Validation
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/wizard" class="sidebar-sub-menu-link"
                    >Wizard</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="sidebar-nav-item">
          <router-link to="/tables" class="sidebar-nav-link d-block">
            <i class="flaticon-table"></i>
            <span class="title">Tables</span>
          </router-link>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseFourteen"
            aria-expanded="false"
            aria-controls="sidebarCollapseFourteen"
          >
            <i class="flaticon-pie-chart"></i>
            <span class="title">Charts</span>
          </a>
          <div
            id="sidebarCollapseFourteen"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link to="/charts" class="sidebar-sub-menu-link">
                    Charts
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/mixed-charts" class="sidebar-sub-menu-link">
                    Mixed Charts
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseFifteen"
            aria-expanded="false"
            aria-controls="sidebarCollapseFifteen"
          >
            <i class="flaticon-shapes"></i>
            <span class="title">Icons</span>
          </a>
          <div
            id="sidebarCollapseFifteen"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link to="/flaticons" class="sidebar-sub-menu-link">
                    Flaticon
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/phosphoricons"
                    class="sidebar-sub-menu-link"
                  >
                    Phosphoricons
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseSixteen"
            aria-expanded="false"
            aria-controls="sidebarCollapseSixteen"
          >
            <i class="flaticon-map"></i>
            <span class="title">Maps</span>
          </a>
          <div
            id="sidebarCollapseSixteen"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link to="/google-maps" class="sidebar-sub-menu-link">
                    Google Maps
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/leaflet-map" class="sidebar-sub-menu-link">
                    Leaflet Map
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseSeventeen"
            aria-expanded="false"
            aria-controls="sidebarCollapseSeventeen"
          >
            <i class="flaticon-track"></i>
            <span class="title">Extended UI</span>
          </a>
          <div
            id="sidebarCollapseSeventeen"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-tree" class="sidebar-sub-menu-link">
                    Tree
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/editor" class="sidebar-sub-menu-link">
                    Rich Text Editor
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseEighteen"
            aria-expanded="false"
            aria-controls="sidebarCollapseEighteen"
          >
            <i class="flaticon-layer-2"></i>
            <span class="title">UI Elements</span>
          </a>
          <div
            id="sidebarCollapseEighteen"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-accordion" class="sidebar-sub-menu-link">
                    Accordion
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-alerts" class="sidebar-sub-menu-link">
                    Alerts
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-avatars" class="sidebar-sub-menu-link">
                    Avatars
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-badges" class="sidebar-sub-menu-link">
                    Badges
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ui-breadcrumb"
                    class="sidebar-sub-menu-link"
                  >
                    Breadcrumb
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-buttons" class="sidebar-sub-menu-link">
                    Buttons
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ui-button-group"
                    class="sidebar-sub-menu-link"
                  >
                    Button Group
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-carousel" class="sidebar-sub-menu-link">
                    Carousel
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ui-close-button"
                    class="sidebar-sub-menu-link"
                  >
                    Close Button
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ui-color-background"
                    class="sidebar-sub-menu-link"
                  >
                    Color Background
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ui-colored-links"
                    class="sidebar-sub-menu-link"
                  >
                    Colored Links
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-collapse" class="sidebar-sub-menu-link">
                    Collapse
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-dropdowns" class="sidebar-sub-menu-link">
                    Dropdowns
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ui-datepicker"
                    class="sidebar-sub-menu-link"
                  >
                    Datepicker
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-figures" class="sidebar-sub-menu-link">
                    Figures
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-icon-link" class="sidebar-sub-menu-link">
                    Icon Link
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ui-list-group"
                    class="sidebar-sub-menu-link"
                  >
                    List Group
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-modal" class="sidebar-sub-menu-link">
                    Modal
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-navs-tabs" class="sidebar-sub-menu-link">
                    Navs & Tabs
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-offcanvas" class="sidebar-sub-menu-link">
                    Offcanvas
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ui-pagination"
                    class="sidebar-sub-menu-link"
                  >
                    Pagination
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ui-placeholders"
                    class="sidebar-sub-menu-link"
                  >
                    Placeholders
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-popovers" class="sidebar-sub-menu-link">
                    Popovers
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-progress" class="sidebar-sub-menu-link">
                    Progress
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-ratio" class="sidebar-sub-menu-link">
                    Ratio
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-scrollspy" class="sidebar-sub-menu-link">
                    Scrollspy
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-stacks" class="sidebar-sub-menu-link">
                    Stacks
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-spinners" class="sidebar-sub-menu-link">
                    Spinners
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-tables" class="sidebar-sub-menu-link">
                    Tables
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-toasts" class="sidebar-sub-menu-link">
                    Toasts
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-timeline" class="sidebar-sub-menu-link">
                    Timeline
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ui-timepicker"
                    class="sidebar-sub-menu-link"
                  >
                    Timepicker
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-tooltips" class="sidebar-sub-menu-link">
                    Tooltips
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ui-typography"
                    class="sidebar-sub-menu-link"
                  >
                    Typography
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseNineteen"
            aria-expanded="false"
            aria-controls="sidebarCollapseNineteen"
          >
            <i class="flaticon-project"></i>
            <span class="title">Utilities</span>
          </a>
          <div
            id="sidebarCollapseNineteen"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ui-background"
                    class="sidebar-sub-menu-link"
                  >
                    Background
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-borders" class="sidebar-sub-menu-link">
                    Borders
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-colors" class="sidebar-sub-menu-link">
                    Colors
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-clearfix" class="sidebar-sub-menu-link">
                    Clearfix
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-display" class="sidebar-sub-menu-link">
                    Display
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-flex" class="sidebar-sub-menu-link">
                    Flex
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-float" class="sidebar-sub-menu-link">
                    Float
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ui-focus-ring"
                    class="sidebar-sub-menu-link"
                  >
                    Focus Ring
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-grid" class="sidebar-sub-menu-link">
                    Grid
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-gutters" class="sidebar-sub-menu-link">
                    Gutters
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ui-interactions"
                    class="sidebar-sub-menu-link"
                  >
                    Interactions
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-link" class="sidebar-sub-menu-link"
                    >Link</router-link
                  >
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ui-object-fit"
                    class="sidebar-sub-menu-link"
                  >
                    Object Fit
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-opacity" class="sidebar-sub-menu-link">
                    Opacity
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-overflow" class="sidebar-sub-menu-link">
                    Overflow
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-position" class="sidebar-sub-menu-link">
                    Position
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-shadows" class="sidebar-sub-menu-link">
                    Shadows
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-sizing" class="sidebar-sub-menu-link">
                    Sizing
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-spacing" class="sidebar-sub-menu-link">
                    Spacing
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-text" class="sidebar-sub-menu-link">
                    Text
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ui-text-truncation"
                    class="sidebar-sub-menu-link"
                  >
                    Text Truncation
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ui-vertical-align"
                    class="sidebar-sub-menu-link"
                  >
                    Vertical Alignment
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ui-vertical-rule"
                    class="sidebar-sub-menu-link"
                  >
                    Vertical Rule
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ui-visually-hidden"
                    class="sidebar-sub-menu-link"
                  >
                    Visually Hidden
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/ui-visibility"
                    class="sidebar-sub-menu-link"
                  >
                    Visibility
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/ui-z-index" class="sidebar-sub-menu-link">
                    Z-index
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseTwenty"
            aria-expanded="false"
            aria-controls="sidebarCollapseTwenty"
          >
            <i class="flaticon-widget"></i>
            <span class="title">Widgets</span>
          </a>
          <div
            id="sidebarCollapseTwenty"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link to="/cards" class="sidebar-sub-menu-link">
                    Cards
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/charts" class="sidebar-sub-menu-link">
                    Charts
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseTwentyOne"
            aria-expanded="false"
            aria-controls="sidebarCollapseTwentyOne"
          >
            <i class="flaticon-sugar-cubes"></i>
            <span class="title">Pages</span>
          </a>
          <div
            id="sidebarCollapseTwentyOne"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link to="/gallery" class="sidebar-sub-menu-link">
                    Gallery
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/maintenance" class="sidebar-sub-menu-link">
                    Maintenance
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/notifications"
                    class="sidebar-sub-menu-link"
                  >
                    Notifications
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/connected-accounts"
                    class="sidebar-sub-menu-link"
                  >
                    Connected Accounts
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link to="/profile" class="sidebar-sub-menu-link">
                    Profile
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/search-result"
                    class="sidebar-sub-menu-link"
                  >
                    Search Result
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseTwentyTwo"
            aria-expanded="false"
            aria-controls="sidebarCollapseTwentyTwo"
          >
            <i class="flaticon-setting"></i>
            <span class="title">Settings</span>
          </a>
          <div
            id="sidebarCollapseTwentyTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/account-settings"
                    class="sidebar-sub-menu-link"
                  >
                    Account Setting
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/settings-change-password"
                    class="sidebar-sub-menu-link"
                  >
                    Change Password
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/settings-social-links"
                    class="sidebar-sub-menu-link"
                  >
                    Social Link
                  </router-link>
                </li>
                <li class="sidebar-sub-menu-item">
                  <router-link
                    to="/settings-privacy-policy"
                    class="sidebar-sub-menu-link"
                  >
                    Privacy Policy
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="sidebar-nav-item">
          <router-link to="/blank-page" class="sidebar-nav-link d-block">
            <i class="flaticon-edit"></i>
            <span class="title">Blank Page</span>
          </router-link>
        </li>
        <li
          class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
        >
          <a
            href="#"
            class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCollapseTwentyThree"
            aria-expanded="true"
            aria-controls="sidebarCollapseTwentyThree"
          >
            <i class="flaticon-download"></i>
            <span class="title">Multi Level</span>
          </a>
          <div
            id="sidebarCollapseTwentyThree"
            class="accordion-collapse collapse"
            data-bs-parent="#sidebarNavAccordion"
          >
            <div class="accordion-body">
              <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                <li class="sidebar-sub-menu-item">
                  <a href="#" class="sidebar-sub-menu-link"> Level One </a>
                </li>
                <li class="sidebar-sub-menu-item">
                  <a href="#" class="sidebar-sub-menu-link"> Level Two </a>
                </li>
                <li class="sidebar-sub-menu-item">
                  <ul
                    class="sidebar-navbar-nav ps-0 mb-0 list-unstyled accordion"
                    id="sidebarInnerNavAccordion"
                  >
                    <li
                      class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
                    >
                      <a
                        href="#"
                        class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
                        data-bs-toggle="collapse"
                        data-bs-target="#sidebarInnerCollapseOne"
                        aria-expanded="true"
                        aria-controls="sidebarInnerCollapseOne"
                      >
                        <span class="title">Second Level</span>
                      </a>
                      <div
                        id="sidebarInnerCollapseOne"
                        class="accordion-collapse collapse"
                        data-bs-parent="#sidebarInnerNavAccordion"
                      >
                        <div class="accordion-body">
                          <ul class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
                            <li class="sidebar-sub-menu-item">
                              <a href="#" class="sidebar-sub-menu-link">
                                Level One
                              </a>
                            </li>
                            <li class="sidebar-sub-menu-item">
                              <a href="#" class="sidebar-sub-menu-link">
                                Level Two
                              </a>
                            </li>
                            <li class="sidebar-sub-menu-item">
                              <ul
                                class="sidebar-navbar-nav ps-0 mb-0 list-unstyled accordion"
                                id="sidebarInner2NavAccordion"
                              >
                                <li
                                  class="sidebar-nav-item accordion-item bg-transparent border-0 rounded-0"
                                >
                                  <a
                                    href="#"
                                    class="accordion-button collapsed rounded-0 shadow-none bg-transparent d-block"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#sidebarInner2CollapseOne"
                                    aria-expanded="true"
                                    aria-controls="sidebarInner2CollapseOne"
                                  >
                                    <span class="title">Third Level</span>
                                  </a>
                                  <div
                                    id="sidebarInner2CollapseOne"
                                    class="accordion-collapse collapse"
                                    data-bs-parent="#sidebarInner2NavAccordion"
                                  >
                                    <div class="accordion-body">
                                      <ul
                                        class="sidebar-sub-menu ps-0 mb-0 list-unstyled"
                                      >
                                        <li class="sidebar-sub-menu-item">
                                          <a
                                            href="#"
                                            class="sidebar-sub-menu-link"
                                          >
                                            One
                                          </a>
                                        </li>
                                        <li class="sidebar-sub-menu-item">
                                          <a
                                            href="#"
                                            class="sidebar-sub-menu-link"
                                          >
                                            Two
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="sidebar-nav-item">
          <router-link to="/logout" class="sidebar-nav-link d-block">
            <i class="flaticon-logout"></i>
            <span class="title">Logout</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stateStore from "../../utils/store";

export default defineComponent({
  name: "MainSidebar",
  setup() {
    const stateStoreInstance = stateStore;
    return {
      stateStoreInstance,
    };
  },
});
</script>