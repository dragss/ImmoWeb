<template>
  <section class="pdf-page">
    <img src="/template/p4.jpg" />
    <div class="absolute" style="top: 350px; left: 78px">
      <div v-if="pdfObject.type_local != 'Terrain'">
        <strong>Surface habitable :</strong>
        {{ pdfObject.surface_reelle_bati }} m²
      </div>
      <div>
        <strong>Surface terrain :</strong> {{ pdfObject.surface_terrain }} m²
      </div>
      <div>
        <strong>Pièce(s) :</strong> {{ pdfObject.nombre_pieces_principales }}
      </div>
      <div>
        <strong>Surface séjour :</strong>
        {{ pdfObject.surface_sejour }} m²
      </div>

      <div><strong>Chambre(s) :</strong> {{ pdfObject.nombre_chambres }}</div>
      <!-- <div>
        <strong>Salle(s) de bain(s) :</strong> {{ pdfObject.nombre_bains }}
      </div> -->
      <div><strong>Cuisine :</strong> {{ pdfObject.cuisine }}</div>

      <div><strong>Type de chauffage :</strong> {{ pdfObject.chauffage }}</div>
      <div>
        <strong>Mode de chauffage :</strong> {{ pdfObject.chauffage_mode }}
      </div>
      <div v-if="pdfObject.type_local == 'Maison'">
        <strong>Type de toiture :</strong> {{ pdfObject.toiture_type }}
      </div>
      <div><strong>Année de construction :</strong> {{ pdfObject.year }}</div>
      <!--<div><strong>DPE :</strong> {{ pdfObject.dpe }}</div> -->
    </div>

    <div class="absolute" style="top: 350px; left: 424px">
      <div><strong>Type de bien :</strong> {{ pdfObject.type_local }}</div>
      <div v-if="pdfObject.type_local == 'Appartement'">
        <strong>Étage :</strong> {{ pdfObject.etage }}
      </div>
      <div><strong>Adresse :</strong> {{ pdfObject.complete_address }}</div>
      <div>
        <strong>Code postal / Commune :</strong> {{ pdfObject.code_postal }}
        {{ pdfObject.commune }}
      </div>
      <div><strong>Secteur :</strong> {{ pdfObject.secteur }}</div>
      <div><strong>A proximité :</strong> {{ pdfObject.proxy }}</div>
    </div>

    <div class="absolute" style="top: 640px; left: 78px">
      <div><strong>État intérieur :</strong> {{ pdfObject.insideState }}</div>
      <div v-if="pdfObject.type_local == 'Appartement'">
        <strong>État parties communes :</strong> {{ pdfObject.publicState }}
      </div>
      <div><strong>État de la façade :</strong> {{ pdfObject.frontState }}</div>
      <div><strong>État de la toiture :</strong> {{ pdfObject.roofState }}</div>
    </div>

    <div class="absolute" style="top: 640px; left: 424px">
      <div v-if="pdfObject.type_local == 'Appartement'">
        <strong>Charges :</strong> {{ pdfObject.charges }}
      </div>
      <div><strong>Taxe foncière :</strong> {{ pdfObject.taxeFonciere }} €</div>
      <!--<div><strong>Taxe d'habitation :</strong> {{ pdfObject.taxeHabit }}</div>-->
    </div>
    <div
      class="absolute whitespace-pre-line"
      style="top: 805px; left: 78px; max-width: 590px"
    >
      {{ pdfObject.presentation }}
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
