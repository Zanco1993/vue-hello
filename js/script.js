new Vue({
    el: "#app",
    data: {
        message: '',
        image: './img/random-image.jpg',
        createImage: '',
        name: ''
    },
    methods: {
        saluto: function () {
            alert(`Ciao ${this.name}`);
            this.createImage = this.image
            
        }
    }
    
})

