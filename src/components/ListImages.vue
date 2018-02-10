<template>
  <div id="app">
    <button class="ui button" v-on:click.prevent.stop="onFetch()">Fetch Images</button>
    <div class="ui three column grid">
      <div class="column">
        <div class="ui segment">
          <img src="https://picsum.photos/300/?random">
          <p>Like</p>
        </div>
      </div>
      <div class="column">
        <div class="ui segment">
          <img src="https://picsum.photos/300/?random">
        </div>
      </div>
      <div class="column">
        <div class="ui segment">
          <img src="https://picsum.photos/300/?random">
        </div>
      </div>
      <div class="column">
        <div class="ui segment">
          <img src="https://picsum.photos/300/?random">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  // created () {
  //   this.$store.dispatch('fetchCart');
  // },
  // computed: {
  //   total () {
  //    return this.inventories.reduce((sum, p) => sum + (p.quantity * p.price), 0)
  //   },
  //   ...mapGetters({
  //     inventories: 'getCartItems'
  //   })
  // },
  methods:{
    onFetch () {
      this.$store.dispatch('fetchImages');
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

