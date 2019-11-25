<template>
  <div>
    <transaction-list :list="list" from="today" />
  </div>
</template>

<script>
import TransactionList from '@/components/TransactionList'
export default {
  name: 'Index',
  components: { TransactionList },
  data () {
    return {
    }
  },
  computed: {
    list () {
      return this.$store.state.transaction.today
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
