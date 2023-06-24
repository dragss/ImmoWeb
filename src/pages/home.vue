<template>
  <div class="flex justify-center items-center h-screen flex-col">
    <div>
      <button
        class="bg-blue-500 text-white px-8 py-3 text-xl"
        @click="$router.push('/form')"
      >
        Crée un PDF de présentation
      </button>
    </div>
    <SearchPdf />
  </div>
</template>

<script>
import SearchPdf from '@/components/SearchPdf';

export default {
  name: 'Home',
  components: {
    SearchPdf,
  },
};
</script>
