<template>
  <v-expand-transition>
    <body-card v-if="show">
      <v-alert
        outline
        type="warning"
        :value="show"
        :dismissible="dismissible"
        @input="$emit('dismissed')"
      >
        <slot/>
      </v-alert>
    </body-card>
  </v-expand-transition>
</template>

<script>
import BodyCard from './BodyCard'

export default {
  name: 'alert',
  components: { BodyCard },
  props: {
    show: {
      type: Boolean,
      default: true
    },
    dismissible: {
      type: Boolean,
      default: false
    }
  }
}
</script>
