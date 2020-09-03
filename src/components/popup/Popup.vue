<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class="popup">
      <div class="popup__header">
        <span>{{ popupTitle }}</span>
        <span
          ><i class="material-icons" @click="closePopup"
            >close</i
          ></span
        >
      </div>
      <div class="popup__content">
        <slot></slot>
      </div>
      <div class="popup__footer">
        <button class="close_modal_btn" @click="closePopup">
          Close
        </button>
        <button class="submit_btn" @click="rightBtnAction">
          {{ rightBtnTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    rightBtnTitle: {
      type: String,
      default: 'Ok',
    },
    popupTitle: {
      type: String,
      default: 'Popup Title',
    },
  },
  methods: {
    closePopup() {
      this.$emit('closePopup');
    },
    rightBtnAction() {
      this.$emit('rightBtnAction');
    },
  },
  mounted() {
    document.addEventListener('click', (item) => {
      if (item.target === this.$refs['popup_wrapper']) {
        this.closePopup();
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.popup_wrapper {
  background: rgba($color: #5a5a5a, $alpha: 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .popup {
    padding: 16px;
    position: fixed;
    top: 50px;
    width: 400px;
    background: #ffffff;
    box-shadow: 0 0 20px 0 #e7e7e7;
    z-index: 10;
    &__header,
    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .submit_btn {
      padding: 8px;
      color: #ffffff;
      background-color: rgb(28, 117, 55);
    }
    .close_modal_btn {
      padding: 8px;
      color: #ffffff;
      background-color: rgb(117, 28, 28);
    }
  }
}
</style>
