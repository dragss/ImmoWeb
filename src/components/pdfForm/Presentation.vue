<template>
  <div>
    <div class="text-xl text-blue-500">PRÉSENTATION DU BIEN</div>

    <textarea
      cols="80"
      rows="10"
      class="border rounded p-1"
      :class="{ 'border-red-500': errorKey.includes('presentation') }"
      @change="
        addToInfoForm({
          presentation,
        })
      "
      v-model="presentation"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  created() {
    this.presentation = this.infoForm.presentation || '';

    this.addToInfoForm({
      presentation: this.presentation,
    });
  },
  computed: {
    ...mapGetters(['infoForm']),
  },
  methods: {
    ...mapActions(['addToInfoForm']),
  },
  props: {
    errorKey: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      presentation: '',
    };
  },
};
</script>
