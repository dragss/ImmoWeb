<template>
  <div>
    <input
      type="range"
      :name="name"
      v-model="value"
      @change="$emit('change', { [name]: parseInt(value) })"
      min="0"
      max="5"
      value="0"
    />
    <span class="mx-2">{{ value }}/5</span>
    <label>{{ name }}</label>
  </div>
</template>

<script>
export default {
  name: "Rate",
  mounted() {
    this.value = this.preSet;
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    preSet: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      value: 0,
    };
  },
};
</script>
