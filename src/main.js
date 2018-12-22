// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource)

Vue.prototype.setCookie = function (cname, cvalue, exdays) {
  var d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  var expires = 'expires=' + d.toUTCString()
  console.info(cname + '=' + cvalue + '; ' + expires)
  document.cookie = cname + '=' + cvalue + '; ' + expires
  console.info(document.cookie)
}

// 获取cookie
Vue.prototype.getCookie = function (cname) {
  var name = cname + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1)
    if (c.indexOf(name) !== -1) return c.substring(name.length, c.length)
  }
  return ''
}
// 清除cookie
Vue.prototype.clearCookie = function (cname) {
  this.setCookie(cname, '', -1)
}

Vue.prototype.checkCookie = function () {
  var user = this.getCookie('username')
  if (user !== '') {
    alert('Welcome again ' + user)
  } else {
    user = prompt('Please enter your name:', '')
    if (user !== '' && user != null) {
      this.setCookie('username', user, 365)
    }
  }
}

Vue.prototype.setHtml = function (key, value) {
  document.getElementById(key).html = value
}

Vue.prototype.URL = 'http://47.106.11.120:8080/DiGou/api/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

  beforeCreate () {
    const AV = require('leancloud-storage')
    AV.init('tP28gntmmps4RIuolfhYdStx-gzGzoHsz', '32U3ir7VusNxHsqsmbgGIzIB')
  }
})
