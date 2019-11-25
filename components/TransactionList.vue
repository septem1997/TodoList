<template>
  <van-collapse v-model="activeNames" accordion class="collapse">
    <van-collapse-item v-for="item in list" :key="item.id" :name="item.id">
      <div slot="title" class="head">
        <div class="priority" :style="{background:colors[item.priority]}">
          {{ item.priority }}
        </div>
        <div>
          <div><strong>{{ item.taskName }}</strong></div>
          <div class="date">
            {{ item.startTime }}至{{ item.endTime }}
          </div>
        </div>
        <div class="statistic">
          {{ item.children.filter(item => item.done).length }}/{{ item.children.length }}
        </div>
      </div>
      <div class="body" @click="$router.push('/step/edit')">
        <div v-for="(child,index) in item.children" :key="index" class="step">
          <van-checkbox :value="child.done" checked-color="#2176ff" @click="changeStepStatus(item,child)" />
          <div>
            <div class="title">
              {{ index+1 }}.{{ child.title }}
            </div>
            <div class="subTitle">
              {{ child.subTitle }}
            </div>
          </div>
          <van-icon name="arrow" />
        </div>
      </div>
    </van-collapse-item>
  </van-collapse>
</template>

<script>
export default {
  name: 'TransactionList',
  props: {
    from: String,
    list: Array
  },
  data () {
    return {
      colors: {
        'A1': '#2176ff',
        'A2': '#21AEFF',
        'B1': '#2176ff',
        'B2': '#2176ff',
        '待办': '#ECB642'
      },
      activeNames: null
    }
  },
  methods: {
    changeStepStatus (task, step) {

    }
  }
}
</script>

<style scoped lang="stylus">
.collapse{
  >>>.van-collapse-item__title--expanded::after{
    visibility hidden
  }
  >>>.van-cell__right-icon{
    padding-top 0.75rem
  }
  >>>.van-collapse-item__content{
    padding-top 0
  }
}
.step{
  display flex
  padding 0 1rem
  position relative
  &:not(:first-child){
    margin-top 1.25rem
  }
  .title{
    font-size 0.875rem
    color #222222
    margin-left 0.875rem
  }
  .subTitle{
    margin-left 0.875rem
    font-size 0.75rem
    color #999999
  }
  .van-icon-arrow{
    position absolute
    right 1.625rem
    top 0.125rem
  }
}
.body{
  background #F6F6F6
  padding 1rem 0
  border-radius 5px
}
.head{
  font-size 0.875rem
  position relative
  display flex
  align-items center
  .priority{
    margin-right 0.875rem
    width 2.25rem
    text-align center
    border-radius 50%
    line-height @width
    height @width
    color white
  }
  .statistic{
    position absolute
    right 0.75rem
    background rgba(33, 118, 255, 0.08)
    width 2.5rem
    text-align center
    color #666666
    font-size 0.75rem
    height 1.25rem
    line-height @height
    border-radius 1.25rem
  }
  .date{
    font-size 0.75rem
    color #999
  }
}
</style>
