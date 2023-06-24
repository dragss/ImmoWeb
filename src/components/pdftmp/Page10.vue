<template>
  <section class="pdf-page">
    <img src="/template/p10.jpg" />
    <div class="absolute" style="top: 222px; left: 50px" v-if="interlocuteur">
      <img :src="interlocuteur.img" style="height: 157px" />
    </div>
    <div
      class="absolute text-white"
      style="top: 224px; left: 210px"
      v-if="interlocuteur"
    >
      <div class="text-3xl">
        {{ interlocuteur.name }}
      </div>
      <div class="py-1">{{ interlocuteur.tag }}</div>
      <div class="mt-3 ml-6">
        {{ interlocuteur.phone }}
      </div>
      <div class="ml-6">
        {{ interlocuteur.mail }}
      </div>
      <div class="ml-6">
        {{ interlocuteur.website }}
      </div>
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
  },
  props: {
    pdfObject: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
