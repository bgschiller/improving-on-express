<template>
  <div class="wishlist">
    <h2>Express Wishlist</h2>
    <ul class="unbulleted left-align center-list">
      <li :class="{bolded: step === 1}">Controllers, Middleware must produce a response (or error)</li>
      <li>Errors should produce a response</li>
      <li v-if="step >= 2">Responses should look like returns</li>
      <li v-if="step >= 3">Return a value rather than invoking callbacks</li>
      <li v-if="step >= 4">Middleware that passes along type information</li>
      <li v-if="step >= 5"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Wishlist',
  props: {
    step: Number,
  },
};
</script>

<style scoped lang="scss">
.wishlist {
  li:last-of-type, .bolded {
    font-weight: bold;
  }
}
</style>
