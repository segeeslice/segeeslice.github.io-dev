<!--
Simple expansion panel with video and video controls

Passed:
  title:   becomes the header of the panel
  vidPath: path to the mp4 video file

NOTE: videos should be placed in the /public folder
TODO: Make into dialogs instead?
-->

<template>
  <v-expansion-panel v-model="open" dark expand style="margin: 12px 0px">
    <v-expansion-panel-content>
      <span slot="header">{{ title }}</span>
      <v-card dark>
        <video
          width="100%"
          style="max-height: 80vh"
          controls
          id="videoEl"
          @canplay="updateVidInfo"
        >
          <source :src="processedPath" type="video/mp4"/>
          Your browser does not support mp4 videos! :(
        </video>
        <div v-if="description" style="padding: 0px 12px 16px">
          <v-subheader style="padding: 0px">Description</v-subheader>
          {{ description }}
        </div>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: 'expansion-video',
  props: [ 'title', 'vidPath', 'description' ],
  watch: {
    open: function (v) {
      if (v[0] === false) {
        this.videoEl.pause()
      }
    }
  },
  data () {
    return {
      // Mapped to expansion panel
      // Will contain either [true] if open, else [false]
      open: [false],
      videoEl: null
    }
  },
  computed: {
    processedPath () {
      return `${process.env.BASE_URL}${this.vidPath}`
    }
  },
  methods: {
    updateVidInfo (elem) {
      this.videoEl = elem.target
    }
  }
}
</script>
