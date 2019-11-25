<template>
  <div>
    <nuxt class="container" />
  </div>
</template>
<script>
export default {
  transition (to, from) {
    console.log(to, from)
    if (!from) { return 'slide-left' }
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  }
}
</script>

<style>
</style>
