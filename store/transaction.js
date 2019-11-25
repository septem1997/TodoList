// 事务仓库，存放今日事务和全部事务两个列表，所有操作也均在此进行
export const state = () => ({
  today: [
    {
      id: 0,
      priority: 'A1',
      taskName: '产品上架',
      startTime: '2019-01-01',
      endTime: '2019-05-01',
      children: [
        {
          id: 0,
          title: '收集资料',
          subTitle: '博世',
          done: true
        },
        {
          id: 1,
          title: '编写上架资料',
          subTitle: '',
          done: false
        }
      ]
    },
    {
      id: 1,
      priority: 'A2',
      taskName: '上架产品',
      startTime: '2019-01-01',
      endTime: '2019-05-01',
      children: [
        {
          id: 0,
          title: '收集资料',
          subTitle: '博世',
          done: true
        },
        {
          id: 1,
          title: '编写上架资料',
          subTitle: '',
          done: false
        }
      ]
    }
  ],
  all: []
})

export const mutations = {
  // set (state, user) {
  //   sessionStorage.setItem('user', JSON.stringify(user))
  //   state.user = user
  // }
}

export const actions = {
  switchStepStatus (state, info) {

  }
}
