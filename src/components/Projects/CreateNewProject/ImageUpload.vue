<template>
  <div class="file-upload text-center position-relative">
    <!-- <i class="flaticon-gallery-1"></i> -->
    <img :src="imageUrl" alt="Uploaded Image" class="preview-image" />
    <span class="d-block text-muted">
      Drop Files Here Or
      <span @click="uploadImage" class="text-black fw-medium position-relative">
        Click To Upload
      </span>
    </span>
    <input
      type="file"
      class="d-block shadow-none border-0 position-absolute start-0 end-0 top-0 bottom-0 z-1 opacity-0"
      ref="fileInput"
      @change="handleFileChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImageUpload",
  data() {
    return {
      selectedFile: null as File | null,
      imageUrl: "",
    };
  },
  methods: {
    handleFileChange(event: Event) {
      const input = event.target as HTMLInputElement;
      this.selectedFile = input.files?.[0] || null;
      this.previewImage();
    },
    previewImage() {
      if (this.selectedFile) {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.imageUrl = event.target?.result as string;
        };
        reader.readAsDataURL(this.selectedFile);
      } else {
        this.imageUrl = "";
      }
    },
    async uploadImage() {
      if (!this.selectedFile) return;

      const formData = new FormData();
      formData.append("image", this.selectedFile);

      try {
        const response = await fetch("/upload-endpoint", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const responseData = await response.json();
          this.imageUrl = responseData.imageUrl; // Assuming the API returns the image URL
        } else {
          console.error("Image upload failed.");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    },
  },
});
</script>

<style scoped>
.preview-image {
  max-width: 100%;
  max-height: 300px;
  margin-bottom: 30px;
}
</style>