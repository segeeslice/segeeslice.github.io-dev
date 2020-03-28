<template>
  <v-flex xs12>
    <v-card flat :class="classes">
      <v-flex sm11 md10 offset-md1 lg8 offset-lg2>
        <v-card-text class="white-text">
          <slot/>
        </v-card-text>
      </v-flex>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'body-card',
  props: {
    cardClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes () {
      return ['faded', ...this.cardClass.split(' ')]
    }
  }
}
</script>
