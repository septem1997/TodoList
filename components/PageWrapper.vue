<template>
  <div class="page">
    <div class="navBar">
      <div class="back">
        <van-icon class="icon" name="arrow-left" @click="$router.back()" />
      </div>
      <slot name="title" />
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageWrapper'
}
</script>

<style scoped lang="stylus">
.page{
  width 100%
  height 100%
  .navBar{
    text-align center
    background white
    width 100%
    font-size 1.125rem
    position fixed
    height 2.75rem
    line-height @height
    top 0
    .back{
      width 2.75rem
      position absolute
      left 0
      font-size 1.125rem
      color #222
      .icon{
        cursor pointer
        margin-left -0.5rem
        padding-top 0.8rem
      }
      &:active{
        background var(--gray)
      }
    }
  }
  .content{
    margin-top 2.75rem
  }
}

</style>
