var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello!',
    textmessage: 'i am kenta',
    val: false,
    radioval: '',
    range: 50,
    scrollY: 0,
    timer: null
  },
  created: function() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy: function() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleClick: function() {
      alert('you clicked!')
    },
    handler: function(comment) {
      console.log(comment)
    },
    handleScroll: function() {
      if (this.timer === null) {
        this.timer = setTimeout(function() {
          this.scrollY = window.scrollY
          clearTimeout(this.timer)
          this.timer = null
        }.bind(this), 200)
      }
    }
  }
})