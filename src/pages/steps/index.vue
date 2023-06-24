<template>
  <div class="pb-10">
    <StepLine />
    <router-view />
  </div>
</template>

<script>
import StepLine from '@/components/StepLine';

export default {
  components: {
    StepLine,
  },
};
</script>
