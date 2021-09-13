Vue.component('timer', {
  props: ['format'],
  data() {
    return {
      message: 'Hello, Vue',
      now: new Date(),
    }
  },
  methods: { // methods
    updateDate() {
      const date = this.format === 'short' ? new Date().toLocaleTimeString() : new Date();

      this.now = date;
    }
  },
  mounted() { // lifecycle hook
    setInterval(() => {
      this.updateDate();
    }, 1000);
  },
  template: '<div class="timer">{{ now }}</div>'
});
