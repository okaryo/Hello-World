var app = new Vue({
  el: '#app',
  data: {
    message: ['Vue.js', 'React.js'],
    count: 0,
    isChild: true,
    isActive: true,
    textColor: 'blue',
    bgColor: 'lightgray',
    radius: 50,
    ok: false,
    flag: false,
    name: 'oka',
    list: [
      { id: 1, name: 'slime', hp: 5 },
      { id: 2, name: 'lion', hp: 500 },
      { id: 3, name: 'dragon', hp: 50000 }
    ],
    htmlMessage: 'Hello <strong>Vue.js!</strong>'
  },
  methods: {
    increment: function() {
      this.count ++;
    },
    doAdd: function() {
      var max = this.list.reduce(function(a, b) {
        return a > b.id ? a : b.id
      }, 0)
      this.list.push({
        id: max + 1,
        name: this.name,
        hp: 500
      })
    },
    doRemove: function(index) {
      this.list.splice(index, 1)
    },
    doAttack: function(index) {
      this.list[index].hp -= 10
    }
  }
})