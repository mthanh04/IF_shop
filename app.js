const app = Vue.createApp({
    data() {
        return {
            searchQuery: '',
            slides: [
                "/asset/sl1.jpg",
                "/asset/sl2.jpg",
                "/asset/sl3.jpg"
            ]
            
        };
    },
    methods: {
        search() {
            // Thực hiện tìm kiếm
            console.log("Tìm kiếm: ", this.searchQuery);
        }
    }
});

app.mount('#app');

const navItems = document.querySelectorAll('.nav-item');

        navItems.forEach(item => {
            item.addEventListener('mouseover', () => {
                item.style.backgroundColor = '#ddd';
            });

            item.addEventListener('mouseout', () => {
                item.style.backgroundColor = '';
            });
        });

