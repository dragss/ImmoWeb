<template>
  <section class="pdf-page">
    <img src="/template/p3.jpg" />
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
