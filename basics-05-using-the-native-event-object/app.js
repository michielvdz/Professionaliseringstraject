const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullname(){
      console.log("OK")
      if (this.name === ''){
        return '';
      }
      else{
        return this.name + ' ' + 'Vandezande'
      }
    }
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    clear(){
      this.name = ''
    }
  }
});

app.mount('#events');
