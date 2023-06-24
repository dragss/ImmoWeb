<template>
  <div>
    <div class="text-xl">Evaluation du bien</div>
    <FormulateInput
      :options="[
        'Proximité des commerces',
        'Environnement privilégié ',
        'Quartier résidentiel',
        'Emplacement stratégique',
        'Coeur de ville',
        'Quartier historique',
        'Vue mer',
        'Vue mer spectaculaire',
        'Vue dégagée',
        'Vue exceptionnelle',
        'Bon état général (finitions)',
        'Très bon état',
        'Etat impeccable',
        'Etat proche du neuf',
        'Etat neuf',
        'Prestations de qualité',
        'Prestations haut de gamme',
        'Immeuble de caractère',
        'Immeuble de bon standing',
        'Immeuble de grand standing',
        'Maison individuelle non mitoyenne',
        'Maison de caractère',
        'Bonne Exposition',
        'Belle luminosité',
        'Logement économe',
        'Faibles charges',
        'Dernier étage',
        'Ascenseur',
        'Balcon',
        'Terrasse',
        'Garage',
        'Stationnement privatif',
        'Cave',
        'Sous-sol',
        'Sous-sol complet',
        'Cuisine haut de gamme',
        'Piscine',
        'Terrain piscinable',
      ]"
      type="checkbox"
      label="Points fort"
      name="goodPoint"
    />

    <FormulateInput
      label="Situation"
      type="range"
      name="rate_situation"
      min="0"
      max="5"
      value="0"
      validation="required|min:0|max:5"
      error-behavior="live"
      show-value="true"
    />
    <FormulateInput
      label="Standing"
      type="range"
      name="rate_standing"
      min="0"
      max="5"
      value="0"
      validation="required|min:0|max:5"
      error-behavior="live"
      show-value="true"
    />
    <FormulateInput
      label="Luminosité"
      type="range"
      name="rate_luminosity"
      min="0"
      max="5"
      value="0"
      validation="required|min:0|max:5"
      error-behavior="live"
      show-value="true"
    />
    <FormulateInput
      label="Vue"
      type="range"
      name="rate_view"
      min="0"
      max="5"
      value="0"
      validation="required|min:0|max:5"
      error-behavior="live"
      show-value="true"
    />
    <FormulateInput
      label="Calme"
      type="range"
      name="rate_calm"
      min="0"
      max="5"
      value="0"
      validation="required|min:0|max:5"
      error-behavior="live"
      show-value="true"
    />
    <FormulateInput
      label="Agencement"
      type="range"
      name="rate_agencement"
      min="0"
      max="5"
      value="0"
      validation="required|min:0|max:5"
      error-behavior="live"
      show-value="true"
    />
    <FormulateInput
      name="comment"
      label="Ajouter un commentaire"
      type="textarea"
    />
  </div>
</template>
