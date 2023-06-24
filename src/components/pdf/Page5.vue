<template>
  <section class="pdf-page">
    <img src="/template/p5.jpg" />
    <RateRender
      class="absolute text-white text-lg"
      style="top: 250px; left: 100px"
      :rate="pdfObject.formValues.rate_situation"
    />
    <RateRender
      class="absolute text-white text-lg"
      style="top: 288px; left: 100px"
      :rate="pdfObject.formValues.rate_standing"
    />
    <RateRender
      class="absolute text-white text-lg"
      style="top: 325px; left: 100px"
      :rate="pdfObject.formValues.rate_luminosity"
    />
    <RateRender
      class="absolute text-white text-lg"
      style="top: 250px; left: 400px"
      :rate="pdfObject.formValues.rate_view"
    />
    <RateRender
      class="absolute text-white text-lg"
      style="top: 288px; left: 400px"
      :rate="pdfObject.formValues.rate_calm"
    />
    <RateRender
      class="absolute text-white text-lg"
      style="top: 325px; left: 400px"
      :rate="pdfObject.formValues.rate_agencement"
    />

    <div
      class="absolute flex flex-wrap"
      style="top: 485px; left: 120px; max-width: 578px; height: 120px"
    >
      <div class="w-1/2" v-for="point in pdfObject.goodPoint" :key="point">
        - {{ point }}
      </div>
    </div>

    <div
      class="absolute whitespace-pre-line"
      style="top: 720px; left: 110px; max-width: 590px"
    >
      {{ pdfObject.comment }}
    </div>
  </section>
</template>

<script>
import RateRender from './RateRender';

export default {
  components: { RateRender },
  props: {
    pdfObject: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
