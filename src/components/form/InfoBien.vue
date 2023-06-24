<template>
  <div>
    <div class="text-xl">Informations sur le bien</div>
    <FormulateInput
      key="type_local"
      name="type_local"
      type="select"
      label="Type de bien"
      :options="[
        'Appartement',
        'Maison',
        'Maison de maître',
        'Longère',
        'Propriété',
        'Manoir',
        'Château',
        'Terrain',
        'Local Commercial',
      ]"
    />
    <FormulateInput
      v-if="formValues.type_local == 'Appartement'"
      key="etage"
      name="etage"
      label="Étage"
      type="number"
    />
    <FormulateInput
      key="surface_reelle_bati"
      name="surface_reelle_bati"
      label="Surface habitable"
      type="number"
    />
    <FormulateInput
      key="surface_terrain"
      name="surface_terrain"
      label="Surface du terrain"
      type="number"
    />
    <FormulateInput
      key="nombre_pieces_principales"
      name="nombre_pieces_principales"
      label="Nombre de pièces"
      type="number"
    />
    <FormulateInput
      key="surface_sejour"
      name="surface_sejour"
      label="Surface séjour"
      type="number"
    />
    <FormulateInput
      key="nombre_chambres"
      name="nombre_chambres"
      label="Nombre de chambres"
      type="number"
    />
    <FormulateInput key="secteur" name="secteur" label="Secteur" />
    <FormulateInput
      key="proxy"
      name="proxy"
      label="A proximité"
      type="select"
      :options="['Centre ville', 'Port', 'Mer', 'Commerces', 'Écoles', 'Sans']"
    />
    <FormulateInput
      key="cuisine"
      name="cuisine"
      label="Cuisine"
      type="select"
      :options="['Amenagée', 'Équipée', 'Amenagée et équipée', 'Sans']"
    />
    <FormulateInput
      key="chauffage"
      name="chauffage"
      label="Chauffage"
      type="select"
      :options="[
        'Gaz',
        'Bois',
        'Granulés',
        'Fuel',
        'Électrique',
        'Solaire',
        'Collectif',
        'Individuel',
        'Sans',
      ]"
    />
    <FormulateInput
      key="chauffage_mode"
      name="chauffage_mode"
      label="Mode de Chauffage"
      type="select"
      :options="[
        'Radiateur',
        'Cheminée',
        'Panneau solaire',
        'Chauffage au sol',
        'Poele',
        'Pompe à chaleur',
        'Sans',
      ]"
    />
    <FormulateInput
      v-if="formValues.type_local == 'Maison'"
      key="toiture_type"
      name="toiture_type"
      label="Type de toiture"
      type="select"
      :options="[
        'Ardoises naturelles',
        'Shingle',
        'Fibrociment',
        'Zinc',
        'Bac d\'acier',
        'Tuiles',
        'Bois',
        'Chaume',
        'panneau solaire',
        'Photovoltaïques',
      ]"
    />
    <FormulateInput
      key="year"
      name="year"
      label="Année de construction"
      type="number"
    />
    <FormulateInput
      key="presentation"
      name="presentation"
      label="Présentation du bien"
      type="textarea"
    />
  </div>
</template>

<script>
export default {
  props: {
    formValues: {
      type: Object,
      required: true,
    },
  },
};
</script>
