<template>
<div class="stats">
  <h1>A different component</h1>
  <p>There are currently {{ countLinks }} links</p>

  <button v-on:click="removeAllLinks">Remove all links</button>
  <p>{{ msg }}</p>
</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Stats',
  data() {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapGetters(['countLinks']),
  },
  methods: {
    ...mapMutations(['REMOVE_ALL']),
    ...mapActions(['removeAll']),
    removeAllLinks() {
      this.removeAll().then(() => {
        this.msg = 'they have been removed'
      })
    }
  }
}
</script>