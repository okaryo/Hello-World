var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    list: ['apple', 'orange', 'banana', 'grape'],
    show: false
  },
  methods: {
    handleClick: function(event) {
      alert(event.target)
    }
  }
})