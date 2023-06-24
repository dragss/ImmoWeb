<template>
  <section class="pdf-page">
    <img src="/template/p8.jpg" />
  </section>
</template>

<script>
export default {
  props: {
    pdfObject: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
