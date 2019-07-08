<template>
  <div class="wishlist">
    <h2>Express Wishlist</h2>
    <ul class="unbulleted left-align center-list">
      <li :class="{bolded: step === 1}">Errors should produce a response</li>
      <li>Fewer ways to return</li>
      <li v-if="step >= 2">Responses should look like returns</li>
      <li v-if="step >= 3">Return a value rather than invoking callbacks</li>
      <li v-if="step >= 4">Middleware that passes along type information</li>
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
