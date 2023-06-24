<template>
  <div class="flex justify-center">
    <!-- <Similaire :sameSection="sameSection" :selectedAddress="selectedAddress" /> -->
    <PdfForm />
  </div>
</template>

<script>
import PdfForm from '@/components/pdfForm';
// import Similaire from '@/components/Similaire';

export default {
  components: {
    // Similaire,
    PdfForm,
  },
};
</script>
