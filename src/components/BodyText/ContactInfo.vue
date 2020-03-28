<template>
  <body-card>
    <h2>Contact Info</h2>
    <!-- Wrap in p tag to keep same format as rest of app -->
    <p>
      <table>
        <tr>
          <td><b>School Email:</b></td>
          <td>
            <a href='mailto:segerde@mail.uc.edu'>segerde@mail.uc.edu</a>
          </td>
        </tr>
        <tr>
          <td><b>Personal Email:</b></td>
          <td>
            <a href='mailto:dustin.seger@hotmail.com'>dustin.seger@hotmail.com</a>
          </td>
        </tr>
        <tr class="pb-3">
          <td><b>Phone:</b></td>
          <td>+1 (419) 790-8007</td>
        </tr>
      </table>
    </p>

    <!-- TODO: social media links via icons -->
  </body-card>
</template>

<script>
import BodyCard from '../BodyCard'

export default {
  name: 'contact-info',
  components: { BodyCard }
}
</script>

<style scoped>
td {
  padding-right: 15px
}
</style>
