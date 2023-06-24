<template>
  <div class="w-full">
    <div class="flex justify-center p-8">
      <div v-for="(step, index) in steps" :key="index">
        <div
          @click="handleClickStep(index)"
          class="hover:opacity-75"
          :class="{
            'cursor-pointer': index < allowedStep || step.completed,
            'cursor-not-allowed': index > allowedStep && !step.completed,
          }"
        >
          <div
            class="px-8 h-16 text-xl"
            :class="{
              'text-blue-300': index < currentStep || step.completed,
              'text-blue-500': index == currentStep,
              'text-gray-400': index > allowedStep && !step.completed,
            }"
          >
            {{ step.label }}
          </div>
          <div
            class="w-full h-1"
            :class="{
              'bg-blue-300': index < currentStep || step.completed,
              'bg-blue-500': index == currentStep,
              'bg-gray-400': index > allowedStep && !step.completed,
            }"
          ></div>
        </div>
      </div>
    </div>
    <!-- <div
      v-if="steps[allowedStep].completed && allowedStep != 3"
      @click="handleGoNextStep()"
      class="cursor-pointer bg-green-400 text-white font-semibold px-4 py-1 fixed top-28 right-10 rounded-lg border-2 border-green-500"
    >
      Next
      <i class="fas fa-arrow-right" />
    </div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'StepLine',
  created() {
    if (this.$route.path != '/pdf-gen/step/1' && !this.pdfObject)
      this.$router.push('/pdf-gen/step/1');
  },
  computed: {
    ...mapGetters(['allowedStep', 'steps', 'pdfObject']),
    currentStep() {
      return this.$route.path.split('/').pop() - 1;
    },
  },
  methods: {
    ...mapActions(['setAllowedStep']),
    // handleGoNextStep() {
    //   if (this.steps[this.allowedStep].completed) {
    //     let newStep = this.allowedStep + 1;
    //     this.setAllowedStep(newStep);
    //     this.$router.push(this.steps[newStep].path);
    //   }
    // },
    handleClickStep(index) {
      if (this.steps[index].completed || index <= this.allowedStep) {
        this.setAllowedStep(index);
        this.$router.push(this.steps[index].path);
      }
    },
  },
};
</script>
