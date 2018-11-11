<!--
  Takes array of objects with the following params...
    id: { String correlating to where it should scroll }
    icon: { Material icon to display }
    tip: { Tool tip to display }
-->

<template>
  <div>
    <a
      v-for="(item, index) in items"
      :key="item.id"
      :href = "`#${item.id}`"
      :v-scroll-to="item.id"
    >
      <v-tooltip left nudge-bottom="13">
        <v-btn
          slot="activator"
          absolute
          dark
          fab
          top
          right
          color="gray"
          :style="[buttonStyle, { top: `${index * 60 + 10}px` }]"
        >
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
        <span>{{ item.tip }}</span>
      </v-tooltip>
    </a>
  </div>
</template>

<script>
export default {
  name: 'button-scroll-column',
  props: [ 'items' ],
  data () {
    return {
      buttonStyle: {
        position: 'fixed',
        height: '50px',
        width: '50px'
      }
    }
  }
}
</script>
