<script lang="ts">
import {
  userLogin,
} from '@/store/middleware/auth/action'
import selector from '@/store/middleware/auth/selector'
import { CreateElement, VNode } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Auth extends Vue {
  get isReady() {
    return selector.isInitialized(this.$store.state)
  }

  public mounted() {
    this.$store.dispatch(userLogin())
  }

  public render(h: CreateElement): VNode {
    if (this.isReady) {
      if (this.$slots.default && this.$slots.default.length > 0) {
        // slotは1つだけ
        return h('transition', [this.$slots.default[0]])
      }
      return h('')
    }

    return h('transition', [
      h('div', {
        class: {
          boxLoading: true,
        },
      }),
    ])
  }
}
</script>

<style lang="scss" scoped>
.v-enter-active, .v-leave-active {
  transition: opacity .3s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}

.boxLoading {
  width: 50px;
  height: 50px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  &:before {
    content: '';
    width: 50px;
    height: 5px;
    background: #000;
    opacity: 0.1;
    position: absolute;
    top: 59px;
    left: 0;
    border-radius: 50%;
    animation: shadow .5s linear infinite;
  }
  &:after {
    content: '';
    width: 50px;
    height: 50px;
    background: #1A6844;
    animation: animate .5s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 3px;
  }
}

@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, .9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}


@keyframes shadow {
  0%, 100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
</style>
