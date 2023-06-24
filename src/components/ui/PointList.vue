<template>
  <div>
    <div>
      <input
        class="border rounded mr-2 p-1"
        v-model="value"
        :class="{ 'border-red-500': error }"
      />
      <button class="rounded bg-green-500 text-white px-3" @click="addItem">
        Ajouter
      </button>
    </div>
    <div>
      <div v-for="(item, index) in items" :key="index" class="mt-2">
        {{ item }}
        <button class="text-red-500 ml-2" @click="removeItem(index)">X</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addItem() {
      if (this.value) {
        this.items.push(this.value);
        this.value = "";
        this.$emit("change", { goodPoint: this.items });
      }
    },
    removeItem(index) {
      this.items.splice(index, 1);
      this.$emit("change", { goodPoint: this.items });
    },
  },
  created() {
    this.items = this.preSet;
  },
  props: {
    error: {
      type: Boolean,
      default: false,
    },
    preSet: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      value: "",
      items: [],
    };
  },
};
</script>
