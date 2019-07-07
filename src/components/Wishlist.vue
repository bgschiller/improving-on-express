<template>
  <div class="wishlist">
    <h2>Express Wishlist</h2>
    <ul>
      <li>Errors should produce a response</li>
      <li v-if="step >= 2">Responses should look like returns</li>
      <li v-if="step >= 3">Return a value rather than invoking callbacks</li>
      <li v-if="step >= 4">"Better" typechecking</li>
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
  li:last-of-type {
    font-weight: bold;
  }
}
</style>
