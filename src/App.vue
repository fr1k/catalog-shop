<template>
  <div id="app">
    <MainWrapper />
  </div>
</template>

<script>
import MainWrapper from '@/components/MainWrapper.vue';
export default {
  name: 'App',
  components: {
    MainWrapper,
  },
  data() {
    return {
      title: 'Vue SHOP',
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  margin-top: 150px;
  text-align: center;
}
</style>
