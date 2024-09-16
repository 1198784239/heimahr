import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon) // 全局注册组件

// 扫描目录中的文件
const req = require.context('./svg', false, /\.svg$/)
console.log(req.keys())
// map循环每一项map(()=>{})
// 循环引用到每一项
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
