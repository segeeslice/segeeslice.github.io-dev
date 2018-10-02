<template>
  <v-flex xs12>
    <v-card flat class="faded">
      <v-flex sm12 md10 offset-md1 lg8 offset-lg2>
        <a :href="file" download>
          <v-btn dark outline>
            <v-icon left dark>cloud_download</v-icon>
            Download My Resume
          </v-btn>
        </a>
      </v-flex>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'download-button',
  props: ['file']
}
</script>
