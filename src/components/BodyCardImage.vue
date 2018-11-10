<template>
  <div>
  <v-flex xs12>
    <v-card class="faded" flat>
      <v-layout row>
        <v-flex sm8 md7 offset-md1 lg6 offset-lg2>
          <v-card-text class="white-text">
              <span v-html="html"/>
          </v-card-text>
        </v-flex>
        <v-flex sm3 md3 lg2>
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
  props: [ 'html', 'img' ]
}
</script>
