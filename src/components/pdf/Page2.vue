<template>
  <section class="pdf-page">
    <img src="/template/p2.jpg" />
    <!-- <div class="absolute text-gray-800" style="top: 858px; left: 422px">
      {{ pdfObject.interlocuteur.phone }}
    </div>
    <div class="absolute text-gray-800" style="top: 881px; left: 422px">
      {{ pdfObject.interlocuteur.mail }}
    </div> -->
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
