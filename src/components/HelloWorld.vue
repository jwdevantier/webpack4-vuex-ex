<template>
<div class="hello">
  <div class="left">
    <h1>{{ title }}</h1>

    <form @submit.prevent="addLink">
      <input class="link-input" type="text" placeholder="Add a link" v-model="newLink" />
    </form>

    <ul>
      <li v-for="(link, index) in links" v-bind:key="index">
        {{ link }}
        <button v-on:click="removeLinks(index)" class="rm">Remove</button>
      </li>
    </ul>
  </div>
  <div class="right">
    <stats />
  </div>
</div>
</template>

<script>
import Stats from '@components/Stats.vue'
import {mapState, mapMutations, mapActions} from 'vuex'


export default {
  name: 'HelloWorld',
  components: {
    Stats
  },
  data() {
    return {
      newLink: ''
    }
  },
  computed: {
    ...mapState([
    'title',
    'links'
  ])
  },
  methods: {
    ...mapMutations([
      'ADD_LINK'
    ]),
    ...mapActions([
      'removeLink'
    ]),
    addLink: function() {
      this.ADD_LINK(this.newLink)
      this.newLink = ''
    },
    removeLinks: function(link) {
      this.removeLink(link)
    }
  }
}
</script>