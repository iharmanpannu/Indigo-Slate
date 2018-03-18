import { directive as onClickaway } from 'vue-clickaway';

new Vue({
  el: '#app',
  directives: {
    onClickaway: onClickaway
  },
  data: {
    visible: false,
    home: true,
    show: false,
    active: false,
    subNavActive: false,
    safNavShow: false,
    repNavUl: false,
    admNavShow: false,
    rotateDropDown: false
  },
  methods: {
    away: function() {
      this.safNavShow = false;
      console.log('clicked away');
    }
  }
});
