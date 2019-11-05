var app = new Vue({
  el: '#app',
  data: {
    show: true,
    order: false,
    list: [
      { id: 1, name: 'apple',  price: 100 },
      { id: 2, name: 'orange', price: 200 },
      { id: 3, name: 'banana', price: 300 },
    ]
  },
  computed: {
    sortedList: function() {
      return _.orderBy(this.list, 'price', this.order ? 'desc' : 'asc')
    }
  },
  methods: {
  }
})