<template>
  <div id="app">
    <div class="ui three column grid">
      <div class="column" v-for="image in images">
        <div class="ui segment">
          <img v-bind:src="image.url">
            <div class="ui red button" v-if="image.save" @click.prevent.stop="deleteSavedImage(image)">
              <i class="heart icon"></i> Saved
            </div>
            <div class="ui red basic button" v-else @click.prevent.stop="saveImage(image)">
              <i class="empty heart icon"></i> Save
            </div>
        </div>
      </div>
      <div class="ui two column centered grid">
        <div class="column">
          <button class="ui orange image button" @click.prevent.stop="onFetch()">More Images</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  created () {
    this.onFetch();
  },
  computed: {
    ...mapGetters({
      images: 'getImages'
    })
  },
  methods:{
    ...mapActions([
      'saveImage',
      'deleteSavedImage'
    ]),
    // Fetch number of images from random image api
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
  .segment {
    width: 330px;
    height: 360px;
  }
</style>

