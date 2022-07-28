<template>
  <section class="s-pt">
    <div class="container">
      <h1>Авторизация</h1>
      <form class="fields-grid b-mt s-mb" @submit.prevent="submitForm">
        <SimpleInput
          v-model="$v.form.login.value.$model"
          label="Логин"
          :error="form.login.error"
          required="required"
          @input="resetError(form.login)"
        />
        <div class="field-wrap">
          <SimpleInput
            v-model="$v.form.password.value.$model"
            :type="hidePassword ? 'password' : 'text'"
            :error="form.password.error"
            label="Пароль"
            required="required"
            @input="resetError(form.password)"
          />
          <div title="Показать пароль" @mousedown="toggleEye" @mouseup="toggleEye">
            <ShowSvg :id="hidePassword ? 'eye-show' : 'eye-hide'" />
          </div>
        </div>
        <button type="submit" class="btn btn--primary btn--w-auto">
          Войти
        </button>
        <NuxtLink to="/recovery-pass/" class="btn btn--secondary btn--w-auto">
          Забыли пароль
        </NuxtLink>
      </form>
    </div>
    <div class="bottom-img e-big-mt" />
  </section>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'
import SimpleInput from '@/components/fields/SimpleInput'
import ShowSvg from '@/components/helpers/ShowSvg'

export default {
  name: 'RecoveryPass',
  components: {
    SimpleInput,
    ShowSvg
  },
  mixins: [validationMixin],
  data () {
    return {
      form: {
        login: {
          value: '',
          error: ''
        },
        password: {
          value: '',
          error: ''
        }
      },
      hidePassword: true
    }
  },
  methods: {
    toggleEye () {
      this.hidePassword = !this.hidePassword
    },
    submitForm () {
      this.checkErrorAuth()
      return false
    },
    resetError (target) {
      target.error = ''
    },
    checkErrorAuth () {
      this.$v.form.login.value.$touch()
      this.$v.form.password.value.$touch()
      if (!this.$v.form.login.value.required) {
        this.form.login.error = 'Заполните поле'
      }
      if (!this.$v.form.password.value.required) {
        this.form.password.error = 'Заполните поле'
      }
      // TODO: Test
      if (!this.$v.form.login.value.$error && !this.$v.form.password.value.$error) {
        if (this.form.login.value !== 'test' || this.form.password.value !== 'test') {
          this.form.password.error = 'Введен неверный логин и/или пароль'
        } else {
          alert('Вход выполнен')
        }
      }
    }
  },
  validations: {
    form: {
      login: {
        value: {
          required,
          maxLength: maxLength(30)
        }
      },
      password: {
        value: {
          required,
          maxLength: maxLength(30)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.eye-show,
.eye-hide{
  width: 24px;
  height: 24px;
  fill: #878787;
  position: absolute;
  right: 14px;
  top: 8px;
  cursor: pointer;
  pointer-events: auto;
}
.field-wrap{
  position: relative;
}
.fields-grid {
  display: grid;
  grid-template: auto / 1fr 1fr auto auto;
  justify-content: space-between;
  column-gap: 24px;

  .btn {
    max-height: 41px;
    max-width: 200px;
    justify-self: flex-end;
  }
}

.bottom-img {
  height: 644px;
  background-image: url("/img/backgrounds/bg-auth-page.jpg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
}

@media screen and (max-width: 830px) {
  .fields-grid {
    grid-template: auto / 1fr 1fr;

    .btn {
      width: 100%;
      max-width: 100%;
    }
  }
  .bottom-img {
    height: 500px;
  }
}

@media screen and (max-width: 560px) {
  .fields-grid {
    grid-template: auto / 1fr;

    .btn--primary {
      margin-bottom: 24px;
    }
  }
  .v-select {
    margin-bottom: 28px;
  }
  .bottom-img {
    height: 360px;
    background-position: 50% 0;
  }
}
</style>
