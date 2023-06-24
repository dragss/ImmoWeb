<template>
  <div>
    <div class="flex items-center" v-if="rate">
      <i v-for="i in parseInt(rate)" :key="i" class="fas fa-star mr-0.5" />
      <i
        v-for="i in 5 - parseInt(rate)"
        :key="'empty-' + i"
        class="far fa-star mr-0.5"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['rate'],
};
</script>
