<template>
  <div>
    <!-- TODO: Update padding between title and body -->
    <body-card>
      <h2>About Me</h2>
    </body-card>

    <body-card-image :img="portrait" position="right">
      <p>
        My name is Dustin Seger. I'm a computer science major at
        the <a href="https://www.uc.edu/">University of Cincinnati</a> (UC), slated to
        graduate Spring 2021. I'm also on track to obtain a minor in German Studies.
      </p>
      <p>
        While maintaining a 4.0 GPA at UC, I have gained knowledge in crucial computer
        science topics. Although I'm proud of how far I have come in my academic
        journey, I take much more pride in my learning capabilities, adaptability, and
        willingness to take on new, difficult challenges. So long as my work and the
        end-product will make an impact, you can be sure that I'll happily take on any
        task that comes my way, even if it involves an unfamiliar language or area of study.
      </p>
      <p>
        Professionally, I've worked with embedded systems development teams at
        <a href="https://www.crown.com">Crown Equipment Corporation</a>.
        With them, I've done a wide variety of tasks across different
        projects, ranging from Linux OS to web app development. My contributions are still
        widely used throughout the company, including software which was first released
        to product customers in the past year.
      </p>
      <p>
        After I get my degree, I'm interested in a career in software engineering and
        development, and I aspire to one day be a software project leader.
      </p>
    </body-card-image>


    <body-card class="mt-0">
      <h3>My Current Status</h3>
      <p>
        I am currently on co-op with Crown in Feldkirchen, Germany until August 2020.
        <b>Job opportunities are welcome</b> following my graduation in May 2021.
      </p>
    </body-card>
  </div>
</template>

<script>
import BodyCard from '../BodyCard'
import BodyCardImage from '../BodyCardImage'

export default {
  name: 'about-me',
  components: { BodyCard, BodyCardImage },
  data () {
    return {
      portrait: require('@/assets/Dustin-Seger-Portrait.jpg')
    }
  }
}
</script>
