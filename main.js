const app = Vue.createApp({
    data: function() {
        return{
            product: 'Socks',
            image: './assets/images/dub11.png',
            list: ['red', 'green', 'blue']
        }
    },
    methods: {
        coolMethod(){
            alert('Hej');
        }
    }
})