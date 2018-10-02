<template>
  <div id="app" v-scroll="onScroll">
    <div :style="style1"/>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card flat :class="['faded', 'text-xs-center']" height="100vh">
          <div class="white-text" style="padding-top:40vh;">
            <h1>Dustin Seger</h1>
            <h3>Computer science student</h3>
          </div>
        </v-card>
      </v-flex>

      <body-card
        html="
        <h2>About me</h2>
        <p>
          My name is Dustin Seger. I'm a Computer Science major at
          the University of Cincinnati slated to graduate Spring 2021 with a
          minor in German Studies.
        </p>
        <p>
          In my 2 previous co-ops with Crown Equipment Corporation, I
          developed on-board embedded system applications and PC-based
          engineering utilities. This required Linux and web app development,
          and my contributions are still widely used throughout the company,
          one day expanding to end customers. While maintaining my 4.0 GPA,
          I have gained fundamental knowledge through different languages
          in various crucial computer science topics, such as object-oriented
          vs. functional programming, threads and thread safety, and a number
          of widely utilizable data structures. I hope to explore more into
          new topics and languages, as I take pride and find accomplishment
          in my learning.
        </p>
        <p>
          I'm interested in software engineering and development with no
          current preference towards front-end or back-end programming.
          After school, I hope to work in an environment that is passionate
          and encourages exploration. As a member of the International Co-op
          Program, I am open to co-ops in Germany through Spring and Summer
          2020, but I'm not currently seeking a new position.
        </p>"
      />
      <download-button :file="resumeLocation"/>

      <body-card
        html="
        <h2>Quick Links</h2>
        <p>
          http://lorem.ipsum.dolor
          http://sit.amet.consectetur
        </p>
        "
      />
      <body-card
        html="
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Scelerisque felis imperdiet proin fermentum leo vel orci. Turpis egestas sed tempus urna et pharetra. Id volutpat lacus laoreet non curabitur gravida arcu. Amet purus gravida quis blandit turpis cursus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Ut tellus elementum sagittis vitae et leo duis ut. Faucibus nisl tincidunt eget nullam non. Tempor commodo ullamcorper a lacus. Vestibulum lorem sed risus ultricies tristique. Erat nam at lectus urna duis. Facilisi cras fermentum odio eu. Et malesuada fames ac turpis egestas sed tempus urna. In hac habitasse platea dictumst vestibulum rhoncus est. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Nullam non nisi est sit amet facilisis magna etiam tempor. Augue eget arcu dictum varius duis at consectetur lorem.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Scelerisque felis imperdiet proin fermentum leo vel orci. Turpis egestas sed tempus urna et pharetra. Id volutpat lacus laoreet non curabitur gravida arcu. Amet purus gravida quis blandit turpis cursus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Ut tellus elementum sagittis vitae et leo duis ut. Faucibus nisl tincidunt eget nullam non. Tempor commodo ullamcorper a lacus. Vestibulum lorem sed risus ultricies tristique. Erat nam at lectus urna duis. Facilisi cras fermentum odio eu. Et malesuada fames ac turpis egestas sed tempus urna. In hac habitasse platea dictumst vestibulum rhoncus est. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Nullam non nisi est sit amet facilisis magna etiam tempor. Augue eget arcu dictum varius duis at consectetur lorem.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Scelerisque felis imperdiet proin fermentum leo vel orci. Turpis egestas sed tempus urna et pharetra. Id volutpat lacus laoreet non curabitur gravida arcu. Amet purus gravida quis blandit turpis cursus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Ut tellus elementum sagittis vitae et leo duis ut. Faucibus nisl tincidunt eget nullam non. Tempor commodo ullamcorper a lacus. Vestibulum lorem sed risus ultricies tristique. Erat nam at lectus urna duis. Facilisi cras fermentum odio eu. Et malesuada fames ac turpis egestas sed tempus urna. In hac habitasse platea dictumst vestibulum rhoncus est. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Nullam non nisi est sit amet facilisis magna etiam tempor. Augue eget arcu dictum varius duis at consectetur lorem.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Scelerisque felis imperdiet proin fermentum leo vel orci. Turpis egestas sed tempus urna et pharetra. Id volutpat lacus laoreet non curabitur gravida arcu. Amet purus gravida quis blandit turpis cursus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Ut tellus elementum sagittis vitae et leo duis ut. Faucibus nisl tincidunt eget nullam non. Tempor commodo ullamcorper a lacus. Vestibulum lorem sed risus ultricies tristique. Erat nam at lectus urna duis. Facilisi cras fermentum odio eu. Et malesuada fames ac turpis egestas sed tempus urna. In hac habitasse platea dictumst vestibulum rhoncus est. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Nullam non nisi est sit amet facilisis magna etiam tempor. Augue eget arcu dictum varius duis at consectetur lorem.
        </p>
        "
      />
    </v-layout>
  </div>
  <!--TODO: Footer?-->
</template>

<script>
import BodyCard from './components/BodyCard.vue'
import DownloadButton from './components/DownloadButton.vue'

import resume from '../public/Dustin-Seger-Resume.pdf'

export default {
  name: 'app',
  components: { BodyCard, DownloadButton },
  data () {
    return {
      // Other
      windowHeight: window.innerHeight,
      scrollY: 0,

      // Styles
      baseUrl: process.env.BASE_URL,
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
        './assets/lighthouse-min.jpg'
      ],
      backgroundIndex: 0,
      resumeLocation: resume
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowHeight = window.innerHeight
      })
    })
  },
  computed: {
    style1 () {
      return Object.assign(this.baseStyle, { backgroundImage: 'url(' + require(`${this.backgrounds[this.backgroundIndex]}`) + ')' })
    }
  },
  methods: {
    // NOTE: behaves a little strange on window resize, but not easy to fix
    onScroll (val) {
      let y = val.pageY
      this.scrollY = y

      // Opacity lowers to 0 when halfway down window height
      let opacResult = -2 / this.windowHeight * y + 1
      if (y < (this.windowHeight / 2)) {
        this.changeBackground(0)
        this.changeOpacity(opacResult)
      } else {
        this.changeBackground(1)
        this.changeOpacity(-opacResult)
      }
    },
    changeOpacity (val) {
      this.baseStyle.opacity = val
    },
    changeBackground (index) {
      this.backgroundIndex = index
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
  background-color: rgba(0, 0, 0, .6)!important;
  border-color: rgba(0, 0, 0, .6)!important;
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

.white-text {
  color: white;
  opacity: 1;
}
</style>
