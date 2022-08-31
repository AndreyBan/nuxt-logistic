<template>
  <div class="container">
    <h1 class="b-mt b-mb">
      Style Guide
    </h1>
    <div class="block">
      <h2 class="b-mb">
        Titles
      </h2>
      <h2 class="b-mb">
        Desktop
      </h2>
      <table>
        <tr>
          <td><h1>H1</h1></td>
          <td>
            <h1>Montserrat/ 30 px/ semibold</h1>
          </td>
        </tr>
        <tr>
          <td><h2>H2</h2></td>
          <td>
            <h2>Montserrat/ 26 px/ semibold</h2>
          </td>
        </tr>
        <tr>
          <td><h3>H3</h3></td>
          <td>
            <h3>Montserrat/ 20 px/ semibold</h3>
          </td>
        </tr>
      </table>
      <h2 class="b-mb b-mt">
        Tablet
      </h2>
      <table>
        <tr>
          <td><h1>H1</h1></td>
          <td>
            <h1>
              Montserrat/ 26 px/ semibold
            </h1>
          </td>
        </tr>
        <tr>
          <td><h2>H2</h2></td>
          <td>
            <h2>
              Montserrat/ 24 px/ semibold
            </h2>
          </td>
        </tr>
        <tr>
          <td><h3>H3</h3></td>
          <td>
            <h3>
              Montserrat/ 20 px/ semibold
            </h3>
          </td>
        </tr>
      </table>
      <h2 class="b-mb b-mt">
        Mobile
      </h2>
      <table>
        <tr>
          <td><h1>H1</h1></td>
          <td>
            <h1>
              Montserrat/ 18 px/ semibold
            </h1>
          </td>
        </tr>
        <tr>
          <td><h2>H2</h2></td>
          <td>
            <h2>
              Montserrat/ 16 px/ semibold
            </h2>
          </td>
        </tr>
        <tr>
          <td><h3>H3</h3></td>
          <td>
            <h3>
              Montserrat/ 14 px/ semibold
            </h3>
          </td>
        </tr>
      </table>
    </div>
    <div class="block">
      <h2 class="e-mb">
        Buttons
      </h2>
      <div style="display: grid; grid-template: auto / 240px 240px; column-gap: 32px; justify-self: left">
        <div>
          <pre>class="btn btn--primary"</pre>
          <a href="#" class="btn btn--primary">Button</a>

          <pre>class="btn btn--secondary"</pre>
          <button class="btn btn--secondary">
            Button
          </button>
        </div>
        <div>
          <pre>class="btn btn--primary btn--arrow-right"</pre>
          <a href="#" class="btn btn--primary btn--arrow-right">Button</a>

          <pre>class="btn btn--secondary btn--arrow-right"</pre>
          <button class="btn btn--secondary btn--arrow-right">
            Button
          </button>
        </div>
      </div>
    </div>
    <div class="block">
      <h2 class="e-mb">
        Links
      </h2>
      <a href="#">Link</a>

      <div class="bg-dark e-ml">
        <a href="#" class="link-light">Link</a>
      </div>
    </div>
    <div class="block">
      <h2 class="e-mb">
        Form elements
      </h2>

      <form>
        <v-select
          placeholder="Выберите дилерский центр*"
          :searchable="false"
          class="select-dealers"
        >
          <template #no-options>
            Ничего не найдено
          </template>
        </v-select>
        <FormField
          id="name-1"
          name="name"
          type="text"
          field-label="Ваше имя"
          data-required
        />

        <FormField
          id="text"
          :type-textarea="true"
          name="name"
          cols="30"
          rows="5"
          field-label="Сообщение"
        />
      </form>

      <form class="bg-dark b-mt">
        <FormField
          id="name-1"
          name="name"
          type="text"
          field-label="Ваше имя"
          data-required
        />

        <FormField
          id="text"
          :type-textarea="true"
          name="name"
          cols="30"
          rows="5"
          field-label="Сообщение"
        />
      </form>
    </div>
    <div class="block">
      <h2 class="e-mb">
        Web elements
      </h2>
      <h3 class="e-mb">
        Tabs
      </h3>
      <tabs-component :content-data="contentTabs" />
      <div class="bg-dark b-mt">
        <section class="c-tabs">
          <ul class="c-tabs-list js-tabs">
            <li data-tab="tab-1">
              Tabs 1
            </li>
            <li data-tab="tab-2">
              Tabs 2
            </li>
            <li data-tab="tab-3">
              Tabs 3
            </li>
          </ul>
          <div class="tabs-content b-mt">
            <div class="tab-content" data-tab-content="tab-1">
              Content tab 1
            </div>
            <div class="tab-content" data-tab-content="tab-2">
              Content tab 2
            </div>
            <div class="tab-content" data-tab-content="tab-3">
              Content tab 3
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="block">
      <h2 class="e-mb">
        Checkbox
      </h2>
      <CheckboxComponent id="check-1" label="Check 1" />
      <CheckboxComponent id="check-2" label="Check 2" class="bg-dark b-mt" />
    </div>
    <div class="block">
      <h2 class="e-mb">
        Toggle switch
      </h2>
      <ToggleSwitch />
    </div>
    <div class="block">
      <h2 class="e-mb">
        Radio button
      </h2>

      <div class="form-radio">
        <input id="radio" type="radio" name="radio">
        <label for="radio">Radio button</label>
      </div>
      <div class="form-radio bg-dark  b-mt">
        <input id="radio-2" type="radio" name="radio">
        <label for="radio-2">Radio button</label>
      </div>
    </div>
  </div>
</template>

<script>
import FormField from '@/components/fields/FormField'
import TabsComponent from '@/components/style-guide/TabsComponent'
import CheckboxComponent from '@/components/style-guide/CheckboxComponent'
import ToggleSwitch from '@/components/style-guide/ToggleSwitch'
export default {
  name: 'StyleGuide',
  components: {
    FormField,
    TabsComponent,
    CheckboxComponent,
    ToggleSwitch
  },
  data () {
    return {
      contentTabs: [
        {
          name: 'Таб 1',
          content: 'Контент 1'
        },
        {
          name: 'Таб 2',
          content: 'Контент 2'
        }
      ]
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
}

.block {
  padding: 32px 24px;
  background-color: #F6F6F6;
  border: 1px solid #4b4a4a;
  margin-bottom: 32px;
}

pre {
  padding: 1em 0;
}

.bg-dark {
  background-color: #000;
  padding: 24px;
  display: inline-block;
}
</style>
