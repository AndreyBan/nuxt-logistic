<template>
  <div ref="modal" class="modal-window" :class="{'modal-hidden': hideModal}">
    <div class="modal-wrap">
      <div class="modal-close" @click="closeModal" />
      <div class="c-modal-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppModalWindow',
  data: () => ({
    hideModal: false
  }),
  mounted () {
    this.disableOverFlow('hidden')
    // TODO: Можно доработать через @click на .modal-window
    const overClick = (e) => {
      if (getComputedStyle(this.$refs.modal).opacity === '1') {
        if (e.target.classList.contains('modal-window') || e.target.classList.contains('btn')) {
          document.removeEventListener('click', overClick)
          this.closeModal()
        }
      }
    }
    document.querySelector('.modal-window').addEventListener('click', overClick)
  },
  destroyed () {
    this.disableOverFlow('auto')
  },
  methods: {
    disableOverFlow (str) {
      if (matchMedia('(min-width: 1025px)').matches) {
        const margin = str === 'hidden' ? '17px' : '0'
        document.querySelector('body').style.overflow = str
        document.querySelector('html').style.marginRight = margin
        document.querySelector('.main-header').style.paddingRight = margin
      }
    },
    closeModal () {
      this.hideModal = true
      setTimeout(() => this.$emit('close-modal'), 200)
    }
  }
}
</script>
<style scoped>
.modal-window {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, .6);
  z-index: 1000000000;
  opacity: 0;
  animation: show ease-in .2s forwards;
}

.modal-window.modal-hidden {
  animation: hide ease-out .2s forwards;
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes hide {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.modal-wrap {
  background-color: #FFFFFF;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, .25);
  max-width: 600px;
  position: relative;
  border-radius: 40px;
}

.modal-close {
  position: absolute;
  right: 36px;
  top: 38px;
  width: 24px;
  height: 24px;
  z-index: 11;
  background-color: #B2B2B2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.modal-close:before,
.modal-close:after {
  content: '';
  position: absolute;
  height: 62%;
  width: 2px;
  background-color: #FFF;
}

.modal-close:before {
  transform: rotate(45deg);
}

.modal-close:after {
  transform: rotate(-45deg);
}

@media (max-width: 767px) {
  .modal-wrap {
    width: 100%;
  }

  .modal-close {
    top: 36px;
  }
}
</style>
