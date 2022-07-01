let app = Vue.createApp({
    data: function() {
        return {
            greeting: 'add note',
            isVisible: false,
            notes: []
        }
    },
    methods: {
        greet(greeting) {
            console.log(this.greeting)
        },
        toggleBox(){
            this.isVisible =! this.isVisible
            console.log(this.isVisible)
        },
        submitArray(greeting){
            this.notes.push(greeting)
            console.log(this.notes)
        }
    }
})

app.mount('#app')