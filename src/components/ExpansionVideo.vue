<!--
Simple expansion panel with video and video controls

Passed:
  title:   becomes the header of the panel
  vidPath: path to the mp4 video file

NOTE: videos should be placed in the /public folder
-->

<template>
  <v-expansion-panel v-model="open" dark expand>
    <v-expansion-panel-content>
      <span slot="header">{{ title }}</span>
      <v-card>
        <video width="100%" controls id="videoEl" @canplay="updateVidInfo">
          <source :src="path" type="video/mp4"/>
          Your browser does not support mp4 videos! :(
        </video>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: 'expansion-video',
  props: [ 'title', 'vidPath' ],
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
    path () {
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
