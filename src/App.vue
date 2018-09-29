<template>
  <div id="app" v-scroll="onScroll">
    <div :style="style1"/>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card flat :class="['faded', 'text-xs-center']" height="100vh">
          <div class="white-text" style="padding-top:40vh;">
            <h1>Dustin Seger</h1>
            <h3>A portfolio</h3>
          </div>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-card flat class="faded">
          <v-card-text class="white-text">
            <h2>Quick Summary</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Scelerisque felis imperdiet proin fermentum leo vel orci. Turpis egestas sed tempus urna et pharetra. Id volutpat lacus laoreet non curabitur gravida arcu. Amet purus gravida quis blandit turpis cursus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Ut tellus elementum sagittis vitae et leo duis ut. Faucibus nisl tincidunt eget nullam non. Tempor commodo ullamcorper a lacus. Vestibulum lorem sed risus ultricies tristique. Erat nam at lectus urna duis. Facilisi cras fermentum odio eu. Et malesuada fames ac turpis egestas sed tempus urna. In hac habitasse platea dictumst vestibulum rhoncus est. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Nullam non nisi est sit amet facilisis magna etiam tempor. Augue eget arcu dictum varius duis at consectetur lorem.
            </p>

            <h2>Links</h2>
            <p>
              http://lorem.ipsum.dolor
              http://sit.amet.consectetur
            </p>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-card flat class="faded">
          <v-card-text class="white-text">
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
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
  <!--TODO: Footer?-->
</template>

<script>

export default {
  name: 'app',
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
      backgroundIndex: 0
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
  font-size: 16px;
}

.white-text {
  color: white;
  opacity: 1;
}
</style>
