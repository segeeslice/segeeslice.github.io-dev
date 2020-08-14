<template>
  <div>
    <body-card>
      <h2>Activities</h2>
    </body-card>
    <body-card>
      <h3>Programming</h3>
      <p>
        Many of my programming activities can be found on my
        <a href='https://github.com/segeeslice'>personal GitHub Page</a>. As time
        goes on, I hope to find discover more avenues for creative coding, eventually
        showcasing most, if not all, of the concepts and languages I have learned
        through UC and personal studies.
      </p>
      <p>
        Across my programming endeavors, I'm most proud of what I simply call
        <a href="https://github.com/segeeslice/Snake">The Snake Program</a>. As you may have
        guessed, this is my own rendition of the classic
        <a href="https://en.wikipedia.org/wiki/Snake_(video_game_genre)">Snake arcade game</a>.
        I created this game from the ground up using a Java-based UI framework called
        <a href="https://processing.org/">Processing</a>. What began as an investigation into
        UI and game design soon evolved into my first experience with artificial intelligence,
        providing a unique comparison between neural network and search-based implementation
        methods. If you'd like to know more, see the
        <a href="https://github.com/segeeslice/Snake/">GitHub page</a> for a README and program
        downloads, read my portfolio discussing the project, or watch the demo videos below!
      </p>

      <download-button :file="portfolio" style="margin-bottom: 16px">
        Download Snake Program Portfolio
      </download-button>

      <p>
        I have other software projects in the works as well. For example, I'm
        creating the <a href='https://github.com/segeeslice/Movie-Tracker'>Movie
        Tracker</a>, a Material-UI Electron app for tracking movies to watch.
        This was sprung from the idea of staying organized in the ever-expanding
        pool of streaming services. I also created the project <a
        href='https://github.com/segeeslice/Text-Adventure'>Text Adventure</a>,
        a Processing application acting as a framework for creating/playing your
        own text adventures. Although both of these applications are incomplete,
        I hope to return to and finish them in the coming year. In the meantime,
        you can see demos of their progress below!
      </p>

      <h3 style="padding-bottom: 8px">Program Demos</h3>
      <expansion-video
        v-for="demo in demos"
        :key="demo.title"
        :vid-path="getDemoPath(demo.name)"
        :title="demo.title"
        :description="demo.description || ''"
      />

      <h3>Other Activities</h3>
      <p>
        Naturally, I have other hobbies and interests outside of programming. I
        love to practice and write music, draw, travel, play ultimate with
        friends, work out, and play video games. I've also recently began
        investigating into the world of game development, beginning a personal
        study of making a game totally from scratch. I am interested in Germany
        and German studies, going so far as to live there for 8 straight months.
        This interest also dips into my personal time with active German
        language practice, as I find high value in being bilingual. I'm
        currently around a B2 German speaking level, but I hope to one day be
        fluent in the language.
      </p>

      <h3>University Activities/Accomplishments</h3>
      <p>
        Outside of strictly my personal life, I've also had my share of success
        through my university. I've been vice president of the UC Amateur Radio
        Club for 4 years, as well as a member of other clubs such as <a
        href="https://twloha.com/">TWLOHA</a>. Through UC, I've been able to
        volunteer 60+ hours with various local organizations, such as a
        community fundraising concert and the well-known <a
        href="https://www.cleanupcincy.com/">Clean Up Cincy</a> event. With a
        current standing 4.0 GPA, I have been on Dean's List every semester at
        UC, as well as receiving the Mantei/Mae award for academic
        accomplishment. My discipline goes beyond grades and the tech field, as
        I've I written an essay that was nominated by my professor into a
        university writing competition in January 2019. Going into my final
        year, I hope to continue this path of success, finding challenging
        classes to further develop my technical skills while preparing myself
        for my career to come.
      </p>
    </body-card>
  </div>
</template>

<script>
import BodyCard from '../BodyCard.vue'
import DownloadButton from '../DownloadButton.vue'
import ExpansionVideo from '../ExpansionVideo.vue'

export default {
  name: 'activities',
  components: { BodyCard, DownloadButton, ExpansionVideo },
  data () {
    return {
      // Located in demos/{name}-demo.mp4
      // TODO: Sacrifice snake config for slotted descriptions?
      demos: [
        {
          name: 'snake-basic',
          title: 'Snake Demo - Basic Play',
          description: 'Basic user play, controlled via the arrow keys.'
        },
        {
          name: 'snake-neural',
          title: 'Snake Demo - Neural Network',
          description: 'Snake controlled by a neural network. The AI tries its best to ' +
                       'avoid getting trapped, but it isn\'t perfect. Would love ' +
                       'to eventually revisit to make it learn from its mistakes. ' +
                       'See the portfolio above to learn more!'
        },
        {
          name: 'snake-brute',
          title: 'Snake Demo - "Brute" (Search-Based)',
          description: 'Snake controlled by a search-based algorithm. Specifically, it ' +
                       'uses an imperfect (but vastly more efficient) version of the ' +
                       'A* algorithm to find a path to the food before traveling. ' +
                       'If a path cannot be found, it simply kills itself (hence the ' +
                       'abrupt ending). ' +
                       'The pauses when searching are usually less noticeable, but I ' +
                       'recorded this on a less-than-powerful laptop. ' +
                       'See the portfolio above to learn more!'
        },
        {
          name: 'movie-tracker',
          title: 'Movie Tracker Demo',
          description: 'Primary layout for tracking movies. Saves all items locally ' +
                       'for later use. More features to come!'
        },
        {
          name: 'text-adventure',
          title: 'Text Adventure Demo',
          description: 'Basic text adventure movement. All text and pathing is ' +
                       'configured via JSON files. May develop an in-house editor for ' +
                       'these files, including visual mapping for further abstraction.'
        }
      ],
      portfolio: require('@/../public/Snake-Program-Portfolio.pdf')
    }
  },
  methods: {
    getDemoPath (name) {
      return 'demos/' + name + '-demo.mp4'
    }
  }
}
</script>
