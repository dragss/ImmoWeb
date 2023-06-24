<template>
  <section class="pdf-page relative">
    <img src="/template/p1.jpg" />
    <div class="absolute" style="top: 117px; left: 158px">
      {{ pdfObject.statut == 'Non communiqué' ? '' : pdfObject.statut }}
      {{ pdfObject.name }},
    </div>
    <div class="absolute" style="top: 137px; left: 88px">
      {{ typeDuBien }} à {{ pdfObject.commune }},
    </div>
    <div class="absolute" style="top: 160px; left: 50px">
      {{ pdfObject.complete_address }}
    </div>
    <div class="absolute text-white" style="top: 120px; left: 590px">
      {{ date }}
    </div>
    <div
      class="absolute text-white font-thin pb-5 pr-10"
      style="top: 950px; left: 74px; background-color: #0098d4"
    >
      {{ pdfObject.interlocuteur.workspace }}
    </div>
    <div class="absolute text-white font-thin" style="top: 980px; left: 74px">
      {{ pdfObject.interlocuteur.name }}
    </div>
    <div class="absolute text-white font-thin" style="top: 1010px; left: 74px">
      {{ pdfObject.interlocuteur.phone }}
    </div>
    <div class="absolute text-white font-thin" style="top: 1040px; left: 74px">
      {{ pdfObject.interlocuteur.mail }}
    </div>
    <div
      class="absolute text-white font-thin pb-5 pr-10"
      style="top: 1070px; left: 74px; background-color: #0098d4"
    >
      {{ pdfObject.interlocuteur.website }}
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    surface() {
      return (
        parseInt(this.pdfObject.terrain) || parseInt(this.pdfObject.surface)
      );
    },
    typeDuBien() {
      let type = {
        'Maison de maître': 'une',
        Longère: 'une',
        Propriété: 'une',
        Manoir: 'un',
        Château: 'un',
        Maison: 'une',
        Appartement: 'un',
        'Local commercial': 'un',
        Terrain: 'un',
      };
      return type[this.pdfObject.type_local] + ' ' + this.pdfObject.type_local;
    },
    date() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      return `${dd}.${mm}.${yyyy}`;
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
