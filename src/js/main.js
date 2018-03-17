new Vue({
  el: '#app',

  data: {
    visible: false,
    home: true,
    show: false,
    active: false,
    subNavActive: false,
    safNavShow: false,
    repNavUl: false,
    admNavShow: false
  },
  methods: {
    documentClick(e) {
      let el = this.$refs.subNavMenu;
      let target = e.target;
      if (target.stop) {
        return;
        // this.safNavShow = false;
        // this.subNavActive = false;
        // this.repNavUl = false;
        // this.admNavShow = false;
        // console.log('hello');
        // this.admNavShow = false;
      }
    },
    created() {
      document.addEventListener('click', this.documentClick);
    },
    destroyed() {
      document.removeEventListener('click', this.documentClick);
    }
  }
});
