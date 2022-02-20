const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        };
    },
    watch: {
        result() {
            const that = this;
            setTimeout(function () {
                that.counter = 0
                console.log("reset")
            }, 5000)


        }
    },
    computed: {
        result() {
            if (this.counter === 37) {
                return this.counter;
            }
            else if (this.counter < 37) {
                return 'Not there yet'
            }
            else {
                return 'Too much!'
            }
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        }
    }
});

app.mount('#assignment');