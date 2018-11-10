<template>
  <div id="app" v-scroll="onScroll">
    <!-- Set the dynamic background for the whole site -->
    <div :style="dynamicBackground"/>

    <!-- Button link column -->
    <a
      v-for="(item, index) in link"
      :key="item.id"
      :href = "`#${item.id}`"
      :v-scroll-to="item.id"
    >
      <v-tooltip left nudge-bottom="13">
        <v-btn
          slot="activator"
          absolute
          dark
          fab
          top
          right
          color="gray"
          :style="[buttonStyle, { top: `${index * 60 + 10}px` }]"
        >
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
        <span>{{ item.tip }}</span>
      </v-tooltip>
    </a>

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
        id="about"
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
        id="contact"
        html="
        <h2>Contact info</h2>
        <p>
          School Email:   <a href='mailto:segerde@mail.uc.edu'>segerde@mail.uc.edu</a> <br/>
          Personal Email: <a href='mailto:dustin.seger@hotmail.com'>dustin.seger@hotmail.com</a> <br/>
          Phone:          419-790-8007 <br/>
          <i>(If I don't answer, leave a message!)</i> <br/>
        </p>
        "
      />
      <body-card
        id="work"
        html="
        <h2>Work experience</h2>
        <p>
          In Fall of 2017 and Summer of 2018, I co-oped with Crown Equipment Corporation of New Bremen, OH. Despite being a worldwide corporation, they are stationed in a town of roughly 5000 people! In this town, they develop and manufacture a variety of lift trucks and utilities for warehouse management. I was hired onto an engineering team for the C1515 project, developing touch screen devices on lift trucks. These miniature computers were developed from the ground up with a custom-coded Linux operating system. The department followed a scaled agile framework for development, also known as <a href='https://www.scaledagileframework.com/'>SAFe</a>. This created a fast-paced, organized, productive development cycle.
        </p>
        <p>
          While the work environment was too rigorous for me to be immediately applied to the truck software, I spent most of my time developing engineering utilities to make the development process much smoother...
        </p>
        <p>
          The first tool I worked on was the Gena Truck Download Utility. The program's purpose is to allow for an ease of software installation onto the lift truck, including the hardware. The program had in-depth knowledge of the lift truck's inner workings and required moving files to proper places, initializing scripts, and knowing when to do what. This is an <a href='https://electronjs.org/'>Electron</a> application, using a combination of <a href='https://angularjs.org/'>AngularJS</a> and <a href='http://getbootstrap.com/'>Bootstrap</a> for UI and <a href='https://nodejs.org/en/'>NodeJS</a> for package management and utilities. During my time at Crown, especially in Fall 2017, I was widely developing this program independently while still vastly exceeding the expectations of my peers. I worked to add features, support dependencies, test, and fix bugs. This program is currently being prepared for use with end-customers so they can update their own software with new features as need be.
        </p>
        <p>
          I also moved onto another project my first semester with Crown called the IMM Data Tool. The IMM, or Information Management Module, is the touch screen device that goes onto lift trucks. Despite typically being vastly different, each lift truck type had the same operating system. The difference between them was the data configuration, previously handled through an unmanageable number of CSV and XML files. The purpose of the IMM Data Tool was to alleviate some of this work and handle small details in the background while presenting the necessary data in a nice, user-friendly format. Fittingly, this program was also an <a href='https://electronjs.org/'>Electron</a> and <a href='https://nodejs.org/en/'>NodeJS</a> application, but it uses the vastly different <a href='https://vuejs.org/'>VueJS</a> framework for live data processing and effortless UI development <i>(this website is made with this framework!)</i>. I effectively helped to pioneer this tool alongside a mentor of mine, and the tool is still expanding and being used throughout the engineering department today.
        </p>
        <p>
          In my second semester, I expanded quite a bit into other areas, experimenting with testing types (unit, system, end-to-end, UI) and dabbling in Linux development with C++. I also touched a lot of shell scripting through both of these endeavors, as well as through the Download Utility's interface with the lift truck.
        </p>
        <p>
          It was through these projects that I learned a lot of the engineering world. Obviously, I learned to develop in a fast-paced environment, often needing to manage dependencies and multiple tasks. This vastly boosted my time-management skills and understanding of task priority. As I was often the sole supporter of the Download Utility, I learned how to handle complaints and suggestions for software, aptly allowing me to develop my communications skills and understanding of the end-user. I was shown a lot of new UI design concepts I had never heard of before, such as not impeding habituation, and I'm sure I could aptly apply these to my future positions.
        </p>
        "
      />
      <body-card
        id="activities"
        html="
        <h2>Activities</h2>
        <p>
          Many of my programming activities can be found on my <a href='https://github.com/segeeslice'>personal GitHub Page</a>. Schoolwork does come first, so I admittedly have not found much time to aptly finish these projects. However, I hope to eventually showcase most, if not all, of the concepts and languages I have learned through UC and personal studies. The <a href='https://github.com/segeeslice/Movie-Tracker'>Movie Tracker</a> and <a href='https://github.com/segeeslice/Python-GIF-Searcher'>Python GIF Searcher</a> are currently my most notable projects to check out.
        </p>
        <p>
          When I'm not coding, I love to play frisbee with friends, write my own music, and research existential and interstellar topics. I've volunteered with various places through UC, such as Granny's Garden, Clean Up Cincy, and TechOlympics. As mentioned previously, I am interested in Germany and German studies, as I have 4 years of prior experience with the language. I love to delve into German culture, and look forward to heading there with the ICP in 2020.
        </p>
        <p>
          With a current standing 4.0 GPA, I have been on Dean's List every semester at UC. I also recently turned in an essay on music writing as a literacy that will be entered into a writing competition in January 2019, potentially being published if it is well received.
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
        './assets/lighthouse-min.jpg',
        './assets/mountain-min.jpg',
        './assets/mountain-cold.jpg'
      ],
      backgroundIndex: 0,
      resumeLocation: resume,

      // Quick link info
      link: [
        { id: 'top', icon: 'arrow_upward', tip: 'Top' },
        { id: 'about', icon: 'info', tip: 'About me' },
        { id: 'contact', icon: 'contact_mail', tip: 'Contact info' },
        { id: 'work', icon: 'work', tip: 'Work experience' },
        { id: 'activities', icon: 'person', tip: 'Personal activities' }
      ],
      buttonStyle: {
        position: 'fixed',
        height: '50px',
        width: '50px'
      }
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
    dynamicBackground () {
      return Object.assign(this.baseStyle, { backgroundImage: 'url(' + require(`${this.backgrounds[this.backgroundIndex]}`) + ')' })
    }
  },
  methods: {
    // NOTE: behaves a little strange on window resize, but not easy to fix
    onScroll (val) {
      this.scrollY = val.pageY

      // Lower opacity to 0 when halfway down window height, then pop back up
      let opacResult = this.opacFunction(val.pageY / this.windowHeight)
      this.changeOpacity(opacResult)

      // Change background when opacity is 0
      this.changeBackground(Math.floor(val.pageY / this.windowHeight + 0.5))
    },
    opacFunction (val) {
      // Cosine graph with range [0, 1] and domain [0, 1] is:
      //    cos(2x*pi) / 2 + 1.5

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

.white-text {
  color: white;
  opacity: 1;
}

</style>
