<template>
  <div id="app">
    <div class="v-select">
      <p class="title" @click="isOptionsVisible = !isOptionsVisible">
        {{ selected }}
      </p>
      <div class="v-select__options" v-if="isOptionsVisible">
        <p
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
        >
          {{ option.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-select',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isOptionsVisible: false,
    };
  },
  mounted() {
    document.addEventListener(
      'click',
      this.hideSelect.bind(this),
      true
    );
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect);
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option);
      this.hideSelect();
    },
    hideSelect() {
      this.isOptionsVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  max-width: 200px;
  margin: 10px;
  // text-align: center;
}
.v-select {
  position: relative;
  width: 200px;
  background-color: #ffffff;
  .title {
    border: 1px solid rgb(146, 146, 146);
    cursor: pointer;
  }
  p {
    margin: 0;
  }
  &__options {
    background-color: #ffffff;
    border: 1px solid rgb(146, 146, 146);
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    :hover {
      background: rgb(189, 189, 189);
      color: #ffffff;
      cursor: pointer;
    }
  }
}
</style>
