<template>
  <body-card>
    <h2>Activities</h2>
    <p>
      Many of my programming activities can be found on my <a href='https://github.com/segeeslice'>personal GitHub Page</a>. Schoolwork does come first, so I admittedly have not found much time to aptly finish these projects. However, I hope to eventually showcase most, if not all, of the concepts and languages I have learned through UC and personal studies. The <a href='https://github.com/segeeslice/Movie-Tracker'>Movie Tracker</a> and <a href='https://github.com/segeeslice/Python-GIF-Searcher'>Python GIF Searcher</a> are currently my most notable projects. Although they are not packaged for consumer use, below you can view demos of both.
    </p>

    <expansion-video
      v-for="demo in demos"
      :vidPath="demo.path"
      :title="demo.title"
    />

    <p>
      When I'm not coding, I love to play frisbee with friends, write my own music, and research existential and interstellar topics. I've volunteered with various places through UC, such as Granny's Garden, Clean Up Cincy, and TechOlympics. As mentioned previously, I am interested in Germany and German studies, as I have 4 years of prior experience with the language. I love to delve into German culture, and look forward to heading there with the ICP in 2020.
    </p>
    <p>
      With a current standing 4.0 GPA, I have been on Dean's List every semester at UC. I also recently turned in an essay on music writing as a literacy that will be entered into a writing competition in January 2019, potentially being published if it is well received.
    </p>
  </body-card>
</template>

<script>
import BodyCard from '../BodyCard.vue'
import ExpansionVideo from '../ExpansionVideo.vue'

export default {
  name: 'activities',
  components: { BodyCard, ExpansionVideo },
  data () {
    return {
      demos: [
        {
          path: 'demos/movie-tracker-demo.mp4',
          title: 'Movie Tracker Demo'
        },
        {
          path: 'demos/gif-search-demo.mp4',
          title: 'Python GIF Searcher Demo'
        }
      ]
    }
  }
}
</script>
