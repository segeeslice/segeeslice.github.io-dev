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
            <h3>Software Engineer</h3>
          </div>
        </v-card>
      </v-flex>

      <about-me id="about"/>
      <contact-info id="contact"/>
      <work-experience id="work"/>
      <activities id="activities"/>
    </v-layout>
  </div>
  <!--TODO: Footer?-->
</template>

<script>
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
    ButtonScrollColumn,
    ContactInfo,
    WorkExperience
  },
  data () {
    return {
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

      scrollItems: [
        { id: 'top', icon: 'arrow_upward', tip: 'Top' },
        { id: 'about', icon: 'info', tip: 'About Me' },
        { id: 'contact', icon: 'contact_mail', tip: 'Contact Info' },
        { id: 'work', icon: 'work', tip: 'Work Experience' },
        { id: 'activities', icon: 'person', tip: 'Personal Activities' }
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
