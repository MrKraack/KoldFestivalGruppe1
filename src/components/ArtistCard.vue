<template>
  <div>
      <h3>{{ name }}</h3>
      <p>{{ dateFormat(date) }}</p>
      <p> {{ location }}</p>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "artistCard",
  props: {
    name: String,
    date: String,
    location: String,
  },
  methods: {
    dateFormat(date) {
      return moment(date).format('MM/DD/YYYY HH:mm')
    }
  },
}
</script>

<style scoped lang="scss">

</style>