<template>
  <div class="card mb-25 border-0 rounded-0 bg-white crm-stats-box">
    <div class="card-body letter-spacing">
      <div class="row justify-content-between justify-content-end">
        <div class="col-xxxl-6 col-lg-6 col-md-6">
          <div
            class="icon mb-8 d-flex align-items-center text-uppercase text-dark-emphasis fw-medium"
          >
            <i class="flaticon-sterile-box text-primary me-6"></i> NEW LEADS
          </div>
          <h3 class="fw-black mb-15 lh-1">1058</h3>
          <span class="fw-bold text-success text-badge d-inline-block">
            <i class="flaticon-up-arrow fs-11 lh-1 position-relative top-1"></i>
            3.3%
          </span>
          <span class="d-block text-muted mt-8">Than last week</span>
        </div>
        <div class="col-xxxl-6 col-lg-6 col-md-6">
          <div class="chart style-two">
            <apexchart
              type="donut"
              height="150"
              id="newLeadsChart"
              :options="newLeadsChart"
              :series="leads"
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
  name: "NewLeads",
  data: function () {
    return {
      leads: [35, 35, 41],
      newLeadsChart: {
        chart: {
          type: "donut",
          height: 150,
        },
        plotOptions: {
          pie: {
            donut: {
              size: "65%",
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 0,
        },
        colors: ["#06B48A", "#F3C44C", "#6FD3F7"],
        legend: {
          show: false,
          fontWeight: 500,
          fontSize: "14px",
          position: "bottom",
          horizontalAlign: "center",
          fontFamily: "Red Hat Display, sans-serif",
          labels: {
            colors: "#9C9AB6",
          },
          markers: {
            offsetX: -2,
          },
          itemMargin: {
            horizontal: 8,
            vertical: 5,
          },
        },
        labels: ["Week 1", "Week 2", "Week 3"],
        tooltip: {
          style: {
            fontSize: "14px",
            fontFamily: "Red Hat Display, sans-serif",
          },
        },
      },
    };
  },
});
</script>