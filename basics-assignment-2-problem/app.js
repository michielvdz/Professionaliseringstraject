const app = Vue.createApp({
    data() {
      return {
        name:'',
        name2:'',
        confirmedName:''
      };
    },
    methods:{
      submitForm(event){
        event.preventDefault()
        alert('Submitted!');
      },
      setName(event){
        this.name = event.target.value;
      },
      setName2(event){
        this.name2 = event.target.value;
      },
      confirmName(){
        this.confirmedName = this.name2;
      },
      alert(){
        alert('Hello!');
      },
    }
  });
  
  app.mount('#assignment');