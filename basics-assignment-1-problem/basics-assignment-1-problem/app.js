const app = Vue.createApp({
    data() {
        return{
            name: 'Michiel',
            age: 21,
            randomNumber1: Math.random(),
            img:'https://source.unsplash.com/user/c_v_r'
        };
    },
    methods: {
        randomNumber(){
            const randomNumber2 = Math.random()
            return randomNumber2

        }
    }
});


app.mount('#assignment');