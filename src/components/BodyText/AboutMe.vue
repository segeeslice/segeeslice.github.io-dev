<template>
  <div>
    <body-card>
      <h2>About Me</h2>
    </body-card>

    <body-card-image :img="portrait" position="right">
      <p>
        My name is Dustin Seger. I'm a <b>computer science</b> major at the <a
        href="https://www.uc.edu/">University of Cincinnati</a> (UC), slated to
        graduate Spring 2021. I'm also on track to obtain a minor in <b>German
        studies</b> as I continue my journey towards German fluency.
      </p>
      <p>
        While maintaining a 4.0 GPA at UC, I have gained knowledge in crucial
        computer science topics. Although I'm proud of how far I have come in my
        academic journey, I take much more pride in my learning capabilities,
        adaptability, and willingness to take on new, difficult challenges. So
        long as my work and the end-product will have a positive impact on
        someone somewhere, you can be sure that I'll happily take on any task
        that comes my way, even if it involves an unfamiliar language or area of
        study.
      </p>
      <p>
        Professionally, I've worked with various embedded systems development teams at
        <a href="https://www.crown.com">Crown Equipment Corporation</a>. With
        them, I've done a wide variety of tasks across different projects,
        ranging from Linux OS to web app to CAN protocol development. My contributions to Crown are still
        widely used throughout the company, including software which was first
        released to product customers in the past year.
      </p>
      <p>
        I'm as interested in the technical side of programming as I am in the
        logistics and overall management. As such, I'm interested in a career in
        software engineering and development after I get my degree, aspiring to
        one day be a software project leader.
      </p>
    </body-card-image>

    <body-card>
      <h3>My Current Status</h3>
      <p>
        I've recently completed my final co-op with Crown in Feldkirchen,
        Germany in August 2020. <b>Full-time job opportunities are welcome</b>
        following my graduation in May 2021.
      </p>

      <v-layout row align-center>
        <download-button :file="resumeFile">
          Download My Resume
        </download-button>
        <a href="https://www.linkedin.com/in/dustin-seger-19972016/">
          <v-btn icon outline dark>
            <img :src="linkedinLogo" class="pa-1"/>
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
