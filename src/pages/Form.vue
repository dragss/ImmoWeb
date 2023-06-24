<template>
  <div class="flex justify-content py-8 px-5">
    <div class="w-1/2">
      <Form @submit="submit" />
      <!-- <Insee @submit="handleGraph" /> -->
    </div>
    <Pdf :pdfObject="pdfObject" class="w-1/2" />
  </div>
</template>

<script>
import Form from '@/components/form';
import Insee from '@/components/form/Insee';
import Pdf from '@/components/pdftmp';

export default {
  components: {
    Form,
    Insee,
    Pdf,
  },
  methods: {
    submit(pdfObject) {
      this.pdfObject = pdfObject;
    },
    // handleGraph(pdfObject) {
    // this.pdfObject.;
    // },
  },
  data() {
    return {
      pdfObject: {},
    };
  },
};
</script>
