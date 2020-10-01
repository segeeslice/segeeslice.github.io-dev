<template>
  <!-- Div wrap to take in style bindings appropriately -->
  <div>
    <a :href="file" download style="text-decoration: none">
      <v-btn dark outline style="margin: 8px 0px 8px 0px;">
        <v-icon left dark>cloud_download</v-icon>
        <slot>Download</slot>
      </v-btn>
    </a>
  </div>
</template>

<script>
export default {
  name: 'download-button',
  props: [ 'file' ]
}
</script>
