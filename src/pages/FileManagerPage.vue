<template>
  <BreadCrumb PageTitle="File Manager" />
  <RecentFiles />
  <DocumentsFiles />
  <AssetsFiles />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BreadCrumb from "../components/Common/BreadCrumb.vue";
import RecentFiles from "../components/FileManager/RecentFiles.vue";
import DocumentsFiles from "../components/FileManager/DocumentsFiles.vue";
import AssetsFiles from "../components/FileManager/AssetsFiles.vue";

export default defineComponent({
  name: "FileManagerPage",
  components: {
    BreadCrumb,
    RecentFiles,
    DocumentsFiles,
    AssetsFiles,
  },
});
</script>