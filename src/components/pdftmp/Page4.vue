<template>
  <section class="pdf-page">
    <img src="/template/p4.jpg" />
    <div class="absolute" style="top: 350px; left: 78px">
      <div v-if="pdfObject.formValues.type_local != 'Terrain'">
        <strong>Surface habitable :</strong>
        {{ pdfObject.formValues.surface_reelle_bati }} m²
      </div>
      <div>
        <strong>Surface terrain :</strong>
        {{ pdfObject.formValues.surface_terrain }} m²
      </div>
      <div>
        <strong>Pièce(s) :</strong>
        {{ pdfObject.formValues.nombre_pieces_principales }}
      </div>
      <div>
        <strong>Surface séjour :</strong>
        {{ pdfObject.formValues.surface_sejour }} m²
      </div>

      <div>
        <strong>Chambre(s) :</strong> {{ pdfObject.formValues.nombre_chambres }}
      </div>
      <!-- <div>
        <strong>Salle(s) de bain(s) :</strong> {{ pdfObject.nombre_bains }}
      </div> -->
      <div><strong>Cuisine :</strong> {{ pdfObject.formValues.cuisine }}</div>

      <div>
        <strong>Type de chauffage :</strong>
        {{ pdfObject.formValues.chauffage }}
      </div>
      <div>
        <strong>Mode de chauffage :</strong>
        {{ pdfObject.formValues.chauffage_mode }}
      </div>
      <div v-if="pdfObject.formValues.type_local == 'Maison'">
        <strong>Type de toiture :</strong>
        {{ pdfObject.formValues.toiture_type }}
      </div>
      <div>
        <strong>Année de construction :</strong> {{ pdfObject.formValues.year }}
      </div>
      <!--<div><strong>DPE :</strong> {{ pdfObject.dpe }}</div> -->
    </div>

    <div class="absolute" style="top: 350px; left: 424px">
      <div>
        <strong>Type de bien :</strong> {{ pdfObject.formValues.type_local }}
      </div>
      <div v-if="pdfObject.formValues.type_local == 'Appartement'">
        <strong>Étage :</strong> {{ pdfObject.formValues.etage }}
      </div>
      <div><strong>Adresse :</strong> {{ pdfObject.formValues.address }}</div>
      <div>
        <strong>Code postal / Commune :</strong>
        {{ pdfObject.formValues.code_postal }}
        {{ pdfObject.formValues.commune }}
      </div>
      <div><strong>Secteur :</strong> {{ pdfObject.formValues.secteur }}</div>
      <div><strong>A proximité :</strong> {{ pdfObject.formValues.proxy }}</div>
    </div>

    <div class="absolute" style="top: 640px; left: 78px">
      <div>
        <strong>État intérieur :</strong> {{ pdfObject.formValues.insideState }}
      </div>
      <div v-if="pdfObject.formValues.type_local == 'Appartement'">
        <strong>État parties communes :</strong>
        {{ pdfObject.formValues.publicState }}
      </div>
      <div>
        <strong>État de la façade :</strong>
        {{ pdfObject.formValues.frontState }}
      </div>
      <div>
        <strong>État de la toiture :</strong>
        {{ pdfObject.formValues.roofState }}
      </div>
    </div>

    <div class="absolute" style="top: 640px; left: 424px">
      <div v-if="pdfObject.formValues.type_local == 'Appartement'">
        <strong>Charges :</strong> {{ pdfObject.formValues.charges }}
      </div>
      <div>
        <strong>Taxe foncière :</strong>
        {{ pdfObject.formValues.taxeFonciere }} €
      </div>
      <!--<div><strong>Taxe d'habitation :</strong> {{ pdfObject.taxeHabit }}</div>-->
    </div>
    <div
      class="absolute whitespace-pre-line"
      style="top: 805px; left: 78px; max-width: 590px"
    >
      {{ pdfObject.formValues.presentation }}
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
