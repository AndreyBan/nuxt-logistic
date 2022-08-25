export const mixinSortActual = {
  methods: {
    sortData (data) {
      const actual = []
      const noActual = []
      for (const i in data) {
        if (data[i].actual) {
          actual.push({ id: i, ...data[i] })
        } else {
          noActual.push({ id: i, ...data[i] })
        }
      }
      return [...actual, ...noActual]
    }
  }
}
