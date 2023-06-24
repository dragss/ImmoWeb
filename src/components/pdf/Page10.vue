<template>
  <section class="pdf-page">
    <img src="/template/p10.jpg" />
    <div
      class="absolute"
      style="top: 222px; left: 50px"
      v-if="pdfObject.interlocuteur"
    >
      <img :src="pdfObject.interlocuteur.img" style="height: 157px" />
    </div>
    <div
      class="absolute text-white"
      style="top: 224px; left: 210px"
      v-if="pdfObject.interlocuteur"
    >
      <div class="text-3xl">
        {{ pdfObject.interlocuteur.name }}
      </div>
      <div class="py-1">{{ pdfObject.interlocuteur.tag }}</div>
      <div class="mt-3 ml-6">
        {{ pdfObject.interlocuteur.phone }}
      </div>
      <div class="ml-6">
        {{ pdfObject.interlocuteur.mail }}
      </div>
      <div class="ml-6">
        {{ pdfObject.interlocuteur.website }}
      </div>
    </div>
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
