new Vue({
    el: "#app",
    data: {
        message: '',
        image: './img/random-image.jpg',
        name: ''
    },
    methods: {
        saluto: function () {
            alert(`Ciao ${this.name}`)
            
        }
    }
    
})

