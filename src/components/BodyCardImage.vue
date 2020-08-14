<!--
  Adds an image to a passed body component

  Props:
    - img = image source object
    - position = left/right; indicates image position
-->

<template>
  <div>
  <v-flex xs12>
    <v-card :class="classes" flat>
      <v-layout row>
        <v-flex v-if="left" sm3 offset-md1 md3 offset-lg2 lg2>
          <v-card-text>
            <v-img :src="img" :gradient="imgGradient"/>
          </v-card-text>
        </v-flex>

        <v-flex
          sm8 lg6 md7
          :offset-md1="right"
          :offset-lg2="right"
        >
          <v-card-text class="white-text">
            <slot/>
          </v-card-text>
        </v-flex>

        <v-flex v-if="right || neither" sm3 md3 lg2>
          <v-card-text>
            <v-img :src="img" :gradient="imgGradient"/>
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
  </div>
</template>

<script>
export default {
  name: 'body-card-image',
  props: {
    img: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: '',
      validator: x => ['left', 'right'].includes(x)
    },
    cardClass: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      imgGradient: 'to top right, rgba(255,115,201,.2), rgba(25,32,72,.2)'
    }
  },
  computed: {
    classes () {
      return ['faded', ...this.cardClass.split(' ')]
    },
    left () {
      return this.position === 'left'
    },
    right () {
      return this.position === 'right'
    },
    neither () {
      return this.position !== 'left' && this.position !== 'right'
    }
  }
}
</script>
