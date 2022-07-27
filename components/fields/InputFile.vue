<template>
  <div class="form-field">
    <div class="form-field-file">
      <div>
        <input id="f-file-1" type="file" multiple style="display: none;" @change="previewFiles">
      </div>
      <label for="f-file-1">Прикрепить доверенность*
        <show-svg id="paper-clip" />
      </label>
    </div>
    <div v-for="(file, i) in arFiles" :key="i" class="download-file e-big-ml" @click="fileDelete(i)">
      {{ file.name }}
      <span class="delete-file e-ml" />
    </div>
    <span v-if="!dataFiles.length && (checkStateSubmit || emptyAfterDelete)" class="error-text">Загрузите файлы</span>
  </div>
</template>

<script>
import showSvg from '@/components/helpers/ShowSvg'

export default {
  name: 'InputFile',
  components: {
    showSvg
  },
  props: {
    required: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      arFiles: [],
      dataFiles: {},
      submitEvnt: false,
      emptyAfterDelete: false
    }
  },
  computed: {
    checkError () {
      return this.$store.state['registration-form'].checkError
    },
    checkStateSubmit () {
      if (this.$store.state['registration-form'].checkError) {
        this.setStateSubmit()
      }
      return this.submitEvnt
    }
  },
  watch: {
    checkError () {
      if (this.required && !this.dataFiles.length) {
        this.$store.commit('registration-form/setError', true)
      }
    }
  },
  methods: {
    previewFiles (e) {
      this.arFiles = Array.from(e.target.files)
      this.dataFiles = this.getFileList(this.arFiles)
    },
    fileDelete (indexFile) {
      this.arFiles.splice(indexFile, 1)
      this.dataFiles = this.getFileList(this.arFiles)
      this.emptyAfterDelete = !this.dataFiles.length
    },
    getFileList (arFiles) {
      const dt = new DataTransfer()
      for (const i in arFiles) {
        dt.items.add(arFiles[i])
      }
      return dt.files
    },
    setStateSubmit () {
      this.submitEvnt = true
    }
  }
}
</script>

<style scoped lang="scss">
.form-field-file {
  position: relative;
}

.error-text {
  display: block;
  position: relative;
}

.form-field .form-field-file label {
  pointer-events: auto;
  width: 100%;
  max-width: 390px;
  border: 1px solid #CCCCCC;
  border-radius: 25px;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  position: static;
  align-items: center;
}

.paper-clip {
  width: 16px;
  height: 16px;
}

.download-file {
  color: #B2B2B2;
  text-decoration: underline;
  display: flex;
  align-items: center;
  margin-top: 10px;

  &:last-child {
    margin-bottom: 10px;
  }
}

.delete-file {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: #B2B2B2;
  border-radius: 50%;
  position: relative;
  padding: 2px;
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 8px;
    left: 3px;
    width: 10px;
    height: 1px;
    background-color: #FFF;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
}
</style>
