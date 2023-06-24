<template>
  <section class="pdf-page relative">
    <img src="/template/p1.jpg" />
    <div class="absolute" style="top: 117px; left: 158px">
      {{
        pdfObject.formValues.client_grender == 'Non communiqué'
          ? ''
          : pdfObject.formValues.client_grender
      }}
      {{ pdfObject.formValues.client_name }},
    </div>
    <div class="absolute" style="top: 137px; left: 88px">
      {{ typeDuBien }} à {{ pdfObject.formValues.commune }},
    </div>
    <div class="absolute" style="top: 160px; left: 50px">
      {{ pdfObject.formValues.address }}
    </div>
    <div class="absolute text-white" style="top: 120px; left: 590px">
      {{ new Date(pdfObject.dateUpdate).toLocaleDateString('fr') }}
    </div>
    <div
      class="absolute text-white font-thin pb-5 pr-10"
      style="top: 950px; left: 74px; background-color: #0098d4"
    >
      {{ interlocuteur.workspace }}
    </div>
    <div class="absolute text-white font-thin" style="top: 980px; left: 74px">
      {{ interlocuteur.name }}
    </div>
    <div class="absolute text-white font-thin" style="top: 1010px; left: 74px">
      {{ interlocuteur.phone }}
    </div>
    <div class="absolute text-white font-thin" style="top: 1040px; left: 74px">
      {{ interlocuteur.mail }}
    </div>
    <div
      class="absolute text-white font-thin pb-5 pr-10"
      style="top: 1070px; left: 74px; background-color: #0098d4"
    >
      {{ interlocuteur.website }}
    </div>
  </section>
</template>

<script>
import users from '@/assets/users';

export default {
  computed: {
    interlocuteur() {
      return users.find(
        (user) => user.name === this.pdfObject.formValues.interlocuteur
      );
    },
    surface() {
      return (
        parseInt(this.pdfObject.formValues.surface_terrain) ||
        parseInt(this.pdfObject.formValues.surface_reelle_bati)
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
      return (
        type[this.pdfObject.formValues.type_local] +
        ' ' +
        this.pdfObject.formValues.type_local
      );
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
