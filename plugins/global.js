import Vue from 'vue'
import Toast from 'vant/lib/toast'
import Icon from 'vant/lib/icon'
import 'vant/lib/toast/style'
import 'vant/lib/icon/style'
import 'vant/lib/icon/local.css'
import Tabbar from 'vant/lib/tabbar'
import 'vant/lib/tabbar/style'
import TabbarItem from 'vant/lib/tabbar-item'
import 'vant/lib/tabbar-item/style'
import Popup from 'vant/lib/popup'
import 'vant/lib/popup/style'
import Picker from 'vant/lib/picker'
import 'vant/lib/picker/style'
import Collapse from 'vant/lib/collapse'
import 'vant/lib/collapse/style'
import CollapseItem from 'vant/lib/collapse-item'
import 'vant/lib/collapse-item/style'
import Checkbox from 'vant/lib/checkbox'
import 'vant/lib/checkbox/style'

import moment from '@/plugins/global'
Vue.use(Toast).use(Icon).use(TabbarItem).use(Tabbar).use(Picker).use(Popup).use(Collapse).use(CollapseItem)
  .use(Checkbox)

export default ({ app }) => {
  Vue.prototype.$moment = moment
  // Vue.prototype.$toast = Toast
}
