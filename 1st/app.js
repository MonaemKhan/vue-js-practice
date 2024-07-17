Vue.createApp({
    data(){
        return {
            isShow: true,
            title: 'This Is Title',
            aurthor: 'This Is aurthor',
            age: 45
        }
    },
    methods: {
        hidebutton(){
            this.isShow = false;
        },
        showbutton(){
            this.isShow = true;
        }
    },
}).mount('#app');

Vue.createApp({
    data(){
        return{
            books : [
                {
                    title: 'Agnibina',aurthor: 'Kazi Najrul Islam', age : 45, isread : true
                },
                {
                    title: 'Am Atir Vepu',aurthor: 'Bibuti Vuson Bondopoddai', age : 56 , isread : false
                },
                {
                    title: 'Lal Salu',aurthor: 'Sayad Waliullah', age : 40, isread : true
                },
            ]
        }
    }
}).mount('#app1');