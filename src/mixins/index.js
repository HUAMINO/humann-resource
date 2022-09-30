import Vue from 'vue'
Vue.mixin({
  methods: {
    hasPerm: function(key) {
      return this.$store.getters.points.includes(key)
    }
  }
})
