<template>
  <div class="savedImages">
    <div class="ui three column grid" v-if="savedImages">
      <div class="column" v-for="image in savedImages">
        <div class="ui segment">
          <img v-bind:src="image.url">
          <button class="ui red button" v-if="image.save" @click.prevent.stop="deleteSavedImage(image)">
            Delete
          </button>
        </div>
      </div>
    </div>
    <h1 v-if="savedImages.length === 0">You Don't Have Any Saved Images.</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      savedImages: 'getSavedImages'
    })
  },
  methods:{
    ...mapActions([
      'saveImage',
      'deleteSavedImage'
    ])
  }
}
</script>

<style lang="less">
  .savedImages {
    margin: 2% 5%;
  }
</style>

