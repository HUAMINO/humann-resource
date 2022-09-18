import Vue from 'vue'
// 设置后端返回的图片不正确 或者后端接口为null时 显示本地图片
Vue.directive('imgerror', {
  inserted(el, binding) {
    if (!el.src) {
      el.src = binding.value
    }
    el.onerror = function() {
      this.src = binding.value
    }
  },
  updated(el, binding) {
    if (!el.src) {
      el.src = binding.value
    }
  }
})

