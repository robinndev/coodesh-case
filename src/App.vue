<template>
  <HeaderComponent />
  <router-view />
</template>

<style lang="scss">
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
  min-height: 93vh !important;
  max-height: 100vh;
  overflow-y: hidden;
}
</style>

<script>
import HeaderComponent from './components/header/HeaderComponent.vue';

export default {
  components: {
    HeaderComponent,
  },
};
</script>
