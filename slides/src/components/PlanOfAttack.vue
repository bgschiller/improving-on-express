<template>
  <div class="plan-of-attack">
    <h2>Plan of Attack</h2>
    <ul class="unbulleted left-align center-list">
      <li v-if="step >= 2" :class="{ strike: justErrors }">Replace method calls on <code>res</code> with return values</li>
      <li v-if="step >= 3" :class="{ strike: justErrors }">Change callbacks to Promises</li>
      <li v-if="step >= 4" :class="{ strong: justErrors }">Catch errors and translate them into responses</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Wishlist',
  props: {
    step: Number,
    justErrors: Boolean,
  },
};
</script>

<style scoped lang="scss">
.strike {
  text-decoration: line-through;
}
.strong {
  font-weight: bold;
}
</style>
