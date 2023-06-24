<template>
  <section class="pdf-page">
    <img src="/template/p9.jpg" />
    <div class="absolute w-full" style="top: 520px">
      <div class="text-center mt-8">
        <div class="text-2xl">
          Entre
          {{ parseInt(pdfObject.lowPrice).toLocaleString() }} € et
          {{ parseInt(pdfObject.highPrice).toLocaleString() }} € net vendeur
        </div>

        <div class="text-sm text-blue-400" style="margin-left: -80px">
          soit
          <span class="text-black">
            {{ parseInt(mc2lowprice).toLocaleString() }} €
          </span>
          /m2 <span class="mr-12" />soit
          <span class="text-black">
            {{ parseInt(mc2highprice).toLocaleString() }} €
          </span>
          /m2
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    mc2lowprice() {
      let surface =
        parseInt(this.pdfObject.surface_reelle_bati) ||
        parseInt(this.pdfObject.surface_terrain);
      let a = this.pdfObject.lowPrice / surface;
      return parseInt(a);
    },
    mc2highprice() {
      let surface =
        parseInt(this.pdfObject.surface_reelle_bati) ||
        parseInt(this.pdfObject.surface_terrain);
      let b = this.pdfObject.highPrice / surface;
      return parseInt(b);
    },
  },
  props: {
    pdfObject: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
