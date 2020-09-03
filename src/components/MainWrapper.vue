<template>
  <div class="main-wrapper">
    <Header></Header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from '../layouts/Header';
export default {
  name: 'MainWrapper',
  components: {
    Header,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  // max-width: 900px;
  margin: 0 auto;
}
</style>
