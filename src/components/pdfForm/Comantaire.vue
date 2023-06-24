<template>
  <div>
    <div class="text-xl text-blue-500">COMMENTAIRES</div>

    <textarea
      cols="80"
      rows="10"
      class="border"
      :class="{ 'border-red-500': errorKey.includes('comment') }"
      @change="
        addToInfoForm({
          comment,
        })
      "
      v-model="comment"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  created() {
    this.comment = this.infoForm.comment || '';

    this.addToInfoForm({
      comment: this.comment,
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
      comment: '',
    };
  },
};
</script>
