<!--
  Adds an image to a passed body component

  Props:
    - body = Vue component to display alongside image
    - img  = image path
-->

<template>
  <div>
  <v-flex xs12>
    <v-card class="faded" flat>
      <v-layout row>
        <v-flex v-if="left" sm3 md3 lg2>
          <br/><br/><br/><br/>
          <v-img :src="img" gradient="to top right, rgba(255,115,201,.2), rgba(25,32,72,.2)"/>
        </v-flex>

        <v-flex sm8 md7 offset-md1 lg6 offset-lg2>
          <v-card-text class="white-text">
            <component :is="body"/>
          </v-card-text>
        </v-flex>

        <v-flex v-if="right || neither" sm3 md3 lg2>
          <br/><br/><br/><br/>
          <v-img :src="img" gradient="to top right, rgba(255,115,201,.2), rgba(25,32,72,.2)"/>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
  </div>
</template>

<script>
export default {
  name: 'body-card-image',
  props: [ 'body', 'img', 'position' ],
  computed: {
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
