<template>
  <BreadCrumb PageTitle="Cards" />
  <StatsBoxes />
  <StatsItem />
  <div class="row">
    <div class="col-xxl-7">
      <WhatHappening />
    </div>
    <div class="col-xxl-5">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <ResolveComplaints />
        </div>
        <div class="col-lg-6 col-md-6">
          <AverageSpeedOfAnswer />
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-4">
      <NewContact />
    </div>
    <div class="col-lg-4">
      <NewUsers />
    </div>
    <div class="col-lg-4">
      <NewLeads />
    </div>
  </div>
  <CardsStyle />
  <CardsStyleTwo />
  <CardsStyleThree />
  <CardsStyleFour />
  <TimelineCard />
  <HandlingProjects />
  <TeamMember />
  <StoreContent />
  <WhatsHappening />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadCrumb from "../../components/Common/BreadCrumb.vue";
import StatsBoxes from "../../components/Widgets/Cards/StatsBoxes/index.vue";
import StatsItem from "../../components/Widgets/Cards/StatsItem.vue";
import WhatHappening from "../../components/Widgets/Cards/WhatHappening.vue";
import ResolveComplaints from "../../components/Widgets/Cards/ResolveComplaints.vue";
import AverageSpeedOfAnswer from "../../components/Widgets/Cards/AverageSpeedOfAnswer.vue";
import NewContact from "../../components/Widgets/Cards/NewContact.vue";
import NewUsers from "../../components/Widgets/Cards/NewUsers.vue";
import NewLeads from "../../components/Widgets/Cards/NewLeads.vue";
import CardsStyle from "../../components/Widgets/Cards/CardsStyle/index.vue";
import CardsStyleTwo from "../../components/Widgets/Cards/CardsStyleTwo/index.vue";
import CardsStyleThree from "../../components/Widgets/Cards/CardsStyleThree/index.vue";
import CardsStyleFour from "../../components/Widgets/Cards/CardsStyleFour/index.vue";
import TimelineCard from "../../components/Widgets/Cards/TimelineCard.vue";
import HandlingProjects from "../../components/Widgets/Cards/HandlingProjects.vue";
import TeamMember from "../../components/Widgets/Cards/TeamMember.vue";
import StoreContent from "../../components/Widgets/Cards/StoreContent.vue";
import WhatsHappening from "../../components/Widgets/Cards/WhatsHappening.vue";

export default defineComponent({
  name: "CardsPage",
  components: {
    BreadCrumb,
    StatsBoxes,
    StatsItem,
    WhatHappening,
    ResolveComplaints,
    AverageSpeedOfAnswer,
    NewContact,
    NewUsers,
    NewLeads,
    CardsStyle,
    CardsStyleTwo,
    CardsStyleThree,
    CardsStyleFour,
    TimelineCard,
    HandlingProjects,
    TeamMember,
    StoreContent,
    WhatsHappening,
  },
});
</script>