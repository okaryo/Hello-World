var app = new Vue({
  el: '#app',
  data: {
    message: ['Vue.js', 'React.js'],
    count: 0,
    isChild: true,
    isActive: true,
    textColor: 'blue',
    bgColor: 'lightgray',
    radius: 50
  },
  methods: {
    increment: function() {
      this.count ++;
    }
  }
})