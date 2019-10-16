var app = new Vue({
  el: '#app',
  data: {
  },
  methods: {
    handleClick: function() {
      alert('you clicked!')
    },
    handler: function(comment) {
      console.log(comment)
    }
  }
})