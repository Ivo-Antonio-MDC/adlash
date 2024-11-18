<template>
  <div
    class="card mb-25 border-0 rounded-0 bg-white letter-spacing cover-image-card"
  >
    <div class="card-body position-relative p-0">
      <img src="../../assets/images/settings.jpg" alt="settings-image" />
      <div class="file-upload text-center bg-white rounded-circle text-primary">
        <i class="flaticon-add-photo"></i>
        <input type="file" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoverImage",
};
</script>
