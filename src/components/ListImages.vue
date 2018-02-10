<template>
  <div id="app">
    <button class="ui button" v-on:click.prevent.stop="onFetch()">Fetch Images</button>
    <div class="ui three column grid">
      <div class="column" v-for="image in images">
        <div class="ui segment">
          <img v-bind:src="image.url">
          <p>Like</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  created () {
    const numOfImages = 9;
    for (let i = 0; i < numOfImages; i++) {
      this.$store.dispatch('fetchImages');
    }
  },
  computed: {
    ...mapGetters({
      images: 'getImages'
    })
  },
  methods:{
    onFetch () {
      const numOfImages = 9;
      for (let i = 0; i < numOfImages; i++) {
        this.$store.dispatch('fetchImages');
      }
    }
  }
}
</script>

<style lang="less">
  #app {
    margin: 2% 5%;
  }
  .segment{
    width: 330px;
    height: 360px;
  }
</style>

