<template>
  <div id="app" v-scroll="onScroll">
    <!-- Set the dynamic background for the whole site -->
    <div :style="dynamicBackground"/>

    <button-scroll-column :items="scrollItems"/>

    <v-layout row wrap>
      <!-- Landing area -->
      <v-flex xs12>
        <v-card id="top" flat :class="['faded', 'text-xs-center']" height="100vh">
          <!-- TODO: Better vertically justify -->
          <div class="white-text" style="padding-top:40vh;">
            <h1>Dustin Seger</h1>
            <h3>Computer science student</h3>
          </div>
        </v-card>
      </v-flex>

      <!-- Temporary warning until release -->
      <!-- TODO: Remove once TODO.md is exhausted -->

      <alert
        dismissible
        :show="showAlert"
        @dismissed="showAlert = false"
      >
        <p>
          This site info is not up-to-date! I've done a lot of cool things since the last
          update here over a year ago, and I'm working hard to get this fixed up as soon
          as possible. In the meantime, check out my
          <a href="https://www.linkedin.com/in/dustin-seger-19972016/">LinkedIn</a>
          for more recent info.
        </p>
        <p>
          - Dustin Seger
        </p>
      </alert>

      <!-- About me -->
      <about-me id="about"/>

      <!-- Contact info -->
      <contact-info id="contact"/>

      <!-- Work experience -->
      <work-experience id="work"/>

      <!-- Activities -->
      <activities id="activities"/>
    </v-layout>
  </div>
  <!--TODO: Footer?-->
</template>

<script>
import Alert from './components/Alert'
import ButtonScrollColumn from './components/ButtonScrollColumn'

import AboutMe from './components/BodyText/AboutMe'
import ContactInfo from './components/BodyText/ContactInfo'
import Activities from './components/BodyText/Activities'
import WorkExperience from './components/BodyText/WorkExperience'

export default {
  name: 'app',
  components: {
    AboutMe,
    Activities,
    Alert,
    ButtonScrollColumn,
    ContactInfo,
    WorkExperience
  },
  data () {
    return {
      showAlert: true, // TODO: remove after release
      // Style details
      baseStyle: {
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        opacity: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      backgrounds: [
        './assets/mountain-sunset-min.jpg',
        './assets/lighthouse-min.jpg',
        './assets/mountain-min.jpg',
        './assets/mountain-cold.jpg'
      ],
      backgroundIndex: 0,

      // Scroll link items
      scrollItems: [
        { id: 'top', icon: 'arrow_upward', tip: 'Top' },
        { id: 'about', icon: 'info', tip: 'About me' },
        { id: 'contact', icon: 'contact_mail', tip: 'Contact info' },
        { id: 'work', icon: 'work', tip: 'Work experience' },
        { id: 'activities', icon: 'person', tip: 'Personal activities' }
      ],

      // Scroll behavior assets
      windowHeight: window.innerHeight,
      lastScroll: { pageY: 0 }
    }
  },
  // NOTE: Must be here since computed prop does not listen for size changes automatically
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowHeight = window.innerHeight
      })
    })
  },
  watch: {
    windowHeight () { this.onScroll(this.lastScroll) }
  },
  computed: {
    dynamicBackground () {
      return Object.assign(this.baseStyle, { backgroundImage: 'url(' + require(`${this.backgrounds[this.backgroundIndex]}`) + ')' })
    },
  },
  methods: {
    onScroll (val) {
      // Parse out the top scroll from the HTML element
      // TODO: find nicer way of doing this? (Update Vuetify)
      let scrollTop = val.target.scrollingElement.scrollTop

      this.lastScroll = scrollTop

      // Lower opacity to 0 when halfway down window height, then pop back up
      // TODO: Modify to change on each subsection?
      let opacResult = this.opacFunction(scrollTop / this.windowHeight)
      this.changeOpacity(opacResult)

      // Change background when opacity is 0
      this.changeBackground(Math.floor(scrollTop / this.windowHeight + 0.5))
    },
    opacFunction (val) {
      // Cosine graph with range [0, 1] and domain [0, 1] is:
      //    cos(2x*pi) / 2 + 1/2

      // Following has been modified to increase time of full opacity:
      return Math.cos(2 * val * Math.PI) / 1.75 + (1 / 1.75)
    },
    changeOpacity (val) {
      this.baseStyle.opacity = val
    },
    changeBackground (index) {
      // Roll back index if over the length
      this.backgroundIndex = index % this.backgrounds.length
    }
  }
}
</script>

<style>
#app {
  font-family: 'Roboto';
  background-color: rgb(0,0,0);
  position: relative;
}
.faded {
  background-color: rgba(0, 0, 0, .65)!important;
  border-color: rgba(0, 0, 0, .65)!important;
}
.white-text {
  color: white;
  opacity: 1;
}
h1 {
  font-size: 60px;
}
h2 {
  font-size: 40px;
}
h3 {
  font-size: 25px;
}
p {
  font-size: 18px;
  font-weight: 350;
}
a {
  color: white;
  font-weight: 500;
}
</style>
