<template>
  <div>
    <body-card>
      <h2>About Me</h2>
    </body-card>

    <body-card-image :img="portrait" position="right">
      <p>
        Hello! My name is Dustin Seger, and I'm a <b>software engineer</b>.
      </p>

      <p>
        I pride myself in my focus on writing clean, re-usable code using my
        ever-evolving knowledge of modern design concepts and patterns. Through
        my experiences obtaining a 4.0 GPA at the prestigious <a
        href="https://www.uc.edu/">University of Cincinnati</a> and subsequent
        professional opportunities, I've gained insight into in a number of
        technical environments, and I utilize this experience in my work every
        day to efficiently write effective and testable software.
      </p>
      <p>
        Professionally, I've held positions with various embedded systems
        development teams at <a href="https://www.crown.com">Crown Equipment
        Corporation</a> and with the back-end development team at <a
        href="https://www.lcs.com/">London Computer Systems</a>. My
        contributions to these companies are still largely used both internally
        and by end-customers, with my work experience spanning across a variety of
        disciplines like Linux OS development, web app design, database
        management, CAN protocol development, design pattern-based architectural
        design, and more!

        <br/><i>For more details, see the <b>Work Experience</b> section later
        in the page!</i>
      </p>
      <p>
        Although I'm proud of how far I've come in my professional journey, I
        take more pride in my learning capabilities, adaptability, and
        willingness to take on new, difficult challenges. So long as my work and
        the end-product will have a positive impact on the world, you can be
        sure that I'll happily take on any task that comes my way, even if it
        involves an unfamiliar language or area of study.
      </p>
      <p>
        Through my university studies, I also spent time working in software
        development in <b>Germany</b> and obtained a minor in <b>German
        Studies</b>. I still practice my German language skills as I strive
        towards eventual fluency, and I've recently been dabbling in learning
        French as well!
      </p>
      <p>
        In my free time, I like to embrace my inner nerd through video games,
        TTRPG's like Dungeons & Dragons (as a GM <i>and</i> player), and reading
        fantasy novels. However, whenever I get the opportunity, I also love to
        travel, meet new people, and immerse myself into new cultures.
      </p>
    </body-card-image>

    <body-card>
      <h3>Currently Desired Position</h3>
      <p>
        I'm as interested in the technical side of programming as I am in  its
        design, management, and documentation. As such, I'm open to maintaining
        a position in software development for the time being, but I aspire to
        one day make my transition into management and design as a project
        manager or tech lead.
      </p>
    </body-card>

    <body-card>
      <h3>My Current Status</h3>
      <p>
        I'm currently a <b>Software Developer II</b> with <a
        href="https://www.lcs.com/">London Computer Systems</a>.
      </p>

      <v-layout row align-center>
        <download-button :file="resumeFile">
          Download My Resume
        </download-button>
        <a href="https://www.linkedin.com/in/dustin-seger-19972016/">
          <v-btn icon outline dark>
            <v-img :src="linkedinLogo" class="ma-1"/>
          </v-btn>
        </a>
      </v-layout>
    </body-card>
  </div>
</template>

<script>
import BodyCard from '../BodyCard'
import BodyCardImage from '../BodyCardImage'
import DownloadButton from '../DownloadButton'

export default {
  name: 'about-me',
  components: { BodyCard, BodyCardImage, DownloadButton },
  data () {
    return {
      portrait: require('@/assets/Dustin-Seger-Portrait.png'),
      resumeFile: require('@/../public/Dustin-Seger-Resume.pdf'),
      linkedinLogo: require('@/assets/linkedin-logo.png')
    }
  }
}
</script>
