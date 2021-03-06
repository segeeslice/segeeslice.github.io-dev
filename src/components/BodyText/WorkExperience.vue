<template>
  <div>
    <!-- TODO: Update padding between title and body -->
    <body-card>
      <h2>Work Experience</h2>
    </body-card>

    <body-card>
      <h3>About Crown</h3>
      <p>
        <a href="https://www.crown.com">Crown Equipment Corporation</a>
        is a global manufacturer of forklifts and other material handling equipment.
        With a strong focus in design thinking and
        <a href="https://www.scaledagileframework.com/">SAFe</a> (agile) principles, Crown
        develops products for improving and simplifying their consumers' warehouse operations.
        It was here that my professional journey with software engineering began.
      </p>

      <v-divider dark class="pb-2"/>
      <h3>Past Internships With Crown</h3>
    </body-card>

    <body-card-image :img="images.crownHq" position="right">
      <p>
        In Fall 2017 and Summer 2018, I worked on a project aimed at adding touch-screen
        devices to Crown's trademark lift trucks. With roughly 3 years of development
        already behind the project, I was able to dive head-first into programming alongside
        veterans of the field. During this time, I was primary developer of the project's new
        development utilities, aimed to help download to and manage data for the lift trucks.
        These programs are essentially executable web pages, operating under
        <a href="https://www.electronjs.org/">Electron</a>. As such, much of my development
        in these semesters was with JavaScript and HTML, using frameworks such as
        <a href="https://angularjs.org/">Angular</a> and <a href="https://vuejs.org/">Vue</a>.
        In addition to improving my skills with these languages, developing these programs
        also gave me a roaring introduction into data management, scripting, and Bash programming.
        Of course, I also did various other tasks as necessary, including C++ coding for the
        touch screen itself, QA work, and field testing on a manufacturing line.
      </p>
    </body-card-image>
    <body-card-image :img="images.spTruck" position="left">
      <p>
        In the following co-op rotation of Summer 2019, I moved to a project aimed at creating
        a successor to the original lift truck touch screen. This new project arose from the
        drawing board to mitigate core OS and hardware issues from the original project.
        The interface aims to be the same, but it is now developed as an Android application via
        <a href="https://dotnet.microsoft.com/apps/xamarin">Xamarin</a> on a more responsive,
        more powerful device. Since I was at the ground floor of this new project, I was able
        to code some of the core building blocks for what will eventually be a massive project.
        This included areas like unit test coverage outputs, an inter-device messaging API, and
        even a UI element implementation. It was through this work that I first learned and came
        to love C#, although I haven't had the chance to develop with it since. During this
        rotation, I also utilized other familiar languages, such as Python and C++.
      </p>
    </body-card-image>

    <body-card>
      <p>
        I've recently (August 2020) finished working in Munich, developing for
        Crown's German branch. I'm proud to say that my aforementioned
        development utilities were still being used, and I was able to develop
        them further than ever thought possible, working to phase out every old,
        unmaintained Excel utilities we had in place. I then went on in my final
        weeks to help start the beginning of a new truck, leading the design in
        CAN communications and display menu structure for the new system.
        However, my journey here was not all about technical improvement. Being
        in this new environment challenged nearly every facet of my daily life.
        Through this unique opportunity, I was able to identify and work on my
        weaknesses, as well as refine my personal aspirations, emotional
        intelligence, and development processes.
      </p>
    </body-card>
  </div>
</template>

<script>
import BodyCard from '../BodyCard'
import BodyCardImage from '../BodyCardImage.vue'

export default {
  name: 'we2',
  components: { BodyCard, BodyCardImage },
  data () {
    return {
      images: {
        crownHq: require('@/assets/crown-hq.jpg'),
        spTruck: require('@/assets/sp-truck.png')
      }
    }
  }
}
</script>
