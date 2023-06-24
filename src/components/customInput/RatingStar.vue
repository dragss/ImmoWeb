<template>
  <div>
    <input
      type="range"
      :name="name"
      v-model="context.model"
      min="0"
      max="5"
      value="0"
    />
    <span class="mx-2">{{ context.model }}/5</span>
    <label>{{ name }}</label>
  </div>
</template>

<script>
export default {
  name: 'RatingStar',
  props: {
    name: {
      type: String,
      required: true,
    },
    context: {
      type: Object,
      required: true,
    },
  },
};
</script>
