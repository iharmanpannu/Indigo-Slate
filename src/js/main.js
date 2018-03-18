// Vue.directive('click-outside', {
//   bind() {
//     let self = this;
//     this.event = function(event) {
//       self.vm.$emit(self.expression, event);
//     };
//     this.el.addEventListener('click', this.stopProp);
//     document.body.addEventListener('click', this.event);
//   },

//   unbind() {
//     this.el.removeEventListener('click', this.stopProp);
//     document.body.removeEventListener('click', this.event);
//   },

//   stopProp(event) {
//     event.stopPropagation();
//   }
// });

// new Vue({
//   el: '#app',
//   data: {
//     visible: false,
//     home: true,
//     show: false,
//     active: false,
//     subNavActive: false,
//     safNavShow: false,
//     repNavUl: false,
//     admNavShow: false,
//     rotateDropDown: false
//   },
//   methods: {},
//   events: {
//     closeEvent: function() {
//       console.log('close event called');
//       this.hide();
//     }
//   }
// });
'use strict';

Vue.directive('click-outside', {
  bind: function bind() {
    var self = this;
    this.event = function(event) {
      self.vm.$emit(self.expression, event);
    };
    this.el.addEventListener('click', this.stopProp);
    document.body.addEventListener('click', this.event);
  },
  unbind: function unbind() {
    this.el.removeEventListener('click', this.stopProp);
    document.body.removeEventListener('click', this.event);
  },
  stopProp: function stopProp(event) {
    event.stopPropagation();
  }
});

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
    admNavShow: false,
    rotateDropDown: false
  },
  methods: {},
  events: {
    closeEvent: function closeEvent() {
      console.log('close event called');
      // this.hide();
    }
  }
});
