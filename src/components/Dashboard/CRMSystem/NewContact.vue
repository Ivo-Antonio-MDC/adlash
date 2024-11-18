<template>
  <div class="card mb-25 border-0 rounded-0 bg-white crm-stats-box">
    <div class="card-body letter-spacing">
      <div class="row justify-content-between justify-content-end">
        <div class="col-xxxl-6 col-lg-6 col-md-6">
          <div
            class="icon mb-8 d-flex align-items-center text-uppercase text-dark-emphasis fw-medium"
          >
            <i class="flaticon-sterile-box text-primary me-6"></i> NEW CONTACT
          </div>
          <h3 class="fw-black mb-15 lh-1">695</h3>
          <span class="fw-bold text-success text-badge d-inline-block">
            <i class="flaticon-up-arrow fs-11 lh-1 position-relative top-1"></i>
            5.5%
          </span>
          <span class="d-block text-muted mt-8">Than last week</span>
        </div>
        <div class="col-xxxl-6 col-lg-6 col-md-6">
          <div class="chart">
            <apexchart
              type="bar"
              height="130"
              id="newContactChart"
              :options="newContactChart"
              :series="contact"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewContact",
  data: function () {
    return {
      contact: [
        {
          name: "New Contact",
          data: [100, 30, 65, 90, 40, 100, 35],
        },
      ],
      newContactChart: {
        chart: {
          type: "bar",
          height: 130,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "40%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#F3C44C"],
        stroke: {
          show: false,
        },
        xaxis: {
          categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
          labels: {
            show: false,
            style: {
              fontFamily: "Red Hat Display, sans-serif",
              colors: "#9C9AB6",
              fontSize: "14px",
              fontWeight: 500,
            },
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
          tickAmount: 8,
          labels: {
            show: true,
            style: {
              fontFamily: "Red Hat Display, sans-serif",
              colors: ["#9C9AB6"],
              fontSize: "14px",
              fontWeight: 500,
            },
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          style: {
            fontSize: "14px",
            fontFamily: "Red Hat Display, sans-serif",
          },
        },
        grid: {
          show: false,
          strokeDashArray: 5,
          borderColor: "#f0f0f0",
        },
      },
    };
  },
});
</script>