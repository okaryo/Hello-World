var app = new Vue({
  el: '#app',
  data: {
    width: 800,
    height: 800,
    budget: 300,
    limit: 2,
    list: [
      { id: 1, name: 'apple', price: 900 },
      { id: 2, name: 'banana', price: 1900 },
      { id: 3, name: 'orange', price: 9400 },
      { id: 4, name: 'fish', price: 90 },
    ]
  },
  computed: {
    halfWidth: function() {
      return this.width / 2
    },
    halfHeight: function() {
      return this.height / 2
    },
    halfPoint: function() {
      return {
        x: this.halfWidth,
        y: this.halfHeight
      }
    },
    matched: function() {
      return this.list.filter(function(el) {
        return el.price <= this.budget
      }, this)
    },
    limited: function() {
      return this.matched.slice(0, this.limit)
    }
  },
  methods: {
  }
})