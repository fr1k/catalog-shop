<template>
  <div class="notification">
    <transition-group name="transition-animate" class="message_list">
      <div
        class="notification__content"
        v-for="message in messages"
        :key="message.id"
        :class="message.icon"
      >
        <div class="content__text">
          <span>{{ message.name }}</span>
          <i class="material-icons">{{ message.icon }}</i>
        </div>
        <div class="content__buttons">
          <button v-if="leftButton.length">{{ leftButton }}</button>
          <button v-if="rightButton.length">{{ rightButton }}</button>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
    rightButton: {
      type: String,
      default: '',
    },
    leftButton: {
      type: String,
      default: '',
    },
    timeOut: {
      type: Number,
      default: 3000,
    },
  },
  methods: {
    hideNotification() {
      if (this.messages.length) {
        setTimeout(() => {
          this.messages.splice(this.messages.length - 1, 1);
        }, this.timeOut);
      }
    },
  },
  mounted() {
    this.hideNotification();
  },
  watch: {
    messages() {
      this.hideNotification();
    },
  },
};
</script>

<style lang="scss" scoped>
.notification {
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 10;
  .message_list {
    // display: flex;
    // flex-direction: column;
  }

  &__content {
    padding: 16px;
    background-color: #457a99;
    border-radius: 4px;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-bottom: 10px;

    &.error {
      background: red;
    }
    &.warning {
      background: orange;
    }
    &.check_circle {
      background: green;
    }
  }
  .content {
    &__text {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .material-icons {
    margin-left: 8px;
  }
}
.transition-animate {
  &-enter {
    transform: translateX(120px);
    opacity: 0;
  }
  &-enter-active {
    transition: all 0.6s ease;
  }
  &-enter-to {
    opacity: 1;
  }

  &-leave {
    height: 50px;
    opacity: 1;
  }
  &-leave-active {
    transition: transform 0.6s ease, opacity 0.6s, height 0.6s 0.2s;
  }
  &-leave-to {
    height: 0px;
    transform: translateX(120px);
    opacity: 0;
  }
  &-move {
    transition: transform 0.6s ease;
  }
}
</style>
