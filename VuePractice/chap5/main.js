Vue.component('comp-child', {
  template: '<p>{{ val }}</p>',
  props: ['val']
})
var myComponent = {
  template: '<p>myComponent</p>'
}
var app = new Vue({
  el: '#app',
  data: {
    message: 'ok'
  },
  components: {
    'my-component': myComponent
  },
  methods: {
  }
})