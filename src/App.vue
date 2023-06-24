<template>
  <div id="app">
    <div class="w-full bg-blue-400 shadow-md">
      <router-link to="/">
        <div class="text-white font-semibold text-lg p-2 cursor-pointer">
          Home
        </div>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
