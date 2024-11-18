<template>
  <div class="card mb-25 border-0 rounded-0 bg-white add-product-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <div id="standalone-container" class="mb-0">
        <QuillEditor
          theme="snow"
          placeholder="Write your meta description"
          toolbar="full"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BlotFormatter from "quill-blot-formatter";
import ImageUploader from "quill-image-uploader";
import axios from "axios";

export default defineComponent({
  name: "EditorsContent",
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