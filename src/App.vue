<template>
  <div id="app" v-scroll="onScroll">
    <!-- Set the dynamic background for the whole site -->
    <div :style="dynamicBackground"/>

    <button-scroll-column :items="scrollItems"/>

    <!-- Main body -->
    <v-layout row wrap>
      <v-flex xs12>
        <v-card flat :class="['faded', 'text-xs-center']" height="100vh">
          <div class="white-text" style="padding-top:40vh;">
            <h1>Dustin Seger</h1>
            <h3>Computer science student</h3>
          </div>
        </v-card>
      </v-flex>

      <body-card-image id="about" :body="aboutMe" :img="portrait"/>
      <download-button :file="resumeLocation"/>

      <body-card id="contact" :body="contactInfo"/>
      <body-card id="work" :body="workExperience"/>
      <body-card id="activities" :body="activities"/>
    </v-layout>
  </div>
  <!--TODO: Footer?-->
</template>

<script>
import ButtonScrollColumn from './components/ButtonScrollColumn.vue'
import BodyCard from './components/BodyCard.vue'
import BodyCardImage from './components/BodyCardImage.vue'
import DownloadButton from './components/DownloadButton.vue'

import AboutMe from './components/body-text/AboutMe.vue'
import ContactInfo from './components/body-text/ContactInfo.vue'
import WorkExperience from './components/body-text/WorkExperience.vue'
import Activities from './components/body-text/Activities.vue'

import resume from '../public/Dustin-Seger-Resume.pdf'

export default {
  name: 'app',
  components: {
    ButtonScrollColumn,
    BodyCard,
    DownloadButton,
    BodyCardImage,
    AboutMe,
    ContactInfo,
    WorkExperience,
    Activities
  },
  data () {
    return {
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

      // Other assets
      resumeLocation: resume,
      portrait: require('@/assets/Dustin-Seger-Portrait.jpg'),

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

    // Computed components required for passing as prop
    aboutMe () { return AboutMe },
    contactInfo () { return ContactInfo },
    workExperience () { return WorkExperience },
    activities () { return Activities }
  },
  methods: {
    onScroll (val) {
      this.lastScroll = val

      // Lower opacity to 0 when halfway down window height, then pop back up
      let opacResult = this.opacFunction(val.pageY / this.windowHeight)
      this.changeOpacity(opacResult)

      // Change background when opacity is 0
      this.changeBackground(Math.floor(val.pageY / this.windowHeight + 0.5))
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
}
a {
  color: white;
}
</style>
