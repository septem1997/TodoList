<template>
  <div>
    <div>
      <img class="bg" src="@/assets/img/homepage_bg.png">
      <div>张先生</div>
      <div>2019-10-10</div>
    </div>
    <div style="margin-bottom: 3.125rem">
      <NuxtChild />
    </div>
    <van-tabbar route class="tabbar">
      <van-tabbar-item
        replace
        to="/"
      >
        今日
        <img
          slot="icon"
          slot-scope="props"
          :src="require(props.active ? '@/assets/img/todolist_icon_today_sel.png' : '@/assets/img/todolist_icon_today_nor.png')"
        >
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/all"
      >
        全部
        <img
          slot="icon"
          slot-scope="props"
          :src="require(props.active ? '@/assets/img/todolist_icon_all_sel.png' : '@/assets/img/todolist_icon_all_nor.png')"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  mounted () {
    // this.$router.replace('login')
  }
}
</script>

<style scoped lang="stylus">
  .tabbar{
    height 3.125rem
    box-shadow:0 2px 12px 0 rgba(34,33,33,0.2)
    >>>.van-tabbar-item{
      font-size 0.75rem
    }
    >>> img{
      width 1.25rem
      height @width
    }
  }

  .bg{
    z-index -1
    position fixed
    width 100%
    height auto
    top 0
  }

</style>
