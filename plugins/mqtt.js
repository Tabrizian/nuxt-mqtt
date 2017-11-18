import Vue from 'vue'

if (process.browser) {
  const mqtt = require('vue-mqttsocket').default
  Vue.use(mqtt, {uri: 'ws://localhost:8083/mqtt'})
}
