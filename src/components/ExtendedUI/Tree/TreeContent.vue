<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-md-20 mb-xl-25">Basic Tree</h5>
      <div class="border p-2 p-lg-4">
        <div class="tree-container">
          <Tree
            :nodes="data"
            :use-checkbox="true"
            :use-icon="true"
            use-row-delete
          />
        </div>
      </div>
      <div class="position-relative mt-25">
        <button
          class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute mt-10 me-10 top-0 end-0"
          data-clipboard-target="#basicTreeCode"
        >
          Copy
        </button>
        <pre class="line-numbers mh-100 bg-gray pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicTreeCode">
<div>&lt;Tree
  :nodes="data"
  :use-checkbox="true"
  :use-icon="true"
  use-row-delete
/&gt;</div>

<div>&lt;script lang="ts"&gt;</div>
<div>import { defineComponent, ref } from "vue";
import Tree from "vue3-tree";
import "vue3-tree/dist/style.css";

export default defineComponent({
  name: "TreeContent",
  components: {
    Tree,
  },
  setup() {
    const data = ref([
      {
        id: 1,
        label: "node-0",
        nodes: [
          {
            id: "0-0",
            label: "node-0-0",
            nodes: [
              {
                id: "0-0-0",
                label: "node-0-0-0",
              },
              {
                id: "0-0-1",
                label: "node-0-0-1",
              },
              {
                id: "0-0-2",
                label: "node-0-0-2",
              },
            ],
          },
          {
            id: "0-1",
            label: "node-0-1",
            nodes: [
              {
                id: "0-1-0",
                label: "node-0-1-0",
              },
              { id: "0-1-1", label: "node-0-1-1" },
              {
                id: "0-1-2",
                label: "node-0-1-2",
              },
            ],
          },
          {
            id: "0-2",
            label: "node-0-2",
            nodes: [
              {
                id: "0-2-0",
                label: "node-0-2-0",
              },
              {
                id: "0-2-1",
                label: "node-0-2-1",
              },
              {
                id: "0-2-2",
                label: "node-0-2-2",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: "node-1",
        nodes: [
          {
            id: "1-0",
            label: "node-1-0",
            nodes: [
              {
                id: "1-0-0",
                label: "node-1-0-0",
              },
              {
                id: "1-0-1",
                label: "node-1-0-1",
              },
              {
                id: "1-0-2",
                label: "node-1-0-2",
              },
            ],
          },
          {
            id: "1-1",
            label: "node-1-1",
            nodes: [
              {
                id: "1-1-0",
                label: "node-1-1-0",
              },
              {
                id: "1-1-1",
                label: "node-1-1-1",
              },
              {
                id: "1-1-2",
                label: "node-1-1-2",
              },
            ],
          },
          {
            id: "1-2",
            label: "node-1-2",
            nodes: [
              {
                id: "1-2-0",
                label: "node-1-2-0",
              },
              {
                id: "1-2-1",
                label: "node-1-2-1",
              },
              {
                id: "1-2-2",
                label: "node-1-2-2",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        label: "node-2",
        nodes: [
          {
            id: "2-0",
            label: "node-2-0",
            nodes: [
              {
                id: "2-0-0",
                label: "node-2-0-0",
              },
              {
                id: "2-0-1",
                label: "node-2-0-1",
              },
              {
                id: "2-0-2",
                label: "node-2-0-2",
              },
            ],
          },
          {
            id: "2-1",
            label: "node-2-1",
            nodes: [
              {
                id: "2-1-0",
                label: "node-2-1-0",
              },
              {
                id: "2-1-1",
                label: "node-2-1-1",
              },
              {
                id: "2-1-2",
                label: "node-2-1-2",
              },
            ],
          },
          {
            id: "2-2",
            label: "node-2-2",
            nodes: [
              {
                id: "2-2-0",
                label: "node-2-2-0",
              },
              {
                id: "2-2-1",
                label: "node-2-2-1",
              },
              {
                id: "2-2-2",
                label: "node-2-2-2",
              },
            ],
          },
        ],
      },
    ]);
    const onNodeExpanded = (node, state) => {
      console.log("state: ", state);
      console.log("node: ", node);
    };

    const onUpdate = (nodes) => {
      console.log("nodes:", nodes);
    };

    const onNodeClick = (node) => {
      console.log(node);
    };

    return {
      data,
      onNodeExpanded,
      onUpdate,
      onNodeClick,
    };
  },
});
</div>
<div>&lt;/script&gt;</div>
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Tree from "vue3-tree";
import "vue3-tree/dist/style.css";

export default defineComponent({
  name: "TreeContent",
  components: {
    Tree,
  },
  setup() {
    const data = ref([
      {
        id: 1,
        label: "node-0",
        nodes: [
          {
            id: 1,
            label: "node-0-0",
            nodes: [
              {
                id: "0-0-0",
                label: "node-0-0-0",
              },
              {
                id: "0-0-1",
                label: "node-0-0-1",
              },
              {
                id: "0-0-2",
                label: "node-0-0-2",
              },
            ],
          },
          {
            id: 2,
            label: "node-0-1",
            nodes: [
              {
                id: "0-1-0",
                label: "node-0-1-0",
              },
              { id: "0-1-1", label: "node-0-1-1" },
              {
                id: "0-1-2",
                label: "node-0-1-2",
              },
            ],
          },
          {
            id: 3,
            label: "node-0-2",
            nodes: [
              {
                id: "0-2-0",
                label: "node-0-2-0",
              },
              {
                id: "0-2-1",
                label: "node-0-2-1",
              },
              {
                id: "0-2-2",
                label: "node-0-2-2",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: "node-1",
        nodes: [
          {
            id: 1,
            label: "node-1-0",
            nodes: [
              {
                id: "1-0-0",
                label: "node-1-0-0",
              },
              {
                id: "1-0-1",
                label: "node-1-0-1",
              },
              {
                id: "1-0-2",
                label: "node-1-0-2",
              },
            ],
          },
          {
            id: 2,
            label: "node-1-1",
            nodes: [
              {
                id: "1-1-0",
                label: "node-1-1-0",
              },
              {
                id: "1-1-1",
                label: "node-1-1-1",
              },
              {
                id: "1-1-2",
                label: "node-1-1-2",
              },
            ],
          },
          {
            id: 3,
            label: "node-1-2",
            nodes: [
              {
                id: "1-2-0",
                label: "node-1-2-0",
              },
              {
                id: "1-2-1",
                label: "node-1-2-1",
              },
              {
                id: "1-2-2",
                label: "node-1-2-2",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        label: "node-2",
        nodes: [
          {
            id: 1,
            label: "node-2-0",
            nodes: [
              {
                id: "2-0-0",
                label: "node-2-0-0",
              },
              {
                id: "2-0-1",
                label: "node-2-0-1",
              },
              {
                id: "2-0-2",
                label: "node-2-0-2",
              },
            ],
          },
          {
            id: 2,
            label: "node-2-1",
            nodes: [
              {
                id: "2-1-0",
                label: "node-2-1-0",
              },
              {
                id: "2-1-1",
                label: "node-2-1-1",
              },
              {
                id: "2-1-2",
                label: "node-2-1-2",
              },
            ],
          },
          {
            id: 3,
            label: "node-2-2",
            nodes: [
              {
                id: "2-2-0",
                label: "node-2-2-0",
              },
              {
                id: "2-2-1",
                label: "node-2-2-1",
              },
              {
                id: "2-2-2",
                label: "node-2-2-2",
              },
            ],
          },
        ],
      },
    ]);
    const onNodeExpanded = (node, state) => {
      console.log("state: ", state);
      console.log("node: ", node);
    };

    const onUpdate = (nodes) => {
      console.log("nodes:", nodes);
    };

    const onNodeClick = (node) => {
      console.log(node);
    };

    return {
      data,
      onNodeExpanded,
      onUpdate,
      onNodeClick,
    };
  },
});
</script>