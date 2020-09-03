<template>
  <div class="header">
    <router-link :to="{ name: 'mainPage' }">
      <img src="../assets/logo.png" alt="" />
    </router-link>
    <div class="search">
      <input
        type="text"
        class="search-filed"
        v-model="searchValue"
        @keyup.enter="search(searchValue)"
      />
      <i class="material-icons">search</i>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Header',
  data() {
    return {
      searchValue: '',
    };
  },
  computed: {
    ...mapGetters(['SEARCH_VALUE']),
  },
  methods: {
    ...mapActions(['GET_SEARCH_VALUE_TO_VUEX']),
    search(value) {
      this.GET_SEARCH_VALUE_TO_VUEX(value);
      this.$router.push('/catalog');
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3f9c4b;
  padding: 16px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 200px;
  }
  img {
    width: 50px;
  }
  .search-filed {
    // padding: 10px;
    // color: #000000;
    // background-color: #e7e7e7;
    font-size: 16px;
    //
  }
}
</style>
