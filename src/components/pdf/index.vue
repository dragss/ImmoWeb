<template>
  <section>
    <Page1 :pdfObject="pdfObject" />
    <Page2 :pdfObject="pdfObject" />
    <Page3 :pdfObject="pdfObject" />
    <Page4 :pdfObject="pdfObject" />
    <Page5 :pdfObject="pdfObject" />
    <Page6 :pdfObject="pdfObject" />
    <Page7 :pdfObject="pdfObject" />
    <Page8 :pdfObject="pdfObject" />
    <Page9 :pdfObject="pdfObject" />
    <Page10 :pdfObject="pdfObject" />
  </section>
</template>

<script>
import Page1 from './Page1.vue';
import Page2 from './Page2.vue';
import Page3 from './Page3.vue';
import Page4 from './Page4.vue';
import Page5 from './Page5.vue';
import Page6 from './Page6.vue';
import Page7 from './Page7.vue';
import Page8 from './Page8.vue';
import Page9 from './Page9.vue';
import Page10 from './Page10.vue';

export default {
  components: {
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page9,
    Page10,
  },
  props: {
    pdfObject: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
