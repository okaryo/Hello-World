var app = new Vue({
  el: '#app',
  data: {
    message: ['Vue.js', 'React.js'],
    count: 0
  },
  methods: {
    increment: function() {
      this.count ++;
    }
  }
})